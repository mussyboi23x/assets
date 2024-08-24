//fullscreen button

let iframe55 = document.getElementById("iframe55");
let iframe55container = document.getElementById("iframe55container");

document.getElementById("fullscreen55").onclick = (e) => {
    iframe55.requestFullscreen();
    onResize();
}

function focusOnIframe() {
    iframe55.contentWindow.focus();
}
focusOnIframe();
iframe55.onclick = focusOnIframe;