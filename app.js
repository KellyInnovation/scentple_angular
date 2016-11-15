'use strict';

function MainController() {
	const ctrl = this;
	ctrl.indexClicked = true;
	ctrl.selectionPageClicked = false;
	ctrl.printCard = false;
	ctrl.contentsJSON = null;

	function goToIndex () {
		ctrl.indexClicked = true;
		ctrl.selectionPageClicked = false;
		ctrl.printCard = false;
	}

	function goToSelectionPage () {
		ctrl.indexClicked = false;
		ctrl.selectionPageClicked = true;
	}

	function sampleFragranceCommercial () {
		ctrl.indexClicked = false;
		ctrl.printCard = true;
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

	

	ctrl.goToIndex = goToIndex;
	ctrl.goToSelectionPage = goToSelectionPage;
	ctrl.getJSON = getJSON;
	ctrl.sampleFragranceCommercial = sampleFragranceCommercial;

}

angular.module('app', [])
	.controller('MainCtrl', MainController);