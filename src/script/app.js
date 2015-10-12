var app = app || {};

$(function () {
	app.model = new model();
	app.view = new view({el: 'body'});
});
