//fullscreen button

let iframe55 = document.getElementById("iframe55");
let main_element = iframe55;

document.getElementById("fullscreen55").onclick = (e) => {
    main_element.requestFullscreen();
}

//handle fullscreen transition

let last_zoom = 1;

iframe55.onfullscreenchange = (e) => {
    if (document.fullscreenElement) {
        last_zoom = get_zoom();
        set_zoom(1);
    } else {
        set_zoom(last_zoom);
    }
}


//handle focus changes

function focus_on_iframe() {
    iframe55.contentWindow.focus();
}
focus_on_iframe();

iframe55.contentWindow.onclick = focus_on_iframe;
iframe55.contentWindow.onfocus = () => {
    iframe55.style.borderColor = "";
};
iframe55.contentWindow.onblur = () => {
    iframe55.style.borderColor = "#fff";
}

//handle zooming

function set_zoom(zoom) {
    if (isNaN(zoom)) {
        zoom = 1;
    }
    iframe55.contentDocument.body.style.zoom = zoom;

    //force iframe to acknowledge resize
    iframe55.contentWindow.dispatchEvent(new Event("resize"))
    return zoom;
}

function set_zoom_and_store(zoom) {
    set_zoom(zoom);
    localStorage.setItem("zoom55", zoom);
}

function get_zoom() {
    let zoom = parseFloat(iframe55.contentDocument.body.style.zoom);
    if (isNaN(zoom)) {
        return 1;
    }
    return zoom;
}

document.getElementById("zoom_in55").onclick = (e) => {
    set_zoom_and_store(get_zoom() * 1.1);
}
document.getElementById("zoom_out55").onclick = (e) => {
    set_zoom_and_store(get_zoom() * 0.9);
}
document.getElementById("zoom_reset55").onclick = (e) => {
    set_zoom_and_store(1);
}
document.getElementById("popout55").onclick = (e) => {
    opencustom(iframe55.src);
}

function preventDefault(e) {
    if (e.code == "ArrowUp" || e.code == "ArrowDown" || e.code == "ArrowLeft" || e.code == "ArrowRight" || e.code == "Space" && iframe55.contentDocument.activeElement.nodeName.toLowerCase() != "input") {
        e.preventDefault();
    }
}

//restore saved zoom on iframe load
iframe55.onload = (e) => {
    set_zoom(localStorage.getItem("zoom55"));

    //iframe55.contentDocument.addEventListener("keydown", preventDefault);
    //iframe55.contentDocument.addEventListener("keyup", preventDefault);

    let main_check = iframe55.contentDocument.querySelector(".main_element55");
    if (main_check) {
        main_element = main_check;
    }
};