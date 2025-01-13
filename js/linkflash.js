let l;
    let f;
    let el;
    let st = false;
    function step() {
        if (Date.now() - l > 50) {
            el.style.color = f ? "#11dcff" : "#ff0";
            f = !f;
            l = Date.now();
        }
        if (!st) {
            requestAnimationFrame(step);
        } else {
            st = false;
        }
    }
    document.querySelectorAll("a").forEach((e) => {
        el = e;
        e.onmouseenter = (ev) => {
            l = 0;
            f = true;
            requestAnimationFrame(step);
        }
        e.onmouseleave = (ev) => {
            st = true;
        }
    });