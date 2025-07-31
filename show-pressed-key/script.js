

// to check if it is mobile phone
function isMobileDevice() {
    const userAgentCheck = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const screenSizeCheck = window.innerWidth < 768;
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    return (userAgentCheck || screenSizeCheck) && hasTouch;

}


// if it is mobile than show warning 
function toggleMobileWarning() {
    if (isMobileDevice()) {
        document.getElementById("mobile-warning").style.display = "block";
    } else {
        document.getElementById("mobile-warning").style.display = "none";
    }
}

// to detect on resize 
window.addEventListener("resize", toggleMobileWarning);
window.addEventListener("load", toggleMobileWarning);



// FOR DESKTOP OR IF KEYBOSRD IS CONNECTED 

//Select h1 to change according to which keyboard key is pressed

let h = document.querySelector("h1")

let keyPressSound = new Audio("https://cdn.pixabay.com/audio/2022/03/15/audio_bca2811b06.mp3");


let keyIsDown = false;  //for Debouncing, so that:
// Prevent repeated sound when holding a key:
// Only play sound if no key is currently held down.
// Reset flag on key release.


window.addEventListener("keydown", function (dets) {
    // console.log(dets.key)
    // h.textContent = dets.key

    // Play the sound
    if (!keyIsDown) {
        keyIsDown = true;  // mark key as pressed
        keyPressSound.currentTime = 0;
        keyPressSound.play();
    }

    // keyPressSound.currentTime = 0; // Rewind to start in case the key is held down
    // keyPressSound.play(); // Play sound

    if (dets.key === " ") {
        h.textContent = "SPACE"
    } else {
        h.textContent = dets.key
    }


    // for button click effect
    h.classList.add("pressed")


})

//   // for button click effect
window.addEventListener("keyup", function (dets) {
    keyIsDown = false; // mark key as released

    h.classList.remove("pressed")
})
