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
	setHeightForVideos();
}

function processRow(rowText) {
	var rowTab = rowText.split(";");
	switch (rowTab[0]) {
	case 'title':
		return processTitle(rowTab);
	case 'stitle':
		return processSectionTitle(rowTab);
	case 'text':
		return processText(rowTab);
	case 'img':
		return processImage(rowTab);
	case 'video':
		return processVideo(rowTab);
	case 'autor':
		return processAuthor(rowTab);
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
function processSectionTitle(rowTab) {
	var sectionTitle = document.createElement("section");
	sectionTitle.className = "guideSectionTitle";
	sectionTitle.innerHTML = rowTab[1];
	return sectionTitle;
}
function processAuthor(rowTab) {
	var sectionTitle = document.createElement("section");
	sectionTitle.className = "guideAuthor";
	sectionTitle.innerHTML = rowTab[1];
	return sectionTitle;
}
function processImage(rowTab) {
	var section = document.createElement("section");
	section.className = "guideImage";
	var image = document.createElement("img");
	image.style.width = rowTab[1];
	image.style.height = rowTab[2];
	image.src = rowTab[3];
	section.append(image);
	return section;
}
function processVideo(rowTab) {
	var section = document.createElement("section");
	section.className = "guideVideo";
	var video = document.createElement("iframe");
	video.style.width = rowTab[1];
	video.style.height = rowTab[2];
	video.src = rowTab[3].replace("watch?v=", "embed/");
	video.allowfullscreen = true;
	section.append(video);
	return section;
}
function setHeightForVideos() {
	var videos = document.querySelectorAll(".guideVideo");
	for (i = 0; i < videos.length; i++) {
		videos[i].style.height = (videos[i].offsetWidth * 9 / 16) + "px";
	}
	
}