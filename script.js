/* ================= STACK ================= */
let stack = [];

function pushStack() {
    let val = document.getElementById("stackInput").value;
    if (!val) return;
    stack.push(val);
    renderStack();
}

function popStack() {
    stack.pop();
    renderStack();
}

function renderStack() {
    let view = document.getElementById("stackView");
    view.innerHTML = "";
    [...stack].reverse().forEach(v => {
        let d = document.createElement("div");
        d.className = "node";
        d.innerText = v;
        view.appendChild(d);
    });
}

/* ================= QUEUE ================= */
let queue = [];

function enqueue() {
    let val = document.getElementById("queueInput").value;
    if (!val) return;
    queue.push(val);
    renderQueue();
}

function dequeue() {
    queue.shift();
    renderQueue();
}

function renderQueue() {
    let view = document.getElementById("queueView");
    view.innerHTML = "";
    queue.forEach(v => {
        let d = document.createElement("div");
        d.className = "node";
        d.innerText = v;
        view.appendChild(d);
    });
}

/* ================= LINKED LIST ================= */
let list = [];

function addNode() {
    let val = document.getElementById("listInput").value;
    if (!val) return;
    list.push(val);
    renderList();
}

function removeNode() {
    list.pop();
    renderList();
}

function renderList() {
    let view = document.getElementById("listView");
    view.innerHTML = "";
    list.forEach((v, i) => {
        let node = document.createElement("div");
        node.className = "node";
        node.innerText = v;
        view.appendChild(node);

        if (i < list.length - 1) {
            let arrow = document.createElement("div");
            arrow.className = "arrow";
            arrow.innerHTML = "→";
            view.appendChild(arrow);
        }
    });
}

/* ================= BST ================= */
class Node {
    constructor(v) {
        this.v = v;
        this.left = null;
        this.right = null;
    }
}

let root = null;

function insertBST() {
    let val = parseInt(document.getElementById("bstInput").value);
    if (isNaN(val)) return;
    root = insertNode(root, val);
    renderBST();
}

function insertNode(node, val) {
    if (!node) return new Node(val);
    if (val < node.v) node.left = insertNode(node.left, val);
    else node.right = insertNode(node.right, val);
    return node;
}

function renderBST() {
    let view = document.getElementById("bstView");
    view.innerHTML = drawTree(root);
}

function drawTree(node) {
    if (!node) return "";
    return `
        <div class="node">${node.v}</div>
        <div style="display:flex;">
            <div style="flex:1;">${drawTree(node.left)}</div>
            <div style="flex:1;">${drawTree(node.right)}</div>
        </div>
    `;
}


