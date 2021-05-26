var i = 0; // Start Point
var images = []; // Images Array
var time = 2000; // Time Between Switch

// Image List
images[0] = "/images/indretning_500px.png";
images[1] = "/images/hestedækken.jpg";
images[2] = "/images/knapper.png";
images[3] = "/images/monteringspuder.jpg";

// Change Image
function changeImg() {
    document.slide.src = images[i];

    // Check If Index Is Under Max
    if (i < images.length - 1) {
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }

    // Run function every x seconds
    setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;