/// <reference path="facebook.d.ts" />

FB.api('/me');
FB.api('asd', {});
FB.api('asd', function (response?) {});
FB.api('asd', function () {});
FB.api('asd', {}, function (response?) { });
FB.api('asd', 'POST', {}, function (response?) {});

FB.login(function (response) {
	response.status;
	response.authResponse.accessToken;
});

FB.login(function (response) { });

FB.logout();

FB.ui({ caption: '' }, function (response?) {  });

FB.Canvas.getPageInfo(function (info) { 
	info.clientHeight;
});


FB.Canvas.getPageInfo(function (info) { 
	info.clientHeight;
});

FB.Canvas.Prefetcher.setCollectionMode( FB.Canvas.Prefetcher.COLLECT_MANUAL );
FB.Canvas.setAutoGrow(10);
FB.Canvas.setAutoGrow();

FB.Canvas.setSize({ width: 100 });
FB.Canvas.setSize({ height: 100 });

FB.init({
	appId: 'dasddas',
	xfbml: true,
	cookie: false,
	channelUrl: ''
});