/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { parseISO,format } from "date-fns";

//@ts-ignore
export function formatDateOrTime(value: string) {
    try {

        let isoObject = parseISO(value);

        return format(isoObject,"do MMMM, yyyy")
        
    } catch (error) {
        
    }
   
}

export function formatDateToReadable(value:string){
    let isoObject = parseISO(value);
    return format(isoObject,"do MMMM, yyyy")

}