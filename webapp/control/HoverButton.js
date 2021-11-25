
sap.ui.define([
	"sap/m/Button",
	"sap/m/RatingIndicator",
	"sap/m/Label",
	 "sap/m/MessageToast"
	],
	function (Button, RatingIndicator, Label, MessageToast) {
	"use strict";
	return Button.extend("sap.ui5.InsuranceAgent.Insagentwithodata.control.HoverButton", {

		metadata: {
			properties: {

				"allowHover": {
					type: "boolean",
					defaultvalue: "false"
				},
				"hoverText": {
					type: "string"
				}

			},
			
			events: {
				"hover": {}
			
			}

			
		},

		onmouseover: function (evt) {
			if (this.getAllowHover()) {
				this.fireHover();
			}
		},
		renderer: {}
	});

});