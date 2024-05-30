/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Patkimera. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * A barrier that is initially closed and then becomes opened permanently.
 */
export class Barrier {
	private _isOpen: boolean;
	private _promise: Promise<boolean>;
	private _completePromise!: (v: boolean) => void;

	constructor() {
		this._isOpen = false;
		this._promise = new Promise<boolean>((c, e) => {
			this._completePromise = c;
		});
	}

	isOpen(): boolean {
		return this._isOpen;
	}

	open(): void {
		this._isOpen = true;
		this._completePromise(true);
	}

	wait(): Promise<boolean> {
		return this._promise;
	}
}

export class ManagedPromise<T> {

	private __promiseFunction:(()=>void) | undefined = undefined;
	private __completeState: ((value: T | PromiseLike<T>) => void)| undefined = undefined;
	private __errorState: ((reason?: any) => void) | undefined = undefined;
	private _promise:Promise<T> = new Promise((complete,error)=>{
		this.__completeState = complete;
		this.__errorState = error;
	});

	constructor(promiseFunction:()=>void){
		this.__promiseFunction = promiseFunction;
	}

	public __cowait(){
		this.__promiseFunction!()
		return this._promise;
	}

	public __completeWithValue(value:T){
		if(this.__completeState){
			this.__completeState(value);
		}
	};

	public __errorWithValue(reason?:any){
		if(this.__errorState){
			this.__errorState(reason)
		}
	}



}