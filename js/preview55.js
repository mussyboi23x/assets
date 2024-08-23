//search box

document.getElementById("search55").oninput = (e) => {
    let target = e.target;
    let search = e.target.value.trim().toLowerCase();
    
    let children = document.querySelector(".container").children;
    for (let i=0; i < children.length; i++) {
        let e = children[i];
        if (e.classList.contains("row") && e != target.parentElement) {
            let rowChildren = e.children;

            for (let j=0; j < rowChildren.length; j++) {
                let child = rowChildren[j];
                let text = child.textContent.trim().toLowerCase();
                if (text.includes(search)) {
                    child.style.display = "";
                } else {
                    child.style.display = "none";
                }
            }
        }
    }
}