/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RequestsModel, IRequestsContext } from "../../context/requestsModel";
import { consume } from "@lit/context";
import { repeat } from "lit/directives/repeat.js";
import { Pr } from "../../../../types/pr";

@customElement("xf-route-privacypolicy")
export class PrivacyPolicyRoute extends LitElement {
    /**
     *
     * Get access to the Requests Data
     */

    @consume({ context: IRequestsContext })
    @property({ attribute: false })
    public requestsContext!: RequestsModel;

    @property({ type: Array }) privacy_policies: Pr[] = [];

    override connectedCallback(): void {
        super.connectedCallback();
        this.initializePrivacyPolicyDocumentRequest()
    }

    private initializePrivacyPolicyDocumentRequest(){
        this.requestsContext.__privacyPoliciesPromise.__cowait().then((data) => {
            this.privacy_policies = data;
        });
    }

    static override styles = css`
        :host {
            width: 100%;
        }
        .container {
            width: inherit;
            background-color: #fff;
        }
        .container > .title-section {
            height: 120px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .title-section h2 {
            margin-bottom: 8px;
            font-size: 26pt;
            color: #000;
        }

        .title-section > div {
            font-size: 15pt;
            text-align: center;
            margin: 0px 7px 0px 7px;
            color: #000;
        }
        .content-section {
            margin-top: 50px;
        }

        .content-section .wrapper {
            width: 85%;
            margin: auto;
        }

        @media (max-width: 790px) {
            .title-section h2 {
                font-size: 24pt;
            }
            .title-section > div {
                font-size: 14pt;
            }
            .content-section {
                margin-top: 40px;
            }
        }

        @media (max-width: 728px) {
            .container > .title-section {
                height: 100px;
            }
            .content-section .wrapper {
                width: 90%;
            }
            xf-content-title {
                font-size: 16pt;
            }
        }

        @media (max-width: 648px) {
            .container > .title-section {
                height: 80px;
            }
            .content-section .wrapper {
                width: 100%;
            }
        }
    `;
    protected override render(): unknown {
        return html`
            <div class="container">
                <div class="title-section">
                    <h2>Privacy Policy</h2>
                    <div>This page contains SaltySouls privacy policies.</div>
                </div>
                <div class="content-section">
                    <div class="wrapper">
                        ${repeat(
                            this.privacy_policies,
                            (item) => {
                                return html`
                                    <div class="item-container">
                                        <xf-content-title
                                            >${item.policyNumber}.${item.title}</xf-content-title
                                        >
                                        <xf-content-data
                                            >${item.content
                                                .text}</xf-content-data
                                        >
                                    </div>
                                `;
                            }
                        )}
                    </div>
                </div>
            </div>
        `;
    }
}
