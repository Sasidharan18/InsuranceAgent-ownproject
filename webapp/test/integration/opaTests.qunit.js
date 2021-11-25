/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/ui5/InsuranceAgent/Insagentwithodata/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});