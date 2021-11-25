sap.ui.define([
	"sap/m/Button",
	"sap/m/RatingIndicator",
	"sap/m/Label",
	 "sap/m/MessageToast",
	 "sap/m/NavContainer"
	],
	function (Button, RatingIndicator, Label, MessageToast, NavContainer) {
	"use strict";
	return NavContainer.extend("sap.ui5.InsuranceAgent.Insagentwithodata.control.NavContainer1", {

		metadata: {
			properties: {
				value: 	{type : "float", defaultValue : 0}

			},
		aggregations : {
				_button : {type : "sap.m.Button", multiple: false, visibility : "hidden"}
			}
			// events: {
			// 	"hover": {}
			
			// }
		},
		
		init : function () {
			this.setAggregation("_button", new Button({
				 text: "productRatingButton",
				   icon:"sap-icon://add",  visible:true,  press:".call_itemVehIns"
			}));
		},
		
		_onRate : function (oEvent) {
				MessageToast.show( "Live Change of custom control Aggregation _Rating is triggered");
		},
		


		 renderer : function (oRM, oControl) {
		 	oRM.write("<div");
		 	oRM.writeControlData(oControl);
		 	oRM.addClass("myAppDemoWTProductRating");
	 	oRM.writeClasses();
	 	oRM.write(">");
			oRM.renderControl(oControl.getAggregation("_button"));
	 	oRM.write("</div>");
	 }
	});

});