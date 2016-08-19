/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openMeny() {
    document.getElementByClassName("meny").style.width = "250px";
    document.getElementByClassName("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeMeny() {
    document.getElementByClassName("meny").style.width = "0";
    document.getElementByClassName("main").style.marginLeft = "0";
}
