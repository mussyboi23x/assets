//fullscreen button

document.getElementById("fullscreen55").onclick = (e) => {
    document.getElementById("iframe55").requestFullscreen();
}

function focusOnIframe() {
    document.getElementById("iframe55").contentWindow.focus();
}
focusOnIframe();
document.getElementById("iframe55").onclick = focusOnIframe;