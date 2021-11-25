	/*global QUnit*/

	sap.ui.define([
		"sap/ui/test/opaQunit",
		"./pages/View1"
	], function (opaTest) {
		"use strict";

		QUnit.module("Navigation Journey");

		opaTest("Should see the initial page of the app", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();

			// Assertions
			Then.onTheAppPage.iShouldSeeTheApp();

			//Cleanup
			Then.iTeardownMyApp();
		});
		
		opaTest("Should find the Total Insurers button", function (Given, When, Then) {
			// Arrangements
			Given.iStartMyApp();
			
			//Actions
			When.onTheAppPage.iPressTheInsurersPanel();
			
			// Assertions
			Then.onTheAppPage.iShouldFindTheButton();

			//Cleanup
			Then.iTeardownMyApp();
		});
	});