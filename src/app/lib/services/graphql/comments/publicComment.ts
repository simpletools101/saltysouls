/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { GraphQLClient, gql } from "graphql-request";

let cms = new GraphQLClient(process.env.SALTY_SOULS_CMS!);

export async function publishComment(id: string) {
    const __update__ = gql`
        mutation Blogs {
            publishComment(where: { id: "${id}" }) {
                comment
            }
        }
    `;
    return cms.request(__update__)
}

