//search index

let search = document.getElementById("search55");

let posts = document.getElementById("posts");

function for_each_row(each) {
    let children = posts.children;
    for (let i=0; i < children.length; i++) {
        let e = children[i];
        i = each(i, e);
        if (i < 0) {
            break;
        }
    }
}

function for_each_child(each) {
    for_each_row((i, row) => {
        let row_children = row.children;
        for (let j=0; j < row_children.length; j++) {
            let child = row_children[j];

            j = each(j, child);
            if (i < 0) {
                break;
            }
        }
        return i;
    });
}

let index = [];
for_each_child((i, e) => {
    index.push(e);
    return i;
});

function clear_results() {
    for_each_child((i, e) => {
        e.remove();
        return i - 1;
    });
}

document.getElementById("search55").oninput = (e) => {
    let target = e.target;
    let search = e.target.value.trim().toLowerCase();
    
    clear_results();

    for (let i=0; i < index.length; i++) {
        let child = index[i];
        let text = child.textContent.trim().toLowerCase();
        
        if (text.includes(search)) {
            let insert_at = 0;
            for_each_row((i, row) => {
                if (row.children.length < 3) {
                    i = -1;
                } else {
                    insert_at++;
                }
                return i;
            });
            posts.children[insert_at].appendChild(child);
        }
    }
}