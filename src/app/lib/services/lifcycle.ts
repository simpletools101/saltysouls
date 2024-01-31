/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CommonEvents, IAsyncGlobalEventEmitter } from "./events/events";


export enum LifecyclePhases {
    /**
     * available when the app is starting
     */

    STARTING = 0,

    /**
     * Available when data has been fetched
     */

    READY = 1,

    /**
     * Called when everything is settle
     */

    FINISHED = 2,
}

export class Lifecyle {
    private _phase: LifecyclePhases = LifecyclePhases.STARTING;
    public onDidChangePhase:IAsyncGlobalEventEmitter<LifecyclePhases> = CommonEvents.createGlobalAsyncEventEmitter()

    public set phase(value: LifecyclePhases) {
        this.onDidChangePhase.raiseEventAsync(value)
    }


    public get phase(): LifecyclePhases {
        return this._phase;
    }
}


export const LifecycleManager = new Lifecyle()