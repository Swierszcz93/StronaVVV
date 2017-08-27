function openMobileMenu() {
	//alert("jestem");
	var menu = document.getElementById("menu");
	if (menu.className === "menu") {
		menu.className += " responsive";
	} else {
		menu.className = "menu";
	}
}