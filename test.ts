/// <reference path="facebook.d.ts" />

// ('/me', 'POST', {}, function (response) {});
FB.api('/me');
FB.api('asd', {});
FB.api('asd', function (response) {});
FB.api('asd', {}, function (response) { });
FB.api('asd', 'POST', {}, function (response) {});

FB.login(function (response) {
	response.status
});

FB.login(function (response) {
	response.status
}, { scope: '' });

FB.logout();

FB.ui({caption:'asddsa'}, function () { });