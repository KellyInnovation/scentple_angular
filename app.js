'use strict';

function MainController() {
	const ctrl = this;
	ctrl.indexClicked = true;
	ctrl.selectionPageClicked = false;

	function goToIndex () {
		ctrl.indexClicked = true;
	}

	function goToSelectionPage () {
		ctrl.indexClicked = false;
		ctrl.selectionPageClicked = true;
	}

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

	ctrl.goToIndex = goToIndex;
	ctrl.goToSelectionPage = goToSelectionPage;

angular.module('app', [])
	.controller('MainCtrl', MainController);