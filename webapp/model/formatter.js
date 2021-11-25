sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/ui/core/Message",
    "sap/ui/Device",
    "sap/m/MessageBox"
    // "sap/ui5/InsuranceAgent/Insagentwithodata/controller/InsuranceDetail"
	
], function (Controller, UIComponent, Filter, FilterOperator, History,  MessageToast, Fragment, Device, MessageBox) {
	"use strict";

	return {

		InsurersCount: function (value) {

return value;
		
		},

		 
        	
        	
       
 

		InsurersCount1: function (InsType, InsurerID) {
return InsurerID;
			// // var model = new sap.ui.model.json.JSONModel();
			// // var model1 = this.getOwnerComponent().getModel();

			// // // JSON Model will be in string format
			// // var JSONObject_string = model1.getJSON();

			// // // JSON Model will be in array format
			// // var JSONObject = JSON.parse(JSONObject_string);

			// // var count = 0;

			// // // No of persons insured for vehicle
			// // for (var num = 0; num <= JSONObject.InsuranceVeh.length - 1; num++) {
			// //     if (JSONObject.InsuranceVeh[num].InsurerId == value) {
			// //         count = count + 1;
			// //     } else {

			// //     }
			// // };
			// // // No of persons insured "Term Insurance"
			// // for (var num = 0; num <= JSONObject.InsuranceTerm.length - 1; num++) {
			// //     if (JSONObject.InsuranceTerm[num].InsurerId == value) {
			// //         count = count + 1;
			// //     } else {

			// //     }
			// // };

			// // return count;

			// var i = localStorage.getItem("InsurerID");

			// var model1 = this.getOwnerComponent().getModel();

			// // JSON Model will be in string format
			// var JSONObject_string = model1.getJSON();

			// // JSON Model will be in array format
			// var JSONObject = JSON.parse(JSONObject_string);

			// var count = 0;

			// // No of persons insured for vehicle
			// if (InsType == "Veh") {

			//     for (var num = 0; num < JSONObject.InsuranceVeh.length; num++) {
			//         if (JSONObject.InsuranceVeh[num].InsurerId == InsurerID) {
			//             count = count + 1;
			//         } else {

			//         }
			//     };
			// };
			// // No of persons insured "Term Insurance"
			// if (InsType == "Term") {
			//     for (var num = 0; num < JSONObject.InsuranceTerm.length; num++) {
			//         if (JSONObject.InsuranceTerm[num].InsurerId == InsurerID) {
			//             count = count + 1;
			//         } else {

			//         }
			//     };
			// };
			// if (InsType == "Med") {
			//     for (var num = 0; num < JSONObject.InsuranceMed.length; num++) {
			//         if (JSONObject.InsuranceMed[num].InsurerId == InsurerID) {
			//             count = count + 1;
			//         } else {

			//         }
			//     };
			// };
			// if (InsType == "Life") {
			//     for (var num = 0; num < JSONObject.InsuranceLife.length; num++) {
			//         if (JSONObject.InsuranceLife[num].InsurerId == InsurerID) {
			//             count = count + 1;
			//         } else {

			//         }
			//     };
			// };
			// if (count == 0) { count = "0 " };
			// return count;
		},

		PendingClaimsCount: function (value) {

			// var model = new sap.ui.model.json.JSONModel();
			// var model1 = this.getOwnerComponent().getModel();

			// // JSON Model will be in string format
			// var JSONObject_string = model1.getJSON();

			// // JSON Model will be in array format
			// var JSONObject = JSON.parse(JSONObject_string);

			// var count = 0;

			// // No of persons insured for vehicle
			// for (var num = 0; num <= JSONObject.PendingVeh.length - 1; num++) {
			//     if (JSONObject.PendingVeh[num].InsurerId == value) {
			//         count = count + 1;
			//     } else {

			//     }
			// };
			// // No of persons insured "Term Insurance"
			// for (var num = 0; num <= JSONObject.PendingTerm.length - 1; num++) {
			//     if (JSONObject.PendingTerm[num].InsurerId == value) {
			//         count = count + 1;
			//     } else {

			//     }
			// };

			// return count;
			return 10;

		}

	};
})