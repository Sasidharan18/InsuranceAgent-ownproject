function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZCDS_INSAGENT_SRVBND/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}