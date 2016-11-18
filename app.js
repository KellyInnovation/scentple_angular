'use strict';

function MainController($http, $filter) {
	const ctrl = this;
	ctrl.contentsJSON = {};
	ctrl.pickAPage = 'front_page.html';


	function getJSON() {
		$http.get("fragrances.json")
		.success(function(data) {
			ctrl.contentsJSON = data;
		})
		.error(function(data, status, error, config) {
			ctrl.contentsJSON = [{heading: "Error", description: "Could not load JSON."}];
		})
	}

	// function selectCategory() {
	// 	$filter('womenFilter');
	// 	ctrl.pickAPage = 'logo_displays.html';
	// }

	// $filter('womenFilter')('ctrl.contentsJSON.gender == women')

	ctrl.getJSON = getJSON;
	// ctrl.selectCategory = selectCategory;

	ctrl.getJSON()
}

angular.module('app', [])
	.controller('MainCtrl', MainController);