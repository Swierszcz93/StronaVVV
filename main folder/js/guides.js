//main controller for angular
var app = angular.module('main', []);
app.controller('mainCtrl', function($scope, $http, $sce) {
	$http.get("datafiles/guides.txt").then(function(response) {
		var rawGuidesTable = response.data.split('\n');
		$scope.guidesTable = [];
		for(var i=0;i<rawGuidesTable.length;i++){
			$scope.guidesTable.push(rawGuidesTable[i].split(';'));
		}
	});
});

function loadSelectedGuide(){
	log('loadSelectedGuide');
}

function removePreviousContent(){
	
}

function fillWithNewContent(){
	
}