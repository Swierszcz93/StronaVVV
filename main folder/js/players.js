var columns = 4;
// main controller for angular
var app = angular.module('main', []);
app.controller('mainCtrl', function($scope, $http, $sce) {
	$http.get("datafiles/nicki.txt").then(
			function(response) {
				var rawNicknames = response.data.split('\n');
				var rowsInColumns = parseInt(rawNicknames.length / columns
						+ (rawNicknames.length % columns == 0 ? 0 : 1));
				$scope.nicknames = [];
				for(i=0;i<rowsInColumns;i++){
					var row = [];
					for(j=0;j<columns;j++){
						row.push(rawNicknames[j*rowsInColumns+i]);
					}
					$scope.nicknames.push(row);
				}
			});
});