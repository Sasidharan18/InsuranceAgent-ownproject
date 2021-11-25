sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/matchers/Properties",
	"sap/ui/test/actions/Press"
], function (Opa5, Press) {
	"use strict";
	var sViewName = "View1";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {
				iPressTheInsurersPanel: function () {
					return this.waitFor({

						// controlType : "sap.m.List",
						// id: "container-Insagentwithodata---View2--Insurance-container-Insagentwithodata---View2--InsuranceCompany-0",
						// id: "__component1---View2--Insurance-__component1---View2--InsuranceCompany-0",

						controlType: "sap.m.Panel",
						viewName: "View2",
						// matchers: new sap.ui.test.matchers.PropertyStrictEquals({
						// 	name : "headerText",
						// 	value:"TATA AIG"
						// }),
						
						// actions: new Press({
						// 	idSuffix: "TATA AIG"
						// }),
						success: function (oButton) {
							// var mParams = {expand : "true" };
							// oButton[0].fireExpand(mParams);
						var vControls = oButton;
			            var oControl = vControls[0] || vControls;
			            oControl.setExpanded(true);
 
        
							Opa5.assert.ok(true, "Found Panel and Expanded  :  " + oButton[0]);
						},
						errorMessage: "Did not find the Panel"
					});
				}

			},

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The View1 view is displayed");
						},
						errorMessage: "Did not find the View1 view"
					});
				},

				iShouldFindTheButton: function () {

					return this.waitFor({
						controlType: "sap.m.GenericTile",
						viewName: "View2",

						success: function (oButton) {
							oButton[0].$().trigger("press");

							Opa5.assert.ok(true, "The Tile is clicked  :  " + oButton[0]);
						},
						errorMessage: "Did not find the button",
						timeout: "5"

						// id: "container-Insagentwithodata---View2--totalInsurers-container-Insagentwithodata---View2--InsuranceCompany-0",
						// viewName: "View2",
						// success: function () {
						// 	Opa5.assert.ok(true, "The View1 view is displayed");
						// },
						// errorMessage: "Did not find the View1 view"
					});
				}
			}
		}
	});

});