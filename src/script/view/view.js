var app = app || {};

app.collection = new collection();
var view = Backbone.View.extend({
	collection: app.collection,
	events:{
		'click #addDown':'addNewLink',
		'click #setTime':'addNewDown'
	},
	initialize: function () {
		console.log('init!')
	},
	addNewLink: function () {
		var setTimeBtn = $('#addDown');
		if (this.valueInput()) {
			this.inputData().attr('type', 'time');
			setTimeBtn.attr('value', 'Добавить');
			setTimeBtn.attr('id', 'setTime');
		} else {
			console.log('false')
		}
		this.emptyData();
	},
	addNewDown: function () {
		var setTimeBtn = $('#setTime');
		console.log(this.valueInput());
		this.emptyData();
	},
	valueInput: function () {
		return $('#dataLink').val();
	},
	inputData: function () {
		return $('#dataLink');
	},
	emptyData: function () {
		return this.inputData().val('');
	}
});