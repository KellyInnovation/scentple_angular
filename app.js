'use strict';

function MainController($http) {
	const ctrl = this;
	ctrl.contentsJSON = {};
	ctrl.pickAPage = 'front_page.html';
	ctrl.gender = '';
	ctrl.category = '';
	ctrl.price = '';
	ctrl.byName = false;
	ctrl.displayContents = [];
	ctrl.fragranceInfo = [];
	ctrl.womenJSON


	function getJSON() {
		$http.get("fragrances.json")
		.success(function(data) {
			ctrl.contentsJSON = data;
			ctrl.womenJSON = data.gender === 'women';

		})
		.error(function(data, status, error, config) {
			ctrl.contentsJSON = [{heading: "Error", description: "Could not load JSON."}];
		})

	}
	// $filter('womenFilter')(ctrl.contentsJSON, ctrl.contentsJSON.gender == 'women')
		// $filter('womenFilter'); trying to use filter to separate womens fragrances from others

	function selectCategory() {
		ctrl.displayContents = [];
		if (ctrl.gender == 'women') {
			// ctrl.displayContents.push(
			// 	);
			console.log('women');
		}
		else if (ctrl.gender == 'men') {
			console.log('men');
		}
		else if (ctrl.gender == 'neutral') {
			console.log('neutral');
		}
		else {
			alert("incorrect entry")
		}

		ctrl.pickAPage = 'logo_displays.html';
	}

	function fragranceInformation(scent) {
		ctrl.fragranceInfo = [];
		// var index = ctrl.contentsJSON.indexOf(scent);
		ctrl.fragranceInfo.push(scent);
		ctrl.pickAPage = 'fragrance_information.html';
	}

	ctrl.getJSON = getJSON;
	ctrl.selectCategory = selectCategory;
	ctrl.fragranceInformation = fragranceInformation;

	ctrl.getJSON()
}

angular.module('app', [])
	.controller('MainCtrl', MainController);