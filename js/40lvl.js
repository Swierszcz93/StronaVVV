//main controller for angular
var app = angular.module('main', []);
app.controller('mainCtrl', function($scope, $http, $sce) {
	$http.get("datafiles/40lvl.txt").then(function(response) {
		$scope.playersTable = response.data.split('\n');
	});
});