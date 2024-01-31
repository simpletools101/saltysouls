/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


/**
 * akismet Server Response
 */

export interface IAkismetServerResponse {
    email:string;
    comment:string,
    userName:string;
    /**
     * Valid Spam Comment 
     */
    isSpam:boolean
    __ERROR__?:boolean;
}

export interface IAkismetServerRequest {
    email:string;
    comment:string,
    userName:string;
}