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

        if (document.getElementById("item") == null) {
            monElem = document.createElement("div");
            creation = true;
        } else {
            monElem = document.getElementById("item");
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
        // monElem.style.padding = "5px";
        monElem.style.color = "black";
        monElem.innerHTML = ` 
        <div class="post-title">
            <h3> ${this.text} </h3>
        </div>
        <div class="post-body">
            <p>Add text</p> 
        </div>
        <div class="post-footer">
            <i class="fas fa-people-carry move"></i>
        </div>
            
            `;

        // monElem.addEventListener("click", () => {
        //     onBouge = true;
        // });

        if (creation) {
            document.body.appendChild(monElem);
        }

        /* Move the Postit */
        document.querySelector(".move").addEventListener("click", function() {
            // console.log("Hello");
            onBouge = true;
        });
    }
}
