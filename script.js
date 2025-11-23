// ---------------------
// ARRAY
// ---------------------
let array = [];

function updateArray() {
    const container = document.getElementById("array-container");
    container.innerHTML = "";
    array.forEach(item => {
        const box = document.createElement("div");
        box.className = "box";
        box.innerText = item;
        container.appendChild(box);
    });
}

function addToArray() {
    let value = document.getElementById("array-value").value;
    if (value !== "") {
        array.push(value);
        updateArray();
    }
}

function removeFromArray() {
    array.pop();
    updateArray();
}


// ---------------------
// STACK
// ---------------------
let stack = [];

function updateStack() {
    const container = document.getElementById("stack-container");
    container.innerHTML = "";
    stack.forEach(item => {
        const box = document.createElement("div");
        box.className = "box";
        box.innerText = item;
        container.appendChild(box);
    });
}

function pushStack() {
    let value = document.getElementById("stack-value").value;
    if (value !== "") {
        stack.push(value);
        updateStack();
    }
}

function popStack() {
    stack.pop();
    updateStack();
}


// ---------------------
// QUEUE
// ---------------------
let queue = [];

function updateQueue() {
    const container = document.getElementById("queue-container");
    container.innerHTML = "";
    queue.forEach(item => {
        const box = document.createElement("div");
        box.className = "box";
        box.innerText = item;
        container.appendChild(box);
    });
}

function enqueue() {
    let value = document.getElementById("queue-value").value;
    if (value !== "") {
        queue.push(value);
        updateQueue();
    }
}

function dequeue() {
    queue.shift();
    updateQueue();
}
