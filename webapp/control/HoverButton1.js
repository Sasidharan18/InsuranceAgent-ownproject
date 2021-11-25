
sap.ui.define([
	"sap/m/Button",
	"sap/m/RatingIndicator",
	"sap/m/Label",
	 "sap/m/MessageToast"
	],
	function (Button, RatingIndicator, Label, MessageToast) {
	"use strict";
	return Button.extend("sap.ui5.InsuranceAgent.Insagentwithodata.control.HoverButton1", {

		metadata: {
			properties: {
				value: 	{type : "float", defaultValue : 0}

			},
		aggregations : {
				_rating : {type : "sap.m.RatingIndicator", multiple: false, visibility : "hidden"},
				_label : {type : "sap.m.Label", multiple: false, visibility : "hidden"},
				_button : {type : "sap.m.Button", multiple: false, visibility : "hidden"}
			},
			// events: {
			// 	"hover": {}
			
			// }

			
		},
		
		init : function () {
			this.setAggregation("_rating", new RatingIndicator({
				value: this.getValue(),
				iconSize: "2rem",
				visualMode: "Half",
				liveChange: this._onRate.bind(this)
			}));
			this.setAggregation("_label", new Label({
				text: "productRatingLabelInitial"
			}).addStyleClass("sapUiTinyMargin"));
			this.setAggregation("_button", new Button({
				text: "productRatingButton"
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
		oRM.renderControl(oControl.getAggregation("_rating"));
		// oRM.renderControl(oControl.getAggregation("_label"));
			oRM.renderControl(oControl.getAggregation("_button"));
	 	oRM.write("</div>");
	 }
	});

});