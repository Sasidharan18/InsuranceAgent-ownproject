/*global QUnit*/

sap.ui.define([
	"sap/ui5/InsuranceAgent/Insagentwithodata/controller/View2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View2 Controller", {
		beforeEach:function(){ 
		//  Hook Method
		}
	}
	);

	QUnit.test("I should test the View2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		
		assert.ok(oAppController);
		
		oAppController.goToInsurers();
		assert.ok(oAppController);
	});

});