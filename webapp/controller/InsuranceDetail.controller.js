sap.ui.define([
	"sap/ui5/InsuranceAgent/Insagentwithodata/controller/BaseController",
	"sap/ui/core/UIComponent",
	"sap/ui/model/Filter",
	"sap/ui/model/Sorter",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/routing/History",
	"sap/ui5/InsuranceAgent/Insagentwithodata/model/formatter",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment",
	"sap/ui/core/Message",
	"sap/ui/Device",
	"sap/m/MessageBox",
	"sap/m/MessagePopoverItem",
	"sap/m/MessagePopover"

], function (Controller, UIComponent, Filter, Sorter, FilterOperator, History, formatter, MessageToast, Fragment, Device, MessageBox,
	messagepopoveritem, messagepopover) {
	"use strict";
	return Controller.extend("sap.ui5.InsuranceAgent.Insagentwithodata.controller.InsuranceDetail", {
		formatter: formatter,
		onInit: function (oEvent) {
			MessageToast.show("onInit of Insurance Detail");
			this.getView().addStyleClass("sapUiSizeCompact");
			// sap.ui.Device.support.touch ? ""sapUiSizeCondensed");" : "sapUiSizeCozy");

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			// get from local storage
			var callertile = localStorage.getItem("CallerTile");
			console.log(callertile);
			// var Insurerpath1 = oEvent.getParameter("config").pattern;
			// if (callertile == "TotalCount") {
			oRouter.getRoute("detail").
			attachMatched(this._onObjectMatched, this);

			// } else {
			oRouter.getRoute("pendingclaim").
			attachMatched(this._onObjectMatched, this);

			// };

		},

		_onObjectMatched: function (oEvent) {

			var InsurerId = window.decodeURIComponent(oEvent.getParameter("arguments").ID);
			var caller = oEvent.getParameter("config").pattern.split("/")[0];

			//  Bind element to page so that insurance type button wil have count using formatters
			//  Every time we bind context, page will render again and so formatter methods will be called again
			this.getView().bindElement({
				path: "/InsuranceCompany/" + this._onPageTitle(InsurerId, "")
			});

			if (caller == "InsuranceDetail") {
				this.call_InsuranceDetail(oEvent, InsurerId);
			} else {
				this.call_PendingClaimDetails(oEvent, InsurerId);
			}

			// create Dynamic Buttons: Not working
			// var pageView = this.getView().byId("InsuranceDetailPage");
			// var myButton = new sap.m.Button({

			//     text: "Hello1",
			//     type: "Success",

			//     badgeCustomData: new sap.m.BadgeCustomData({
			//         key: "target",
			//         value: "2",
			//         visible: true

			//     }),
			//     customData: new sap.ui.core.CustomData({
			//         key: "target",
			//         value: "term"
			//     })
			// });

			// // set properties, e.g. the text (there is also a shorter way of setting several properties)

			// myButton.placeAt(pageView);
			// ********************************

		},

		call_InsuranceDetail: function (oEvent, InsurerId) {

			var aFilter = [];
			if (InsurerId) {
				aFilter.push(new Filter("Insurerid", FilterOperator.EQ, InsurerId));

			}

			//Total Term Insurance
			// var oList = this.byId("TermInsurance");
			// var oBinding = oList.getBinding("items");
			// oBinding.filter(aFilter);

			// Total Vehical Insurance page
			var oList = this.byId("VehInsurance");

			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
			// oList.bindElement(
			// 	{
			// 		path:"/zcds_vehins?$filter=Insurerid eq " 
			// 	}
			// 	);
			//     // Page Title

			var oList = this.byId("InsuranceDetailPage");

			oList.setTitle(this._onPageTitle(InsurerId, "title") + " : Insurance Details");
		},
		onAddVehInsSortdesc: function (oEvent) {
			var aSorter = [];
			aSorter.push(new Sorter({
				path: "Insuranceid",
				descending: true
			}));
			aSorter.push(new Sorter({
				path: "Validitystartdate",
				descending: true
			}));
			var oList = this.byId("VehInsurance");

			var oBinding = oList.getBinding("items");
			oBinding.sort(aSorter);
		},
		onAddVehInsSortAsc: function (oEvent) {
			var aSorter = [];
			aSorter.push(new Sorter({
				path: "Insurancetype",
				ascending: true
			}));
			aSorter.push(new Sorter({
				path: "Validitystartdate",
				ascending: true,
				group: true
			}));
			var oList = this.byId("VehInsurance");

			var oBinding = oList.getBinding("items");
			oBinding.sort(aSorter);
		},
		call_PendingClaimDetails: function (oEvent, InsurerId) {
			var aFilter = [];
			if (InsurerId) {
				aFilter.push(new Filter("InsurerId", FilterOperator.Contains, InsurerId));

			}
			var JSON_model = this.getOwnerComponent().getModel();
			var JSONObject_string = JSON_model.getJSON();

			var oData = JSON.parse(JSONObject_string);
			var oData1 = oData.InsuranceTerm;

			var oModel = new sap.ui.model.json.JSONModel({
				"results": oData1
			});
			this.getView().byId("TermInsurance").setModel(oModel, "oModel");

			// var JSONObject = JSON.parse(JSONObject_string);

			// //Total Term Insurance
			// var oList = this.byId("TermInsurance");
			// var oBinding = oList.getBinding("items");
			// oBinding.filter(aFilter);

			// Total Vehical Insurance page
			var oList = this.byId("VehInsurance");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);

			// Page Title
			var oList = this.byId("InsuranceDetailPage");
			oList.setTitle(this._onPageTitle(InsurerId, "title") + " : Pending Claim Details");
		},
		_onPageTitle: function (ID, temp) {
			// var model = this.getOwnerComponent().getModel();

			// // JSON Model will be in string forma
			// var JSONObject_string = model.getJSON();

			// // JSON Model will be in array format
			// var JSONObject = JSON.parse(JSONObject_string);

			// for (var num = 0; num < JSONObject.InsuranceCompany.length; num++) {
			//     if (JSONObject.InsuranceCompany[num].ID == ID) {
			//         if (temp == 'title') {
			//             return JSONObject.InsuranceCompany[num].Name;
			//         } else {
			//             return num;
			//         }

			//     }

			// }
			return ID;

		},

		onPressNavToInsurancePage: function (evt) {

			var animation = new Array();
			animation[0] = "slide";
			animation[1] = "baseSlide";
			animation[2] = "fade";
			animation[3] = "flip";
			animation[4] = "show";

			var navCon = this.byId("navCon");
			var target = evt.getSource().data("target");
			if (target) {
				//   var animation = this.byId("animationSelect").getSelectedKey();
				navCon.to(this.byId(target), animation[Math.floor(5 * Math.random())]);
			} else {
				navCon.back();
			}
		},

		beforeShow: function () {
			var a = 10;
		},
		onPressCreate: function (oEvent) {
			this.call_itemtermins(oEvent);
			this.getView().byId("name").setEditable(true);
			this.getView().byId("dob").setEditable(true);
			this.getView().byId("gender").setEditable(true);
			this.getView().byId("phonenumber").setEditable(true);
			this.getView().byId("email").setEditable(true);
			// this.getView().byId("smoker").setEditable(true);
			// this.getView().byId("Drinker").setEditable(true);
			// this.getView().byId("income").setEditable(true);
			// this.getView().byId("occupation").setEditable(true);
			this.getView().byId("occupationothers").setEditable(true);
			this.getView().byId("sasname").setEditable(true);
			this.getView().byId("street").setEditable(true);
			this.getView().byId("hnum").setEditable(true);
			this.getView().byId("zipcode").setEditable(true);
			this.getView().byId("city").setEditable(true);
			this.getView().byId("country").setEditable(true);
			this.getView().byId("aadhar").setEditable(true);

			this.getView().byId("Pancard").setRequired(true);
			this.getView().byId("Pancard").setEditable(true);
			this.getView().byId("insperiod").setEditable(true);
			this.getView().byId("photo").setEditable(true);
		},
		call_itemtermins: function (oEvent) {
			var oView = this.getView(),
				oItem = oEvent.getSource(),
				oDialog = null,
				sPath;

			// create dialog if can't find the dialog by it's id
			if (!this.byId("createDialog")) {
				// load asynchronous XML fragment using promise
				oDialog = Fragment.load({
					id: oView.getId(),
					name: "sap.ui5.InsuranceAgent.view.Fragments.ItemTermInsurance",
					controller: this
				}).then(function (oDialog) {
					// oDialog is the dialog instance

					// connect dialog to this controller
					oView.addDependent(oDialog);
					// open the dialog
					oDialog.open();
				});
			} else {
				// open the dialog directly
				this.byId("createDialog").open();
			}
		},

		// function to handle close button press event (in product dialog)
		onCloseDialog: function () {
			this.byId("createDialog").close();
		},

		call_itemVehIns: function (oEvent) {
			var path = oEvent.getSource().getBindingContext().getPath();

			if (!this.oAddDialog) {
				this.oAddDialog = sap.ui.xmlfragment("sap.ui5.InsuranceAgent.Insagentwithodata.view.Fragments.ItemVehInsurance", this);
				this.getView().addDependent(this.oAddDialog);

			}
			// open the dialog
			this.oAddDialog.bindElement(path);
			this.oAddDialog.open();

			// toggle compact style
			jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this.oAddDialog);
		},

		onCloseDialogVeh: function (oEvt) {
			// this.byId("createDialogVeh").close();
			this.oAddDialog.close();

		},

		onAddVehIns: function () {
			if (!this.oAddVeh) {
				this.oAddVeh = sap.ui.xmlfragment("sap.ui5.InsuranceAgent.Insagentwithodata.view.Fragments.ItemVehInsuranceAdd", this);
				this.getView().addDependent(this.oAddVeh);

			}
			// open the dialog
			// this.oAddVeh.bindElement(  );
			// var InsurerID = this.byId("InsuranceDetailPage").getTitle().substr(0,1);
			// sap.ui.getCore().byId("insureridadd").setValue("10");
			this.oAddVeh.open();
		},

		onCloseDialogVeh1: function (oEvt) {
			// this.byId("createDialogVeh").close();
			this.oAddVeh.close();

		},

		onAddVehNew: function (oEvt) {
			var newline = {
				Insuranceid: parseInt(sap.ui.getCore().byId("Insuranceidadd").getValue()),
				Insurerid: parseInt(sap.ui.getCore().byId("Insureridadd").getValue()),
				Insurancetype: "veh",
				Regno: sap.ui.getCore().byId("Regnoadd").getValue(),
				Validitystartdate: this.odataDateFormat("Validitystartdateadd"),
				Validityenddate: this.odataDateFormat("Validityenddateadd"),
				Value: parseInt(sap.ui.getCore().byId("Valueadd").getValue()),
				Vehregdate: this.odataDateFormat("Vehregdateadd"),
				ChasisNumber: sap.ui.getCore().byId("ChasisNumberadd").getValue(),
				VehType: sap.ui.getCore().byId("VehTypeadd").getValue(),
				PremiumAmt: sap.ui.getCore().byId("PremiumAmtadd").getValue(),
				Currency: sap.ui.getCore().byId("Currencyadd").getValue(),
				FuelType: sap.ui.getCore().byId("FuelTypeadd").getValue()
			};

			var oModel = this.getOwnerComponent().getModel();
			var mParameters = {
				success: $.proxy(this._showSOCreatedSuccess, this),
				error: this._showSOCreatedError,
				changeSetId: "CreateSO"
			};

			// oModel.setTokenHandlingEnabled(true);
			// var csrf = oModel.getSecurityToken();
			oModel.create("/zcds_vehins", newline, mParameters);

		},

		odataDateFormat: function (Ivalue) {

			var a = new Date(sap.ui.getCore().byId(Ivalue).getValue()); // Wed Dec 05 2012 11:00:00 GMT+1100 (AUS Eastern Daylight Time)
			var b = a.getTime(); // returns the number of milliseconds since Epoch
			var TZOffsetMs = new Date(0).getTimezoneOffset() * 60 * 1000;
			b -= TZOffsetMs;
			var formated_date = "/Date(" + String(b) + ")/";
			return formated_date; // /Date(1609459200000)/
		},

		onUpdateVeh: function (oEvent) {

			var path = oEvent.getSource().getBindingContext().getPath();
			var newline = {
				Insuranceid: parseInt(sap.ui.getCore().byId("Insuranceid").getValue()),

				Insurerid: parseInt(sap.ui.getCore().byId("Insurerid").getValue()),

				Insurancetype: "veh",

				Regno: sap.ui.getCore().byId("Regno").getValue(),
				Validitystartdate: this.odataDateFormat("Validitystartdate"),
				Validityenddate: this.odataDateFormat("Validityenddate"),
				Value: parseFloat(sap.ui.getCore().byId("Value").getValue().replace(/,/g, "")),
				Vehregdate: this.odataDateFormat("Vehregdate"),
				ChasisNumber: sap.ui.getCore().byId("ChasisNumber").getValue(),
				VehType: sap.ui.getCore().byId("VehType").getValue(),
				PremiumAmt: parseFloat(sap.ui.getCore().byId("PremiumAmt").getValue().replace(/,/g, '')).toString(),
				Currency: sap.ui.getCore().byId("Currency").getValue(),
				FuelType: sap.ui.getCore().byId("FuelType").getValue()
			};

			var oModel = this.getOwnerComponent().getModel();
			var mParameters = {
				defaultUpdateMethod: sap.ui.model.odata.UpdateMethod.Put,
				success: $.proxy(this._showSOCreatedSuccess, this),
				error: this._showSOCreatedError,
				changeSetId: "CreateSO"
			};

			// oModel.setTokenHandlingEnabled(true);
			// var csrf = oModel.getSecurityToken();
			oModel.update(path, newline, mParameters);

			var omessagetemplate = new messagepopoveritem({
				type: "S",
				title: "Message Title",
				description: "desc",
				subtitle: "subtitle",
				counter: "1"
			});

			var omessagepopover = new messagepopover({
				items: {
					path: "/",
					template: omessagetemplate
				}
			});
			var messagemodel = sap.ui.getCore().getMessageManager().getMessageModel();
			omessagepopover.setModel(messagemodel, "message");
			omessagepopover.openBy(oEvent.getSource());
		},
		onDeleteVeh: function (oEvent) {
			var path = oEvent.getSource().getBindingContext().getPath();
			var oModel = this.getOwnerComponent().getModel();
			var mParameters = {
				success: $.proxy(this._showSOCreatedSuccess, this),
				error: this._showSOCreatedError,
				changeSetId: "CreateSO"
			};
			// to delete the data using ODATA
			// oModel.setRefreshAfterChange(false);  // to stop the refresh after CRUD operation
			debugger;
			oModel.remove(path, mParameters);
			// oModel.refresh();    // to refresh the Odata model. 
			this.oAddDialog.close();

		},

		_showSOCreatedSuccess: function (oData, oResponse) {
			debugger;
			MessageToast.show("Success");

			// omessagepopover.openBy()

			// MessageBox.show("MESSAGE", {
			//     icon: MessageBox.Icon.,
			//     title: "TITLE",
			//     actions: [MessageBox.Action.OK],
			//     onClose: function(oAction) {

			//     }.bind(this)
			// });
		},

		_showSOCreatedError: function (oError) {

			try {
				var oMessage = JSON.parse(oError.responseText);
				MessageToast.show(oMessage.error.message.value);
			} catch (err) {
				MessageToast.show(oError.responseText);
			}
		},

		onOpenDialog: function (oEvent) {
			MessageToast.show("Dialog Opening");
		},
		validatePhoneNumber: function (oEvent) {
			var a = oEvent.getParameter("value");
			oEvent.getSource().setValueState(sap.ui.core.ValueState.Success);
			// To set value back in field
			// oEvent.getSource().setValue("91");
			MessageToast.show(a);
		},
		onSelectOccupation: function (oEvent) {
			var a = oEvent.getParameter("selectedItem");
			oEvent.getSource().setValueState(sap.ui.core.ValueState.Success);
			// To set value back in field
			// oEvent.getSource().setValue("91");
			MessageToast.show(a);
		},

		goToTermInsuranceMember: function (oEvent) {

			this.call_itemtermins(oEvent);
			var oItem = oEvent.getSource();
			var spath = oItem.getBindingContext().getObject();
			var spath1 = oItem.getBindingContext().getPath();

			var sel = this.getView().byId("TermInsurance");
			var id = this.getView().byId("name").getValue();
			this.getView().byId("name").setValue(spath.Name);
			this.getView().byId("name").setEditable(false);
			this.getView().byId("dob").setEditable(false);
			this.getView().byId("gender").setEditable(false);
			this.getView().byId("phonenumber").setEditable(false);
			this.getView().byId("email").setEditable(false);
			// this.getView().byId("smoker").setEditable(false);
			// this.getView().byId("Drinker").setEditable(false);
			// this.getView().byId("income").setEditable(false);
			// this.getView().byId("occupation").setEditable(false);
			this.getView().byId("occupationothers").setEditable(false);
			this.getView().byId("sasname").setEditable(false);
			this.getView().byId("street").setEditable(false);
			this.getView().byId("hnum").setEditable(false);
			this.getView().byId("zipcode").setEditable(false);
			this.getView().byId("city").setEditable(false);
			this.getView().byId("country").setEditable(false);
			this.getView().byId("aadhar").setEditable(false);

			this.getView().byId("Pancard").setRequired(false);
			this.getView().byId("Pancard").setEditable(false);
			this.getView().byId("insperiod").setEditable(false);
			this.getView().byId("photo").setEditable(false);
		},

		onHover: function (oEvent) {

			var oButton = oEvent.getSource();
			var path = oEvent.getSource().getBindingContext().getPath();

			if (!this.opopover) {
				this.opopover = sap.ui.xmlfragment("sap.ui5.InsuranceAgent.Insagentwithodata.view.Fragments.PopoverVeh", this);
				this.getView().addDependent(this.opopover);

			}
			// open the dialog
			this.opopover.bindElement(path);
			this.opopover.openBy(oButton);

		},
		onSubmit: function (oEvent) {
			var a = oEvent.getParameter("FuelType");
			MessageToast.show("Fuel Type : " + (a === "P" ? "Petrol" : "Diesel"), {
				duration: 1000
			});
		},

		onPressMobile: function (oEvent) {
			MessageToast.show("mobile");
		},

		onResizeCarouselContainer: function (oEvent) {
			var iOriginalHeight = 650,
				iValue = oEvent.getParameter("value"),
				oCarouselContainer = sap.ui.getCore().byId("carouselContainer"),
				iNewHeight = Math.floor(iOriginalHeight * iValue / 100);

			oCarouselContainer.setWidth(iNewHeight + "px");
			oCarouselContainer.setHeight(iNewHeight + "px");
		},

		onExit: function () {
			MessageToast.show("OnExit of InsuranceDetail");
		},
		onBeforeRendering: function () {
			MessageToast.show("Before Rendering of InsuranceDetail");
		},

		onAfterRendering: function () {
			MessageToast.show("After Rendering of InsuranceDetail");
		}

		// /**
		//  * @override
		//  */
		// onBeforeRendering: function() {
		//     // Controller.prototype.onBeforeRendering.apply(this, arguments);

		//     var callertile = localStorage.getItem("CallerTile");
		//     console.log(callertile);
		// }

	});
});