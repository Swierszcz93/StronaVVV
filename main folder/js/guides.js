var mainDivId = "guideContent";
var guidesPath = "/../guides/";
// main controller for angular
var app = angular.module('main', []);
app.controller('mainCtrl', function($scope, $http, $sce) {
	$http.get("datafiles/guides.txt").then(function(response) {
		var rawGuidesTable = response.data.split('\n');
		$scope.guidesTable = [];
		for (var i = 0; i < rawGuidesTable.length; i++) {
			$scope.guidesTable.push(rawGuidesTable[i].split(';'));
		}
	});
});

function loadSelectedGuide() {
	removePreviousContent();
	fillWithNewContent();
}

function removePreviousContent() {
	$("#" + mainDivId).empty();
}

function fillWithNewContent() {
	getFileContent($("#guidesSelect").val(), prepareNewContent);
}

function getFileContent(fileName, callback) {
	console.log(document.URL + guidesPath + fileName);
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(xmlHttp.responseText);
	}
	xmlHttp.open("GET", document.URL + guidesPath + fileName, true);
	xmlHttp.send(null);
}

function prepareNewContent(rawText) {
	var rawRows = rawText.split("\n");
	var contentSection = $("#" + mainDivId);
	for (var i = 0; i < rawRows.length; i++) {
		contentSection.append(processRow(rawRows[i]));
	}
}

function processRow(rowText) {
	var rowTab = rowText.split(";");
	switch (rowTab[0]) {
	case 'title':
		return processTitle(rowTab);
	case 'text':
		return processText(rowTab);
	case 'img':
		return processImage(rowTab);
	case 'video':
		return processVideo(rowTab);
	default:
		console.log("tag is not recognized: " + rowTab[0]);
		return null;
	}
}
function processText(rowTab) {
	var sectionText = document.createElement("section");
	sectionText.className = "guideText";
	sectionText.innerHTML = rowTab[1];
	return sectionText;
}
function processTitle(rowTab) {
	var sectionTitle = document.createElement("section");
	sectionTitle.className = "guideTitle";
	sectionTitle.innerHTML = rowTab[1];
	return sectionTitle;
}
function processImage(rowTab) {
	var image = document.createElement("img");
	image.className = "guideImage";
	image.style.width = rowTab[1];
	image.style.height = rowTab[2];
	image.src = rowTab[3];
	return image;
}
function processVideo(rowTab) {
	var video = document.createElement("video");
	video.className = "guideImage";
	video.style.width = rowTab[1];
	video.style.height = rowTab[2];
	video.src = rowTab[3];
	return video;
}
