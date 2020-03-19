// Get the current year for the copyright
// $("#year").text(new Date().getFullYear());

class Postit {
    x;
    y;
    vitesse;
    couleur;

    constructor(x, y, vitesse, couleur) {
        this.x = x;
        this.y = y;
        this.vitesse = vitesse;
        this.couleur = couleur;
    }

    changeVitesse(vitesse) {
        this.vitesse = vitesse;
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
        monElem.innerHTML =
            "Je suis un objet de test, j'avance à " + this.vitesse + " Vroum";
        document.body.appendChild(monElem);
    }
}

monTest = new Postit(100, 200, 30, "red");
monTest.afficheTest();
