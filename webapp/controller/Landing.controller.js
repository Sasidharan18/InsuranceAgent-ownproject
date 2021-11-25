sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/m/MessageToast"
], function(Controller, UIComponent, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui5.InsuranceAgent.Insagentwithodata.controller.Landing", {

         onInit: function() {
			MessageToast.show("OnInit of Landing");
        },
        onExit: function(){
        		MessageToast.show("OnExit of Landing");
        },
        onBeforeRendering:function(){
        		MessageToast.show("Before Rendering of Landing");
        },
        
        onAfterRendering:function(){
        		MessageToast.show("After Rendering of Landing");
        }

    });
});