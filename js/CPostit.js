// Get the current year for the copyright
// $("#year").text(new Date().getFullYear());

class Postit {
    posX;
    posY;
    couleur;
    text;

    constructor(posX, posY, couleur, text) {
        this.posX = posX;
        this.posY = posY;
        this.couleur = couleur;
        this.text = text;
    }

    changePlace(x, y) {
        this.posX = x;
        this.posY = y;
    }

    changeCouleur(coul) {
        this.couleur = coul;
    }

    afficheTest() {
        let monElem;
        let creation = false;

        if (document.getElementById('item') == null) {
            monElem = document.createElement('div');
            creation = true;
        }
        else {
            monElem = document.getElementById('item');
        }

        monElem.className = "note";
        monElem.id = "item";
        // monElem.id = `div_${new Date().getTime().toString()}`;
        monElem.style.position = "fixed";
        monElem.style.top = this.posY + "px";
        monElem.style.left = this.posX + "px";
        monElem.style.width = "250px";
        monElem.style.height = "150px";
        monElem.style.backgroundColor = this.couleur;
        monElem.style.padding = "5px";
        monElem.style.color = "black";
        monElem.innerHTML = ` <h3> ${this.text} </h3><p>Add text</p>`;
        // document.body.appendChild(monElem);

        monElem.addEventListener('click', () => {
            // console.log("on bouge !")
            onBouge = true;
        })

        //Si ma voiture n'existe pas je l'ajoute au html
        if (creation) {
            document.body.appendChild(monElem);
        }
    }
}

monTest1 = new Postit(435, 100, "red", "Post ");
monTest2 = new Postit(435, 300, "green", "Post ");
monTest3 = new Postit(435, 500, "yellow", "Post");

// monTest1.afficheTest();
// monTest2.afficheTest();
// monTest3.afficheTest();
