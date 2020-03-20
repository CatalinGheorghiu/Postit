// Get the current year for the copyright
// $("#year").text(new Date().getFullYear());

class Postit {
    x;
    y;
    couleur;
    text;

    constructor(x, y, couleur, text) {
        this.x = x;
        this.y = y;
        this.couleur = couleur;
        this.text = text;
    }

    changePlace(x, y) {
        this.x = x;
        this.y = y;
    }

    changeCouleur(coul) {
        this.couleur = coul;
    }

    afficheTest() {
        let monElem = document.createElement("div");
        monElem.className = "notes";
        monElem.style.position = "fixed";
        monElem.style.top = this.y + "px";
        monElem.style.left = this.x + "px";
        monElem.style.width = "250px";
        monElem.style.height = "150px";
        monElem.style.backgroundColor = this.couleur;
        monElem.style.padding = "5px";
        monElem.style.color = "black";
        monElem.innerHTML = ` <h3> ${this.text} </h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eligendi excepturi odio! Provident, saepe numquam?</p>`;
        document.body.appendChild(monElem);
    }
}

monTest1 = new Postit(435, 100, "red", "Post ");
monTest2 = new Postit(435, 300, "green", "Post ");
monTest3 = new Postit(435, 500, "yellow", "Post");

// monTest1.afficheTest();
// monTest2.afficheTest();
// monTest3.afficheTest();
