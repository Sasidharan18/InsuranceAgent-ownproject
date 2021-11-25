sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    "use strict";

    return Controller.extend("sap.ui5.InsuranceAgent.Insagentwithodata.controller.View1", {
        onInit: function() {
			MessageToast.show("OnInit of view1");
        },
        onExit: function(){
        		MessageToast.show("OnExit of view1");
        },
        onBeforeRendering:function(){
        		MessageToast.show("Before Rendering of view1");
        },
        
        onAfterRendering:function(){
        		MessageToast.show("After Rendering of view1");
        },
        goToInsurers: function(oEvent) {


            var data = {};
            data.context = oEvent.getSource().getBindingContext();
            var selectedIndex = data.context.getPath();
            MessageToast.show(selectedIndex);

            var oItem = oEvent.getSource();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("detail", {
                ID: window.encodeURIComponent(oItem.getBindingContext().getPath().substr(1))
            });

        }
    });
});