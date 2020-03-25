let onBouge = false;
let x;
let y;
const addRed = document.querySelector(".add-1");
const addGreen = document.querySelector(".add-2");
const addYellow = document.querySelector(".add-3");
let move = document.querySelector(".fa-people-carry");
let item = document.querySelector("#item");
let current = 0;
var postIT = new Array();

/* Move event ########################################### */
document.addEventListener("mousemove", e => {
    x = e.clientX;
    y = e.clientY;
});

document.addEventListener("mouseup", () => {
    current = 0;
    onBouge = false;
});

/* Add Postit ############################################*/
addRed.addEventListener("mousedown", function() {
    // console.log("Hello Red");
    let monTest1 = new Postit(375, 92, "red", "Post ", postIT.length + 1);
    console.log(postIT.length + 1);
    postIT.push(monTest1);
    // console.log(monTest1);
    postIT[postIT.length - 1].afficheTest();
    // console.log(postIT[postIT.length - 1]);
    // console.log(postIT);
});

// addGreen.addEventListener("click", function() {
//     monTest2 = new Postit(10, 15, 375, 285, "green", "Post ");
//     monTest2.afficheTest();
//     postIT.push(monTest2);
// });

// addYellow.addEventListener("click", function() {
//     monTest3 = new Postit(10, 15, 375, 480, "yellow", "Post");
//     monTest3.afficheTest();
//     postIT.push(monTest3);
// });
function refresh() {
    if (onBouge && current != 0) {
        // console.log("on déplace !");
        postIT[current - 1].changePlace(x, y);
        postIT[current - 1].afficheTest();
    }
    setTimeout(refresh, 10);
}
refresh();

function delPost(numPostit) {
    // postIT.pop(this.monTest1);
    delete postIT[numPostit - 1];
}
