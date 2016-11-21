'use strict';

function MainController($http) {
	const ctrl = this;
	ctrl.contentsJSON = {};
	ctrl.pickAPage = 'front_page.html';
	ctrl.gender = '';
	ctrl.category = '';
	ctrl.price = '';

	function getJSON() {
		$http.get("fragrances.json")
		.success(function(data) {
			ctrl.contentsJSON = data;
		})
		.error(function(data, status, error, config) {
			ctrl.contentsJSON = [{heading: "Error", description: "Could not load JSON."}];
		})
	}
	// $filter('womenFilter')(ctrl.contentsJSON, ctrl.contentsJSON.gender == 'women')
		// $filter('womenFilter'); trying to use filter to separate womens fragrances from others


	function selectCategory() {
		if (ctrl.gender == 'women') {
			console.log('women');
		}
		else if (ctrl.gender == 'men') {
			console.log('men');
		}
		else if (ctrl.gender == 'neutral') {
			console.log('neutral')
		}
		else {
			alert("incorrect entry")
		}

		ctrl.pickAPage = 'logo_displays.html';
	}


	ctrl.getJSON = getJSON;
	ctrl.selectCategory = selectCategory;

	ctrl.getJSON()
}

angular.module('app', [])
	.controller('MainCtrl', MainController);