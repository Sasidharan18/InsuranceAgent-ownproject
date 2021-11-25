/*global QUnit*/

sap.ui.define([
	"sap/ui5/InsuranceAgent/Insagentwithodata/model/formatter"
], function (formatter) {
	"use strict";

	QUnit.module("Formatter file", {
		beforeEach:function(){ 
		//  Hook Method
		this._formatter = formatter;
		}
	}
	);

	QUnit.test("InsurersCount", function (assert) {
		assert.equal(this._formatter.InsurersCount(10), 10, "Successfull");
			assert.equal(this._formatter.InsurersCount(11), 11);
	});
	
	QUnit.test("InsurersCount1", function (assert) {
		assert.equal(this._formatter.InsurersCount1(1,10), 10);
			assert.equal(this._formatter.InsurersCount1(1,12), 11, "Successfull");
	});
});