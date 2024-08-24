//search index

let search = document.getElementById("search55");

let posts = document.getElementById("posts");

function forEachRow(each) {
    let children = posts.children;
    for (let i=0; i < children.length; i++) {
        let e = children[i];
        i = each(i, e);
        if (i < 0) {
            break;
        }
    }
}

function forEachChild(each) {
    forEachRow((i, row) => {
        let rowChildren = row.children;
        for (let j=0; j < rowChildren.length; j++) {
            let child = rowChildren[j];

            j = each(j, child);
            if (i < 0) {
                break;
            }
        }
        return i;
    });
}

let index = [];
forEachChild((i, e) => {
    index.push(e);
    return i;
});

function clearResults() {
    forEachChild((i, e) => {
        e.remove();
        return i - 1;
    });
}

document.getElementById("search55").oninput = (e) => {
    let target = e.target;
    let search = e.target.value.trim().toLowerCase();
    
    clearResults();

    for (let i=0; i < index.length; i++) {
        let child = index[i];
        let text = child.textContent.trim().toLowerCase();
        
        if (text.includes(search)) {
            let insertAt = 0;
            forEachRow((i, row) => {
                if (row.children.length < 3) {
                    i = -1;
                } else {
                    insertAt++;
                }
                return i;
            });
            posts.children[insertAt].appendChild(child);
        }
    }
}