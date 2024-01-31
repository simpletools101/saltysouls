/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { formatDistance,parseISO,format } from "date-fns";

export function formatDateOrTime(value: string) {
    let distance = formatDistance(new Date(), new Date(value));

    return `${distance} ago`;
}

export function formatDateToReadable(value:string){
    let isoObject = parseISO(value);
    return format(isoObject,"do MMMM, yyyy")

}