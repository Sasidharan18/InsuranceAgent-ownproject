/*global QUnit*/

sap.ui.define([
	"sap/ui5/InsuranceAgent/Insagentwithodata/controller/InsuranceDetail.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Insurance Detail Controller", {
		setup:function(){ 
			this.oAppController = new Controller();
		},
		
		beforeEach:function(){ 
		//  Hook Method
		}
	}
	);

	QUnit.test("I should test the INS Detail controller", function (assert) {
		
		this.oAppController.onInit();
		
		assert.ok(this.oAppController);
		
		this.oAppController.call_InsuranceDetail("A", 1 );
		assert.ok(this.oAppController);
	});

});