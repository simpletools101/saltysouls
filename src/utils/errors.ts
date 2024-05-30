/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


export function formatErrorMessage(message:string,source:string){
    let formattedMessage = `ERROR:${message}. ORGIN:${source}`
    console.error(formattedMessage);
}

export function formatWarningMessage(message:string,source:string){
    let formattedMessage = `WARNING:${message}. ORGIN:${source}`
    console.warn(formattedMessage);
}