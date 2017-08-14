var app = angular.module('main', []);
app.controller('mainCtrl', function($scope, $http) {
});

$(document).foundation();
var mobileClose = document.getElementById("mobileClose"), mobileOpen = document
		.getElementById("mobileOpen"), mobileMenu = document
		.getElementById("mobileMenu"), mobileMenuItem = $("ul.mobile__list")
		.children(), isMobileMenuOpen = !1;
mobileClose.onclick = function() {
	mobileMenu.classList.remove("mobile-menu--open")
}, mobileOpen.onclick = function() {
	mobileMenu.classList.add("mobile-menu--open")
}, mobileMenuItem.click(function() {
	mobileMenu.classList.remove("mobile-menu--open")
}), $(function() {
	$("li").click(function() {
		$("li").removeClass("active"), $(this).addClass("active")
	})
}), function(e, n, o, i, l, t, m) {
	e.GoogleAnalyticsObject = l, e[l] = e[l] || function() {
		(e[l].q = e[l].q || []).push(arguments)
	}, e[l].l = 1 * new Date, t = n.createElement(o), m = n
			.getElementsByTagName(o)[0], t.async = 1, t.src = i, m.parentNode
			.insertBefore(t, m)
}(window, document, "script", "https://www.google-analytics.com/analytics.js",
		"ga"), ga("create", "UA-93050932-1", "auto"), ga("send", "pageview");