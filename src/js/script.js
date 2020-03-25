let onBouge = false;
let postIT = new Array();
let x;
let y;
const addRed = document.querySelector(".add-1");
const addGreen = document.querySelector(".add-2");
const addYellow = document.querySelector(".add-3");
let move = document.querySelector(".fa-people-carry");
let item = document.querySelector("#item");

/* Add Postit ############################################*/
addRed.addEventListener("mousedown", function() {
    // console.log("Hello Red");
    let monTest1 = new Postit(375, 92, "red", "Post ", postIT.length + 1);
    // console.log(postIT.length + 1);
    postIT.push(monTest1);
    postIT[postIT.length - 1].afficheTest();
    console.log(postIT[postIT.length - 1]);
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

/* Move event ########################################### */
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
        postIT.changePlace(x, y);
        postIT.afficheTest();
    }
    setTimeout(refresh, 10);
}
refresh();

function delPost(numPostit) {
    // postIT.pop(this.monTest1);
    delete postIT[numPostit - 1];
}
