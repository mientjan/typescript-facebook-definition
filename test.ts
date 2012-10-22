/// <reference path="facebook.d.ts" />

FB.api('/me');
FB.api('asd', {});
FB.api('asd', function (response) {});
FB.api('asd', {}, function (response) { });
FB.api('asd', 'POST', {}, function (response) {});

FB.login(function (response) {
	response.status
});

FB.login(function (response) { });

FB.logout();

FB.ui({ caption: '' }, function () { });

FB.Canvas.getPageInfo(function (info) { 
	info.clientHeight;
});


FB.Canvas.getPageInfo(function (info) { 
	info.clientHeight;
});