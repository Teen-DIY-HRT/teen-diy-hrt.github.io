// Get all elements with the class "collapsible"
var coll = document.getElementsByClassName("Collapsible");

// Loop through all collapsible buttons and add click event listeners
for (var i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function() {
		// Toggle the "active" class to change the button's style
		this.classList.toggle("Active");

		// Get the content next to the button
		var content = this.nextElementSibling;

		// Toggle the display of the content
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}
