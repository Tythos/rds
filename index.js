/**
 * */

window.addEventListener("load", function(event) {
    function onTriggerClicked(event) {
        let Nav = window.document.body.querySelector(".Nav");
        if (Nav.style.display == "block") {
            // hide
            Nav.style.display = "none";
        } else {
            // show
            Nav.style.display = "block";
        }
    }

	console.log("window loaded:", event);
    let Trigger = window.document.body.querySelector(".Trigger");
    Trigger.addEventListener("click", onTriggerClicked);
});
