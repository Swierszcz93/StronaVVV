//main controller for angular
var app = angular.module('main', []);
app.controller('mainCtrl', function($scope, $http, $sce) {
	$http.get("datafiles/nicki.txt").then(function(response) {
		$scope.nicks = response.data.split('\n');
	});
});