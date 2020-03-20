let onBouge = false;
let postIT = [];
let x;
let y;
const addRed = document.querySelector(".add-1");
const addGreen = document.querySelector(".add-2");
const addYellow = document.querySelector(".add-3");

/* Add Events */
addRed.addEventListener("click", function() {
    // console.log("Hello Red");
    monTest1.afficheTest();
    postIT.push(monTest1);
    console.log(postIT);
});

addGreen.addEventListener("click", function() {
    monTest2.afficheTest();
    postIT.push(monTest2);
    console.log(postIT);
    // console.log("Hello Green");
});

addYellow.addEventListener("click", function() {
    monTest3.afficheTest();
    postIT.push(monTest3);
    console.log(postIT);
    // console.log("Hello Yellow");
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
    setTimeout(refresh, 100);
}

refresh();
