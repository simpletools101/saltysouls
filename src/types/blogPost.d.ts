/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export interface IBlogPostComment {
    name: string;
    createdAt: string;
    comment: string;
}

export interface IBlogPost {
    /**
     * The slug of the post
     */
    slug: string;

    /**
     * The id of the blog
     */
    id: string;

    /**
     * the content of the blog;
     */
    content: {
        html: string;
    };

    /**
     * the title of the blog
     */
    title: string;

    /**
     * Comments of the blog
     */

    comments: IBlogPostComment[];

    /**
     * The description of the blog
     */
    description: string;

    /**
     * The image of the blog;
     */
    image: {
        url: string;
    };

    /**
     * The time for reading the post
     */
    readtime: {
        text: string;
    };

    /**
     * publishtime
     */

    createdAt: string;
}

export type IPostBanner = Pick<
    IBlogPost,
    "title" | "slug" | "id" | "createdAt" | "readtime"
>;
export type IBlogPostCard = Pick<
    IBlogPost,
    "title" | "slug" | "id" | "createdAt" | "readtime" | "description" | "image"
>;
export type ISearchCard = Pick<
    IBlogPost,
    | "title"
    | "slug"
    | "id"
    | "createdAt"
    | "readtime"
    | "description"
    | "content"
>;

export type ISearchItem = Pick<
    IBlogPost,
    "title" | "slug" | "createdAt" | "readtime" | "id"
>;

export type IBlogLikeItem  = Pick<IBlogPost,"title" | "slug" | "image">

export type IBlogContentItem = Pick<IBlogPost, "title" | "comments" | "content" | "image" | "readtime" | "createdAt" | "slug" | "id" | "description">;