/**
 * */

 window.addEventListener("load", function(event) {
	console.log("window loaded:", event);

	let h1 = window.document.createElement("h1");
	h1.textContent = "Responsive Design Sandbox";
	window.document.body.appendChild(h1);
});
