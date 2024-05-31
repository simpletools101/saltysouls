/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {
    IBlogContentItem,
    IBlogLikeItem,
    IBlogPost,
    IBlogPostCard,
    IPostBanner,
    ISearchCard,
} from "../../types/blogPost";
import { ManagedPromise } from "../../utils/async";
import { Pr } from "../../types/pr";
import { GraphQLClient, gql } from "graphql-request";
import { createContext as createServiceContext } from "@lit/context";

interface IRequestsModelCachedData {
    bannerBlogCards: IPostBanner[];
    searchItems: ISearchCard[];
    privacyPolicies: Pr[];
    blogData: IBlogPost[];
    articleCards: IBlogPostCard[];
}
export const IRequestsContext = createServiceContext<RequestsModel>(Symbol("requestContext"));

const GRAPH_CMS_CLIENT = new GraphQLClient(import.meta.env.VITE_SALTY_SOULS_CMS!!);

/**
 * The Requests Model makes requests to graphcms(system) returning all the blogs data and privacy_policy
 * and it carries out filtering for the following parts (SearchItems,BlogData,ArticlesCards) this filtering
 * is based pn the BlogData
 */

export class RequestsModel {
    /**
     * Used to store (Requests Cache) for current Requests Temporarily
     *  to enable quick access and reduce requests
     */
    private cachedRequestsData: IRequestsModelCachedData = {
        bannerBlogCards: [],
        searchItems: [],
        privacyPolicies: [],
        blogData: [],
        articleCards: [],
    };

    public __intialize__() {
        this.getBlogData().then((value) => {
            this.filterAndCacheData(value.blogs);
        });
    }

    /**
     * BannerCards Managed Promise
     * Control when this fails or resolves;
     */

    public __bannerBlogCardsPromise = new ManagedPromise<IPostBanner[]>(() => {
        this.getBannerBlogCards();
    });

    /**
     * SearchItems Managed Promise
     * Control when this fails or resolves;
     */

    public __searchItemsPromise = new ManagedPromise<ISearchCard[]>(() => {
        this.getSearchItems();
    });

    /**
     * Privacy Policy Managed Promise
     * Control when this fails or resolves;
     * @todo This only requests data when a user navigated to this page assuming that user don't normally
     * visit this page
     */

    public __privacyPoliciesPromise = new ManagedPromise<Pr[]>(() => {
        this.getPrivacyPolicyItems();
    });
    /**
     * BannerCards Managed Promise
     * Control when this fails or resolves;
     */

    public __articleCardsPromise = new ManagedPromise<IBlogPostCard[]>(() => {
        this.getBlogArticles();
    });

    private requestPrivacyPolicies(): Promise<{ ygcontents: Pr[] }> {
        const __query__ = gql`
            {
                ygcontents {
                    title
                    policyNumber
                    content {
                        text
                    }
                }
            }
        `;
        return GRAPH_CMS_CLIENT.request(__query__);
    }

    private async getPrivacyPolicies() {
        let data = await this.requestPrivacyPolicies();
        return data;
    }

    private requestBlogsData(): Promise<{ blogs: IBlogPost[] }> {
        const __query__ = gql`
            {
                blogs {
                    createdAt
                    id
                    slug
                    description
                    title
                    readtime {
                        text
                    }
                    content {
                        html
                    }
                    image {
                        url
                    }
                    comments {
                        name
                        createdAt
                        comment
                    }
                }
            }
        `;
        return GRAPH_CMS_CLIENT.request(__query__);
    }

    private async getBlogData() {
        let data_;
        try {
            data_ = await this.requestBlogsData();
        } catch (error) {
            console.log("REQUEST_CONTEXT_ERROR", error.message);
        }
        return data_!;
    }

    private async filterAndCacheData(blogData: IBlogPost[]) {
        return new Promise<void>((c) => {
            //cache the main blogData itself first
            this.cachedRequestsData.blogData = blogData.reverse();

            //use the data to fill other values;

            //fill the bannerBlogItems
            this.cachedRequestsData.bannerBlogCards = this.cachedRequestsData.blogData
                .map((data) => {
                    return {
                        title: data.title,
                        createdAt: data.createdAt,
                        id: data.id,
                        readtime: data.readtime,
                        slug: data.slug,
                    };
                })
                .slice(0, 5);

            //fill the articleCards
            this.cachedRequestsData.articleCards = this.cachedRequestsData.blogData.map((data) => {
                return {
                    title: data.title,
                    createdAt: data.createdAt,
                    description: data.description,
                    id: data.id,
                    image: data.image,
                    slug: data.slug,
                    readtime: data.readtime,
                };
            });

            //fill search items

            this.cachedRequestsData.searchItems = this.cachedRequestsData.blogData.map((data) => {
                return {
                    title: data.title,
                    content: data.content,
                    createdAt: data.createdAt,
                    description: data.description,
                    id: data.id,
                    readtime: data.readtime,
                    slug: data.slug,
                };
            });

            //verify data is present

            if (this.cachedRequestsData.blogData.length > 0 && this.cachedRequestsData.bannerBlogCards.length > 0) {
                c();
            }
        });
    }

    private getPrivacyPolicyItems() {
        if (this.hasCachedData(this.cachedRequestsData.privacyPolicies)) {
            this.__privacyPoliciesPromise.__completeWithValue(this.cachedRequestsData.privacyPolicies);
        } else {
            this.getPrivacyPolicies().then((data) => {
                this.cachedRequestsData.privacyPolicies = data.ygcontents;
                this.__privacyPoliciesPromise.__completeWithValue(this.cachedRequestsData.privacyPolicies);
            });
        }
    }

    public async getContentDataForBlog(slug: string) {
        let finalData: IBlogContentItem;

        /**
         * If cachedData is present we use it
         * if not we query new Data
         */
        if (this.hasCachedData(this.cachedRequestsData.blogData)) {
            let blogItems: IBlogContentItem[] = this.cachedRequestsData.blogData.filter((v) => {
                return v.slug == slug;
            });
            let item = blogItems[0];
            finalData = {
                title: item.title,
                comments: item.comments,
                content: item.content,
                createdAt: item.createdAt,
                image: item.image,
                readtime: item.readtime,
                slug: item.slug,
                id: item.id,
                description: item.description,
            };
        } else {
            /**
             * Fetch data for new Blog Component
             */
            try {
                let blogData = await this.getBlogData();
                this.filterAndCacheData(blogData.blogs);
                let blogItems: IBlogContentItem[] = this.cachedRequestsData.blogData.filter((v) => {
                    return v.slug == slug;
                });
                let item = blogItems[0];
                finalData = {
                    title: item.title,
                    comments: item.comments,
                    content: item.content,
                    createdAt: item.createdAt,
                    image: item.image,
                    readtime: item.readtime,
                    slug: item.slug,
                    id: item.id,
                    description: item.description,
                };
            } catch (e) {
                console.error("No interner Connection");
            }
        }

        return finalData!;
    }

    public getContentDataAsideBlogs(excludeSlug: string): IBlogLikeItem[] {
        let blogItems: IBlogLikeItem[] = this.cachedRequestsData.blogData.filter((v) => {
            return v.slug != excludeSlug;
        });
        return blogItems.slice(0, 3);
    }

    private getBlogArticles() {
        if (this.hasCachedData(this.cachedRequestsData.articleCards)) {
            this.__articleCardsPromise.__completeWithValue(this.cachedRequestsData.articleCards);
        } else {
            this.getBlogData().then((value) => {
                this.filterAndCacheData(value.blogs).then(() => {
                    this.__articleCardsPromise.__completeWithValue(this.cachedRequestsData.articleCards);
                });
            });
        }
    }

    private getSearchItems() {
        if (this.hasCachedData(this.cachedRequestsData.searchItems)) {
            this.__searchItemsPromise.__completeWithValue(this.cachedRequestsData.searchItems);
        } else {
            this.getBlogData().then((value) => {
                this.filterAndCacheData(value.blogs).then(() => {
                    this.__searchItemsPromise.__completeWithValue(this.cachedRequestsData.searchItems);
                });
            });
        }
    }

    private getBannerBlogCards() {
        if (this.hasCachedData(this.cachedRequestsData.bannerBlogCards)) {
            this.__bannerBlogCardsPromise.__completeWithValue(this.cachedRequestsData.bannerBlogCards);
        } else {
            this.getBlogData().then((value) => {
                this.filterAndCacheData(value.blogs).then(() => {
                    this.__bannerBlogCardsPromise.__completeWithValue(this.cachedRequestsData.bannerBlogCards);
                });
            });
        }
    }

    private hasCachedData(item: any[]) {
        return item.length > 0;
    }
}
