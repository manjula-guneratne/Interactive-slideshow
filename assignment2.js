"use strict";

window.addEventListener("load", createLightbox);

function createLightbox(){
    //Lightbox Container
    let lightBox = document.getElementById("lightbox");

    //Parts of the lightbox
    let lbTitle = document.createElement("h1");
    let lbCounter = document.createElement("div");
    let lbPrev = document.createElement("div");
    let lbNext = document.createElement("div");
    let lbPlay = document.createElement("div");
    let lbImages = document.createElement("div");

    //Design the lightbox title
    lightBox.appendChild(lbTitle);
    lbTitle.id = "lbTitle";
    lbTitle.textContent = lightboxTitle;

    //Design the lightbox slide counter
    lightBox.appendChild(lbCounter);
    lbCounter.id = "lbCounter";
    let currentImg = 1;
    lbCounter.textContent = currentImg + " / " + imgCount;

    //Design the lightbox slide previous
    lightBox.appendChild(lbPrev);
    lbPrev.id = "lbPrev";
    lbPrev.innerHTML = "&#9664;";

    //Design the lightbox slide next
    lightBox.appendChild(lbNext);
    lbNext.id = "lbNext";
    lbNext.innerHTML = "&#9654;";

    //Design the lightbox slide play
    lightBox.appendChild(lbPlay);
    lbPlay.id = "lbPlay";
    lbPlay.innerHTML = "&#9199;";

    //Design the lightbox images container
    lightBox.appendChild(lbImages);
    lbImages.id = "lbImages";
    //Add images
    for (let i=0; i<imgCount; i++){
        let image = document.createElement("img");
        image.src = imgFiles[i];
        image.alt = imgCaptions[i];
        lbImages.appendChild(image);
    }
}