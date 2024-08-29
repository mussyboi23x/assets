//fullscreen button

let iframe55 = document.getElementById("iframe55");
let iframe55container = document.getElementById("iframe55container");
let main_element = iframe55;

document.getElementById("fullscreen55").onclick = (e) => {
    main_element.requestFullscreen();
}

//handle fullscreen transition

let lastZoom = 1;

iframe55.onfullscreenchange = (e) => {
    if (document.fullscreenElement) {
        lastZoom = getZoom();
        setZoom(1);
    } else {
        setZoom(lastZoom);
    }
}


//handle focus changes

function focusOnIframe() {
    iframe55.contentWindow.focus();
}
focusOnIframe();

iframe55.contentWindow.onclick = focusOnIframe;
iframe55.contentWindow.onfocus = (e) => {
    iframe55container.style.borderColor = "";
};
iframe55.contentWindow.onblur = (e) => {
    iframe55container.style.borderColor = "#fff";
}

//handle zooming

function setZoom(zoom) {
    if (isNaN(zoom)) {
        zoom = 1;
    }
    iframe55.contentWindow.top.document.body.style.zoom = zoom;

    //force iframe to acknowledge resize
    iframe55.contentWindow.dispatchEvent(new Event("resize"))
    return zoom;
}

function setZoomAndStore(zoom) {
    setZoom(zoom);
    localStorage.setItem("zoom55", zoom);
}

function getZoom() {
    let zoom = parseFloat(iframe55.contentWindow.top.document.body.style.zoom);
    if (isNaN(zoom)) {
        return 1;
    }
    return zoom;
}

document.getElementById("zoom_in55").onclick = (e) => {
    setZoomAndStore(getZoom() * 1.1);
}
document.getElementById("zoom_out55").onclick = (e) => {
    setZoomAndStore(getZoom() * 0.9);
}
document.getElementById("zoom_reset55").onclick = (e) => {
    setZoomAndStore(1);
}

function preventDefault(e) {
    if (e.code == "ArrowUp" || e.code == "ArrowDown" || e.code == "ArrowLeft" || e.code == "ArrowRight" || e.code == "Space" && iframe55.contentWindow.top.document.activeElement.nodeName.toLowerCase() != "input") {
        e.preventDefault();
    }
}

//restore saved zoom on iframe load
iframe55.onload = (e) => {
    setZoom(localStorage.getItem("zoom55"));

    iframe55.contentWindow.top.document.addEventListener("keydown", preventDefault);
    iframe55.contentWindow.top.document.addEventListener("keyup", preventDefault);

    let mainCheck = iframe55.contentWindow.top.document.querySelector(".main_element55");
    if (mainCheck) {
        main_element = mainCheck;
    }
};