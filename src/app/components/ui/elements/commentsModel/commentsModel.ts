/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { consume } from "@lit/context";
import { IBlogPostComment } from "../../../../../types/blogPost";
import {
    IResources,
    IResourcesContext,
} from "../../../../workspace/context/resourcesContext";
import { map } from "lit/directives/map.js";
import { createRef, ref } from "lit/directives/ref.js";
import { formatDateToReadable } from "../../../../lib/controllers/dateTimeM";
import { createComment } from "../../../../lib/services/graphql/comments/createComment";
import { publishComment } from "../../../../lib/services/graphql/comments/publicComment";
import { when } from "lit/directives/when.js";
import "../commentItem/commentItem";

@customElement("xf-comments-model")
export class CommentsModel extends LitElement {
    /**
     * Get Access to Resources
     */
    @consume({ context: IResourcesContext })
    @property({ attribute: false })
    public resourcesContext!: IResources;

    @property({ attribute: false }) commentItems: IBlogPostComment[] = [];
    @property({ attribute: false }) blogID: string = "";

    public _form = createRef<HTMLFormElement>();
    public get _formElement() {
        return this._form.value!;
    }

    /**
     * user name Field
     * Element
     */
    public _userNameRef = createRef<HTMLInputElement>();
    public get _userNameElement() {
        return this._userNameRef.value!;
    }

    /**
     * userEmail Field
     */
    public _userEmailRef = createRef<HTMLInputElement>();
    public get _userEmailElement() {
        return this._userNameRef.value!;
    }

    /**
     * userCommentField
     */
    public _userCommentRef = createRef<HTMLTextAreaElement>();
    public get _userCommentElement() {
        return this._userCommentRef.value!;
    }

    static override styles = css`
        .container {
            width: 100%;
        }
        .container .title-section {
            width: 100%;
            display: flex;
            align-items: center;
        }
        .title-section .wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            /* width:150px; */
            height: 25px;
            margin-top: 20px;
            margin-bottom: 20px;
            margin-right: 20px;
            color: var(--turquoise);

            text-transform: uppercase;
            font-size: 18px;
            border-bottom: 2px solid var(--turquoise);
            padding: 8px;
        }

        .comments-container {
            width: 100%;
        }
        .comments-container .wrapper {
            padding: 30px;
            height: fit-content;
        }

        .comment-entry-section {
            width: 100%;
        }

        .comment-entry-section p {
            width: 100%;
        }

        .entry-containers {
            display: flex;
            margin-top: 20px;
        }

        .entry-containers .wrapper {
            width: fit-content;
        }
        .entry-containers .section-1 {
            display: flex;
        }
        .entry-containers .entry-item {
            display: block;
        }
        .entry-containers .entry-item:nth-child(1) {
            margin-right: 30px;
        }
        .entry-containers .entry-item label {
            display: block;
            margin-bottom: 8px;
            color: #3b3b3b;
        }

        .entry-containers .entry-item input {
            border: 1px solid #6d6d6d;
            outline: none;
            height: 35px;
            width: 200px;
            font-size: 15px;
            font-family: OpenSans;
        }

        .entry-containers .section-2 {
            margin-top: 30px;
            width: 100%;
        }

        .entry-containers .section-2 label {
            display: block;
            margin-bottom: 8px;
            color: #3b3b3b;
        }

        .entry-containers .section-2 textarea {
            resize: none;
            width: inherit !important;
            height: 150px;
            border: 1px solid #6d6d6d;
            outline: none;
            font-size: 15px;
            font-display: auto;
            font-family: OpenSans;
        }
        .entry-containers .post-comment-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40px;
            border: unset;
            cursor: pointer;
            margin-top: 20px;
            font-size: 13px;
            font-display: auto;
            background-color: var(--turquoise);
            border: 2px solid var(--turquoise);
            width: 180px;
            color: #fff;
            font-size: 16px;
            transition: all 0.3s;
        }
        .entry-containers .post-comment-btn:hover {
            background-color: unset;
            color: #000;
            border-color: #000;
        }

        .entry-containers .post-comment-btn:active {
            transform: scale(0.8);
        }

        .akismet_comment_form_privacy_notice a {
            color: var(--turquoise);
        }

        @media (max-width: 545px) {
            .entry-containers .section-1 {
                display: block;
            }
            .entry-containers .entry-item input {
                width: 100%;
            }
            .entry-containers .entry-item:nth-child(1) {
                margin-right: 0px;
                margin-bottom: 12px;
            }
        }
        @media(max-width:402px){
            .entry-containers .entry-item input {
                width: 80%;
            }
            .entry-containers .section-2 textarea  {
                width:80%;
            }
        }
    `;

    /**
     * Try to submit the comment
     */

    private onDidSubmitCommentModel() {
        let _submitData = {
            comment: this._userCommentElement.value,
            userName: this._userNameElement.value,
        };
        if (this._formElement.checkValidity()) {
            let commentResult = createComment({
                comment: _submitData.comment,
                id: this.blogID,
                userName: _submitData.userName,
            });
            commentResult.then(
                (v) => {
                    publishComment(v.createComment.id).then(
                        () => {
                            this.resetCommentsModel();
                            this.sendComentResult(
                                "Thank you For your Reply!",
                                "success"
                            );
                        },
                        () => {
                            this.sendComentResult(
                                "Something Wen Wrong, Try Again!",
                                "error"
                            );
                        }
                    );
                },
                () => {
                    this.sendComentResult(
                        "Something Wen Wrong, Try Again!",
                        "error"
                    );
                }
            );
        } else {
            this.sendComentResult("Please Check Your Entries", "error");
        }

        //publish comment
    }

    /**
     * Reset the comments Model
     */

    private resetCommentsModel() {
        this._formElement.reset();
    }

    /**
     * Send A Notification Result Up to the blogView
     * @param message The message to send
     * @param state the current state whether error or success
     */
    public sendComentResult(message: string, state: "error" | "success") {
        this.dispatchEvent(
            new CustomEvent("xf-notification", {
                detail: {
                    type: state,
                    message: message,
                },
            })
        );
    }

    protected override render(): unknown {
        return html`
            <div class="container">
                ${when(
                    this.commentItems.length > 0,
                    () => {
                        return html`
                            <div class="title-section">
                                <div class="wrapper">
                                    COMMENTS (${this.commentItems.length})
                                </div>
                            </div>
                        `;
                    },
                    () => {
                        return html`<div></div>`;
                    }
                )}
               
                <div class="comments-container">
                    <div class="wrapper">
                        ${map(this.commentItems, (item) => {
                            return html`
                                <xf-comment-item
                                    .imgSource=${this.resourcesContext
                                        .imageSources.commentsUserImage}
                                    .userName=${item.name}
                                    .comment=${item.comment}
                                    .dateCreated=${formatDateToReadable(
                                        item.createdAt
                                    )}
                                ></xf-comment-item>
                            `;
                        })}
                    </div>
                </div>
                <div class="title-section">
                    <div class="wrapper">Leave Reply</div>
                </div>
                <div class="comment-entry-section">
                    <p>Your email Address will not be published</p>
                    <form class="entry-containers" ${ref(this._form)}>
                        <div class="wrapper">
                            <div class="section-1">
                                <div class="entry-item">
                                    <label id="name-prompt" for="user-name-entry">Name*</label>
                                    <input
                                    id="user-name-entry"
                                    aria-labelledby="name-prompt"
                                    autocapitalize="off"
                                    autocomplete="off"
                                    spellcheck="false"
                                    ${ref(this._userNameRef)}
                                        type="text"
                                        placeholder="YOUR NAME"
                                        required
                                    />
                                </div>
                                <div class="entry-item">
                                    <label id="email-prompt" for="user-email-entry">Email*</label>
                                    <input
                                    id="user-email-entry"
                                    aria-labelledby="email-prompt",
                                    autocapitalize="off"
                                    autocomplete="off"
                                    spellcheck="false"
                                    ${ref(this._userEmailRef)}
                                        type="email"
                                        placeholder="YOUR EMAIL"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="section-2">
                                <label id="comment-entry" for="user-comment-enty">Comment</label>
                                <textarea
                                aria-labelledby="comment-entry"
                                autocapitalize="off"
                                    autocomplete="off"
                                    spellcheck="false"
                                    ${ref(this._userCommentRef)}
                                    rows="4"
                                    cols="50"
                                ></textarea required>
                            </div>

                            <xf-make-button
                                @xf-key-tap=${this.onDidSubmitCommentModel}
                                class="post-comment-btn"
                                aria-label="Submit Comment"
                            >
                                SUBMIT COMMENT
                            </xf-make-button>
                            <p class="akismet_comment_form_privacy_notice">
                               Don't worry we don't spam
                            </P>
                        </div>
                    </form>
                </div>
            </div>
        `;
    }
}
