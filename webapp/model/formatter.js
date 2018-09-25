sap.ui.define([
		"sap/ui/core/format/DateFormat"
	],function(DateFormat){
	"use strict";
	
	return{
		addLeadingZeros: function (sValue){
			return "00"+ sValue;
		},
		
		formatCorrectDate: function(sValue){
			var oDateFormat = DateFormat.getInstance();
			var date = oDateFormat.format(sValue);
			return date;
		}
	};
});