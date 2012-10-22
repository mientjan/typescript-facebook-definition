/*
---
definition file of the js Facebook SDK

author: [Mient-jan Stelling](http://www.github.com/mientjan)
license: [MIT License](https://github.com/mientjan/social-definition/blob/master/license.txt)

*/

interface FacebookUserAuthenticate {
	status: string;				// Current status of the session
	authResponse?: FacebookAuthResponse;
}

interface FacebookAuthResponse {
	userID: string;         // String representing the current user's ID 
	signedRequest: string;  // String with the current signedRequest 
	expiresIn: string;		// UNIX time when the session expires
	accessToken: string;	// Access token of the user 
}

interface FacebookUIParameters {
	method?: string;
	name?: string;
	link?: string;
	picture?: string;
	caption?: string;
	description?: string;
}

interface FB {

	init(options:{
		appId?: string;					// Your application ID. Default null
		cookie?:bool;					// true to enable cookie support. false
		logging?: bool;					// false to disable logging.Optional	true
		status?: bool;					// true to fetch fresh status.Optional	true
		xfbml?: bool;					// true to parse XFBML tags.Optional	false
		channelUrl?: string;			// Specifies the URL of a custom URL channel file.This file must contain a single script element pointing to the JavaScript SDK URL.Optional	null
		authResponse?: Object;			// Manually set the object retrievable from getAuthResponse.Optional	true
		frictionlessRequests?: bool;	//  see Frictionless Requests	Optional	false
		hideFlashCallback?: Object;		// see Custom Flash Hide Callback	Optional	null
	}): void;

	api(path: string):void;
	api(path: string, params: Object):void;
	api(path: string, cb: Function ):void;
	api(path: string, params: Object, cb: Function ):void;
	api(path: string, method: string, cb: Function ):void;
	api(path: string, method: string, params: Object, cb: Function ):void;

	ui(params: FacebookUIParameters, cb?: (response:Object) => any): void;

	login( 
		cb?: (response: FacebookUserAuthenticate) => any, 
		opts?: { scope: string; } 
	): void;

	// FB.logout will log the user out of both your site and Facebook. 
	//	You will need to have a valid access token for the user in order to call the function.
	logout(cb?:(response?:Object) => any );


	getLoginStatus(cb?:(response:FacebookUserAuthenticate) => void, force?:bool);
	getAuthResponse(cb?:(response:FacebookAuthResponse) => void );

	Events: {
		
		/**
		 * FB.Events.subscribe
		 * 
		 * subscribe gives different response objects depending on the subscribed event.
		 */

		/**
		 * name: 'auth.login' - fired when the auth status changes to connected
		 * name: 'auth.authResponseChange' - fired when the authResponse changes
		 * name: 'auth.statusChange' - fired when the status changes (see FB.getLoginStatus for additional information on what this means)
		 */
		subscribe ( name: string, cb: (response: FacebookUserAuthenticate) => any );

		/**
		 * name: 'auth.logout'
		 */
		subscribe ( name: string, cb: (response: { status: string; }) => any );

		/**
		 * name: 'auth.prompt'
		 */
		subscribe ( name: string, cb: (response: string) => any );

		/**
		 * name: 'xfbml.render'
		 */
		subscribe ( name: string, cb: () => any );

		/**
		 * name: 'edge.remove'
		 */
		subscribe ( name: string, cb: (response: string ) => any );

		/**
		 * name: 'comment.create'
		 */
		subscribe ( name: string, cb: (response: string ) => any );

		/**
		 * name: 'comment.remove'
		 */
		subscribe(name: string, cb: (response: { href: string; commendID: string; } ) => any );

		/**
		 * name: 'message.send'
		 */
		subscribe ( name: string, cb: (response: string ) => any );

		unsubscribe ( name: string, cb: (response: string ) => any );
	};

	XFBML: {
		parse(dom?: Element, cb?: () => any);
	};

	Canvas: {

		Prefetcher: {
			COLLECT_AUTOMATIC: string;
			COLLECT_MANUAL: string;
			addStaticResource(str:string): void;
			setCollectionMode(str:string): void;
		};

		getPageInfo(cb: (info: {
			clientHeight: number;	// The height of the viewport in pixels
			clientWidth: number;	// The width of the viewport in pixels
			offsetLeft: number;		// The number of pixels between the left edge of the viewport and the left edge of your app's iframe
			offsetTop: number;		// The number of pixels between the top edge of the viewport and the top edge of your app's iframe
			scrollLeft: number;		// The number of pixels between the left edge of your iframe and the left edge of your iframe's viewport
			scrollTop: number;		// The number of pixels between the top edge of your iframe and the top edge of your iframe's viewport
		}) => void ): void;

		hideFlashElement(elem:Element): void;
		showFlashElement(elem:Element): void;

		scrollTo(x: number, y: number): void;

		setAutoGrow(interval:number);
		setAutoGrow(onOrOff?:bool,interval?:number);

		setDoneLoading(cb: (response: { time_delta_ms?: number; }) => void);

		setSize(size: { width?: number; height?: number; });

		setUrlHandler(cb: (response: { path: string; }) => void );
		
		startTimer();
		stopTimer(cb: (response: { time_delta_ms: number; }) => void );
	};
};

declare var FB: FB;