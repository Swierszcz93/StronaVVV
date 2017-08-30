var columns = 4;//ile ma byc kolumn w widoku

// main controller for angular
var app = angular.module('main', []);
app.controller('mainCtrl', function($scope, $http, $sce) {
	$http.get("datafiles/players.txt").then(
			function(response) {
				$scope.columns = columns;
				var rawNicknames = response.data.split('\n');
				var rowsInColumns = parseInt(rawNicknames.length / columns
						+ (rawNicknames.length % columns == 0 ? 0 : 1));
				$scope.nicknames = [];
				for (i = 0; i < columns; i++) {
					$scope.nicknames.push(rawNicknames.slice(i*rowsInColumns,(i+1)*rowsInColumns));
				}
			});
});