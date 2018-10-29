sap.ui.define([
		'sap/ui/demo/toolpageapp/controller/BaseController',
		'sap/ui/model/json/JSONModel',
		'sap/ui/Device',
		'sap/ui/demo/toolpageapp/model/formatter',
		'sap/m/MessageToast'
	], function (BaseController, JSONModel, Device, formatter, MessageToast) {
		"use strict";
		return BaseController.extend("sap.ui.demo.toolpageapp.controller.Home", {
			formatter: formatter,

			onInit: function () {
				var oViewModel = new JSONModel({
					isPhone : Device.system.phone
				});
				this.setModel(oViewModel, "view");
				Device.media.attachHandler(function (oDevice) {
					this.getModel("view").setProperty("/isPhone", oDevice.name === "Phone");
				}.bind(this));
			},
			
			onPressAdminLink: function(){
				this.getRouter().navTo("environment");
				MessageToast.show("Env Link clicked");
			}
		});
});