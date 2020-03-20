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
        monElem.style.position = "fixed";
        monElem.style.top = this.y + "px";
        monElem.style.left = this.x + "px";
        monElem.style.width = "150px";
        monElem.style.height = "150px";
        monElem.style.backgroundColor = this.couleur;
        monElem.style.padding = "5px";
        monElem.style.color = "black";
        monElem.innerHTML = this.text;
        document.body.appendChild(monElem);
    }
}

monTest1 = new Postit(100, 200, "red", "Test 1");
monTest2 = new Postit(300, 200, "green", "Test 2");
monTest1.afficheTest();
monTest2.afficheTest();
