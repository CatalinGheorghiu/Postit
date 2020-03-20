
const addRed = document.querySelector(".add-1");
const addGreen = document.querySelector(".add-2");
const addYellow = document.querySelector(".add-3");

/* Add Events */
addRed.addEventListener("click", function() {
    // console.log("Hello Red");
    monTest1.afficheTest();
});

addGreen.addEventListener("click", function() {
    monTest2.afficheTest();
    // console.log("Hello Green");
});

addYellow.addEventListener("click", function() {
    monTest3.afficheTest();
    // console.log("Hello Yellow");
});
