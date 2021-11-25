sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui5/InsuranceAgent/Insagentwithodata/model/formatter",
    "sap/ui/model/ListBinding",
    "sap/ui/Device"
], function(Controller,
    JSONModel,
    MessageToast,
    Filter, FilterOperator,
    formatter, Device) {
    "use strict";

    return Controller.extend("sap.ui5.InsuranceAgent.Insagentwithodata.controller.View2", {
        formatter: formatter,
        /**
         * Called when a controller is instantiated and its View controls (if available) are already created.
         * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
         * @memberOf sap.ui5.InsuranceAgent.view.View2
         */
     //   onInit: function() {
					// // this.omodel_read();
					
     //   },
     onInit: function() {
			MessageToast.show("OnInit of view2");
        },
        onExit: function(){
        		MessageToast.show("OnExit of view2");
        },
        onBeforeRendering:function(){
        		MessageToast.show("Before Rendering of view2");
        },
        
        onAfterRendering:function(){
        		MessageToast.show("After Rendering of view2");
        },
        omodel_read: function(){
        	
        		var oModel = this.getOwnerComponent().getModel();
        	var aFilter = [];
			aFilter.push(new Filter("Insurerid", FilterOperator.EQ, 1));
			var mParameters = {
				filters: aFilter,
				success: $.proxy(this._readSuccess, this),
				error: this._readError
			};

			oModel.read("/zcds_vehins", mParameters);
        },
        _readSuccess: function (oData, oResponse) {
			
			console.log(oData.results["length"]);
			return oData.results["length"];
		},

		_readError: function (oError) {
		
			console.log(oData.results["length"]);
			MessageToast.show(JSON.parse(oError.responseText));

		},
        goToInsurers: function(oEvent) {


            var tile = oEvent.getSource().data("Tile");

            // var animation = new Array();
            // animation[0] = "slide";
            // animation[1] = "baseSlide";
            // animation[2] = "fade";
            // animation[3] = "flip";
            // animation[4] = "show";


            // var navCon = this.byId("navCon");
            // var target = oEvent.getSource().data("target");
            // if (target) {
            //     //   var animation = this.byId("animationSelect").getSelectedKey();
            //     navCon.to(this.byId(target), animation[Math.floor(5 * Math.random())]);
            // } else {
            //     navCon.back();
            // }


            var oItem = oEvent.getSource();

            //  getbinding context will get the data binded to triggered event
            // get object is original data, instead of getobject we can use getpath to get the index number of the line binded
            var oItem1 = oEvent.getSource().getBindingContext().getObject("name");
            var oItem2 = oEvent.getSource().getBindingContext().getPath().substr(1);

            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // Below is one line if..else.. Statement
            
            tile == "TotalCount" ? localStorage.setItem("CallerTile", "TotalCount") : localStorage.setItem("CallerTile", "PendingClaims");
            tile == "TotalCount" ?  
                oRouter.navTo("detail", {
                    ID: window.encodeURIComponent(oEvent.getSource().getBindingContext().getObject("id"))
                }, false)

                :

                oRouter.navTo("pendingclaim", {

                    ID: window.encodeURIComponent(oEvent.getSource().getBindingContext().getObject("id"))
                }, false)


        },

        goToPendingClaims: function(oEvent) {
            MessageToast.show("Loading Pending Claims")
        },

        goToTermInsuranceMember: function(oEvent) {
            var data = {};
            data.context = oEvent.getSource();
            // .getBindingContext();
            var selectedIndex = data.context.sPath.split("/")[2];
            MessageToast.show("click")
        },
        // onSearch is not working for now
        onSearch: function(oEvent) {
            // add filter for search
            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new Filter("Name", FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }

            // update list binding
            var oList = this.byId("InsuranceCompany");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilters, "Application");
        },

        onLook: function(event) {
            var oItem = event.getParameter("suggestionItem");
            if (oItem) {
                MessageToast.show("Search for: " + oItem.getText());
            } else {
                MessageToast.show("Search is fired!");
            }
        },
        onSearch: function(oEvent) {

                var filter = [];
                var squery = oEvent.getParameter("newValue");
                // squery = window.prompt("type your search");
                var listbinding = this.byId("InsuranceCompany").getBinding("items");

                if (squery) {
                    filter.push(new Filter("name", FilterOperator.Contains, squery));
                }
                listbinding.filter(filter);
                // window.confirm("DO want to search");

            }
            /**
             * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
             * (NOT before the first rendering! onInit() is used for that one!).
             * @memberOf sap.ui5.InsuranceAgent.view.View2
             */
            //	onBeforeRendering: function() {
            //
            //	},

        /**
         * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
         * This hook is the same one that SAPUI5 controls get after being rendered.
         * @memberOf sap.ui5.InsuranceAgent.view.View2
         */
        //	onAfterRendering: function() {
        //
        //	},

        /**
         * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
         * @memberOf sap.ui5.InsuranceAgent.view.View2
         */
        //	onExit: function() {
        //
        //	}

    });
});