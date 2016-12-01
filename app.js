'use strict';

function MainController($http) {
	const ctrl = this;
	ctrl.contentsJSON = {};
	ctrl.pickAPage = 'front_page.html';
	ctrl.gender = '';
	ctrl.category = '';
	ctrl.price = '';
	ctrl.order = 'id';
	ctrl.displayContents = [];
	ctrl.featuredWomen = {
		"fragranceName": "No 5: Eau Premiere Spray",
		"company": "Chanel",
		"gender": "women",
		"description": "A modern, airy interpretation of N°5 . . . a silky-smooth harmony of notes that reveals the delicate facet of the now and forever fragrance. Created by Gabrielle Chanel in 1921 to be the ultimate symbol of luxurious simplicity, N°5 has since become more than a fragrance. It is an olfactory heritage: an idea of femininity, a masterpiece of chic, passed on from generation to generation.",
		"fragranceImage": "http://www.chanel.com/en_US/fragrance-beauty/cms2export/Site1Files/P105170/S105340_XLARGE.jpg",
		"fragranceFamily": "Floral",
		"website": "www.Chanel.com",
		"price": "$76.00",
		"featured": true
	};
	ctrl.fragranceInfo = [ctrl.featuredWomen,];
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

	function sampleCard(scent) {
		ctrl.fragranceInfo = [];
		ctrl.fragranceInfo.push(scent);
		ctrl.pickAPage = 'sample_card.html';
	}

	ctrl.getJSON = getJSON;
	ctrl.selectCategory = selectCategory;
	ctrl.fragranceInformation = fragranceInformation;
	ctrl.sampleCard = sampleCard;

	ctrl.getJSON()
}

angular.module('app', [])
	.controller('MainCtrl', MainController);