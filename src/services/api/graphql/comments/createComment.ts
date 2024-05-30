/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { GraphQLClient, gql } from "graphql-request";

let cms = new GraphQLClient(import.meta.env.VITE_SALTY_SOULS_CMS!!);

interface ICreateComment {
    /**
     * The id of the blog
     */
    id: string;

    /**
     * The Comment
     */
    comment: string;

    /**
     * name of person commenting
     */
    userName: string;
}

interface ICreateCommentResponse {
    id: string;
    name: string;
    comment: string;
}

export async function createComment(
    options: ICreateComment
): Promise<{ createComment: ICreateCommentResponse }> {
    const __mutation__ = gql`
    mutation Blogs {
        createComment(
            data: {name: "${options.userName}", comment: "${options.comment}", clrgs5j6eamdx01mob6kohk8i: {connect: {id: "${options.id}"}}}
          ) {
            id
            name
            comment
          }
    }
   
    
    `;
    return cms.request(__mutation__);
}
