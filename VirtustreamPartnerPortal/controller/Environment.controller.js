sap.ui.define([
		'sap/ui/demo/toolpageapp/controller/BaseController',
		'jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(BaseController, jQuery, Controller, JSONModel) {
	"use strict";

	var PageController =  Controller.extend("sap.ui.demo.toolpageapp.controller.Environment", {
		onInit : function (evt) {
			// set mock model
			var sPath = jQuery.sap.getModulePath("sap.ui.demo.toolpageapp.model", "/customers.json");
			var oModel = new JSONModel(sPath);
			this.getView().setModel(oModel);
		},
		handleEditPress : function (evt) {
			var oTileContainer = this.byId("container");
			var newValue = !oTileContainer.getEditable();
			oTileContainer.setEditable(newValue);
			evt.getSource().setText(newValue ? "Done" : "Edit");
		},

		onTilePress : function (evt) {
			var oTile =evt.getSource();
			var oInfo = oTile.getInfo();
			var oTileContainer = this.byId("container");
		},
	});

	return PageController;

});
