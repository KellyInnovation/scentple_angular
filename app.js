'use strict';

function MainController() {
	const ctrl = this;

	function getJSON() {
		$http.get("fragrances.json")
		.success(function(data) {
			ctrl.contentsJSON = data;
		})
		.error(function(data, status, error, config) {
			ctrl.contentsJSON = [{heading: "Error", description: "Could not load JSON."}];
		})
	}

	ctrl.getJSON();
}

angular.module('app', [])
	.controller('MainCtrl', MainController);