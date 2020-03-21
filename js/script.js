let onBouge = false;
let postIT = [];
let x;
let y;
const addRed = document.querySelector(".add-1");
const addGreen = document.querySelector(".add-2");
const addYellow = document.querySelector(".add-3");
let move = document.querySelector(".fa-people-carry");

/* Add Events */
addRed.addEventListener("click", function() {
    // console.log("Hello Red");
    monTest1 = new Postit(435, 100, "red", "Post ");
    monTest1.afficheTest();
    postIT.push(monTest1);
});

addGreen.addEventListener("click", function() {
    monTest2 = new Postit(435, 300, "green", "Post ");
    monTest2.afficheTest();
    postIT.push(monTest2);
});

addYellow.addEventListener("click", function() {
    monTest3 = new Postit(435, 500, "yellow", "Post");
    monTest3.afficheTest();
    postIT.push(monTest3);
});

document.addEventListener("mousemove", e => {
    x = e.clientX;
    y = e.clientY;
});

document.addEventListener("mouseup", () => {
    onBouge = false;
});

function refresh() {
    if (onBouge) {
        // console.log("on déplace !");
        monTest1.changePlace(x, y);
        monTest1.afficheTest();
    }
    setTimeout(refresh, 10);
}
refresh();
