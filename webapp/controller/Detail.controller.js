sap.ui.define([
	"com/delaware/md/trac2018/controller/BaseController",
	"sap/ui/model/Filter",
	"com/delaware/md/trac2018/model/formatter"
], function (BaseController, Filter,formatter) {
	"use strict";

	return BaseController.extend("com.delaware.md.trac2018.controller.Detail", {

		formatter: formatter,

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.delaware.md.trac2018.view.Detail
		 */
		onInit: function() {
			this.getRouter().getRoute("Detail").attachPatternMatched(this._onRoutingMatched, this);
		},

		_onRoutingMatched: function(oEvent){
			var sCustomerNumber = oEvent.getParameter("arguments").customerNumber;
			console.log(sCustomerNumber);
			
			var aFilters = [new Filter("customer", sap.ui.model.FilterOperator.EQ,sCustomerNumber)];
			var that = this;
			
			var oModel = this.getView().getModel("ordersModel");
				oModel.read("/ZV_ZVT18_ORDERS_HVH", {
					filters: aFilters,
					success: function(oDataOrders){
						console.log(oDataOrders);
						that.getModel("orders").setData(oDataOrders.results);
					},
					error: function(oError){
						console.log(oDataOrders);
					}
				});
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.delaware.md.trac2018.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.delaware.md.trac2018.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.delaware.md.trac2018.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});