sap.ui.define([
	"sap/ui/core/mvc/Controller",
], function (Controller) {
	"use strict";
	return Controller.extend("sap.ui5.InsuranceAgent.Insagentwithodata.controller.BaseController", {
		onNavBack: function () {
var a;
var b;
var c;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.navTo(" ");

			var oHistory = sap.ui.core.routing.History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {

				oRouter.navTo("view2");
			}
		}
	});
});