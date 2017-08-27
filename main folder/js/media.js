//main controller for angular
var app = angular.module('main', []);
app.controller('mainCtrl', function($scope, $http, $sce) {
	$scope.trustSrc = function(src) {
		return $sce.trustAsResourceUrl(src.replace("watch?v=", "embed/"));
	}
	$http.get("datafiles/movies.txt").then(function(response) {
		$scope.movies = response.data.split('\n');
	});
});
$(document).ready(setTimeout(function() {
	setHeightForVideos();
}, 100));

function setHeightForVideos() {
	var videos = document.querySelectorAll(".youtube_video");
	for (i = 0; i < videos.length; i++) {
		videos[i].style.height = (videos[i].offsetWidth * 9 / 16) + "px";
	}
	
}