//main controller for angular
var app = angular.module('main', []);
app.controller('mainCtrl', function($scope, $http, $sce) {
	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src.replace("watch?v=", "embed/"));
	}
	$http.get("components/movies.txt").then(function(response) {
		$scope.movies = response.data.split('\n');
	});
});