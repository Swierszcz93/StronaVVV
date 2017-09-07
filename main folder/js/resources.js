var mainDivId = "resourcesContent";
var resourcessPath = "/../resources/sites/";
// main controller for angular
var app = angular.module('main', []);
app.controller('mainCtrl', function($scope, $http, $sce) {
	$http.get("datafiles/resources.txt").then(function(response) {
		var rawresourcessTable = response.data.split('\n');
		$scope.resourcesTable = [];
		for (var i = 0; i < rawresourcessTable.length; i++) {
			$scope.resourcesTable.push(rawresourcessTable[i].split(';'));
		}
	});
});

function loadSelectedResources() {
	removePreviousContent();
	fillWithNewContent();
}

function removePreviousContent() {
	$("#" + mainDivId).empty();
}

function fillWithNewContent() {
	getFileContent($("#resourcesSelect").val(), prepareNewContent);
}

function getFileContent(fileName, callback) {
	console.log(document.URL + resourcessPath + fileName);
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			callback(xmlHttp.responseText);
	}
	xmlHttp.open("GET", document.URL + resourcessPath + fileName, true);
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
	case 'table':
		return processTable(rowTab);
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
	sectionText.className = "resourcesText";
	sectionText.innerHTML = rowTab[1];
	return sectionText;
}
function processTitle(rowTab) {
	var sectionTitle = document.createElement("section");
	sectionTitle.className = "resourcesTitle";
	sectionTitle.innerHTML = rowTab[1];
	return sectionTitle;
}
function processSectionTitle(rowTab) {
	var sectionTitle = document.createElement("section");
	sectionTitle.className = "resourcesSectionTitle";
	sectionTitle.innerHTML = rowTab[1];
	return sectionTitle;
}
function processAuthor(rowTab) {
	var sectionTitle = document.createElement("section");
	sectionTitle.className = "resourcesAuthor";
	sectionTitle.innerHTML = rowTab[1];
	return sectionTitle;
}
function processImage(rowTab) {
	var section = document.createElement("section");
	section.className = "resourcesImage";
	var image = document.createElement("img");
	image.style.width = rowTab[1];
	image.style.height = rowTab[2];
	image.src = rowTab[3];
	section.append(image);
	return section;
}
function processVideo(rowTab) {
	var section = document.createElement("section");
	section.className = "resourcesVideo";
	var video = document.createElement("iframe");
	video.style.width = rowTab[1];
	video.style.height = rowTab[2];
	video.src = rowTab[3].replace("watch?v=", "embed/");
	video.allowfullscreen = true;
	section.append(video);
	return section;
}
//table;kol1|kol2|kol3;kol1|kol2|kol3
function processTable(rowTab) {
	var table = document.createElement("table");
	table.className = "resourcesTable";
	
	var tableHeader = document.createElement("tr");
	var tableCells = rowTab[1].split("|");
	for(var j=0;j<tableCells.length;j++){
		var td = document.createElement("th");
		td.innerHTML = tableCells[j];
		tableHeader.append(td);
	}
	table.append(tableHeader);
	
	for(var i=2;i<rowTab.length;i++){
		var tableRow = document.createElement("tr");
		var tableCells = rowTab[i].split("|");
		for(var j=0;j<tableCells.length;j++){
			var td = document.createElement("td");
			td.innerHTML = tableCells[j];
			tableRow.append(td);
		}
		table.append(tableRow);
	}
	return table;
}
function setHeightForVideos() {
	var videos = document.querySelectorAll(".resourcesVideo");
	for (i = 0; i < videos.length; i++) {
		videos[i].style.height = (videos[i].offsetWidth * 9 / 16) + "px";
	}
	
}