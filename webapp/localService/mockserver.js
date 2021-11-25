sap.ui.define([
	"sap/ui/core/util/MockServer",
	"sap/base/Log",
	"sap/m/MessageToast"
], function (MockServer, Log, MessageToast) {
	"use strict";
		var oMockServer,
		_sAppModulePath = "sap/ui5/InsuranceAgent/Insagentwithodata/",
		_sJsonFilesModulePath = _sAppModulePath + "localService/mockdata";
		
	return {
		/**
		 * Initializes the mock server.
		 * You can configure the delay with the URL parameter "serverDelay".
		 * The local mock data in this folder is returned instead of the real data for testing.
		 * @public
		 */
		init: function () {
			var 
				sJsonFilesUrl = sap.ui.require.toUrl(_sJsonFilesModulePath),
				sManifestUrl = sap.ui.require.toUrl(_sAppModulePath + "manifest" + ".json"),
				
				
				oManifest = jQuery.sap.syncGetJSON(sManifestUrl).data,
				oDataSource = oManifest["sap.app"].dataSources,
				oMainDataSource = oDataSource.mainService,
				sMetadataUrl = sap.ui.require.toUrl(_sAppModulePath + oMainDataSource.settings.localUri.replace(".xml", "") + ".xml"),
				// ensure there is a trailing slash
				sMockServerUrl = /.*\/$/.test(oMainDataSource.uri) ? oMainDataSource.uri : oMainDataSource.uri + "/";
			
			
			
			// create
			oMockServer = new MockServer({
				rootUri: sMockServerUrl
			});


			// simulate against the metadata and mock data
			oMockServer.simulate("./localService/ZCDS_INSAGENT_SRVBND/metadata.xml", {
				sMockdataBaseUrl: sJsonFilesUrl,
				bGenerateMissingMockData: true
			});

			// start
			oMockServer.start();

			Log.info("Running the app with mock data");
			MessageToast.show("Running App with MockData");
		}

	};

});