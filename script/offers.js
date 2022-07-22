let navbar = document.querySelector(".navbar");
let searchbarConatiner = document.querySelector(".search-layout > div:first-child");
let featuresConatiner = document.querySelector(".search-layout > div:last-child");
let features = document.querySelector(".features");
let offer = document.querySelector(".features > li:first-child");

let prevScrollDist = 0;
window.onscroll = function() {
    var distanceScrolled = document.documentElement.scrollTop;
    if (prevScrollDist < distanceScrolled && distanceScrolled > 50) {
        // Scroll down

        navbar.style.height = "78px";
        features.remove();
        offer.style.display = 'none';
        searchbarConatiner.append(features);
        featuresConatiner.style.display = "none";
    } else {
        // Scroll up

        navbar.style.height = "120px";
        features.remove();
        offer.style.display = 'flex';
        featuresConatiner.append(features);
        featuresConatiner.style.display = "flex";
    }
    prevScrollDist = distanceScrolled;
}


