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
        monElem.style.backgroundColor = this.couleur;
        monElem.style.color = "black";
        monElem.innerHTML = ` 
        <div class="post-title">
            <h3> ${this.text} </h3>
        </div>
        <div class="post-body">
            <p>Add text</p> 
        </div>
        <div class="post-footer">
            <i class="fas fa-expand-arrows-alt move"></i>
            <i class="fas fa-compress-alt resize"></i>
            <i class="fas fa-edit edit"></i>
            <i class="fas fa-trash-alt del"></i>
        </div>   
            `;

        // monElem.addEventListener("click", () => {
        //     onBouge = true;
        // });

        if (creation) {
            document.body.appendChild(monElem);
        }

        /* Move  Postit ###################################################*/
        document
            .querySelector(".move")
            .addEventListener("mousedown", function() {
                // console.log("Hello");
                onBouge = true;
            });

        /* Resize  Postit ##################################################*/
        document
            .querySelector(".resize")
            .addEventListener("mousedown", initResize, false);

        //Window funtion mousemove & mouseup
        function initResize(e) {
            window.addEventListener("mousemove", Resize, false);
            window.addEventListener("mouseup", stopResize, false);
        }
        //resize the element
        function Resize(e) {
            monElem.style.width = e.clientX - monElem.offsetLeft + "px";
            monElem.style.height = e.clientY - monElem.offsetTop + "px";
        }
        //on mouseup remove windows functions mousemove & mouseup
        function stopResize(e) {
            window.removeEventListener("mousemove", Resize, false);
            window.removeEventListener("mouseup", stopResize, false);
        }

        /* Delete Postit */
        document.querySelector(".del").addEventListener("click", function() {
            monElem.remove();
        });

        /* Edit Postit #####################################################*/
        document.querySelector(".edit").addEventListener("click", function() {
            let button = document.createElement("button");
            button.innerHTML = "Confirm";
            monElem.appendChild(button);
            monElem.setAttribute("contenteditable", "true");

            button.addEventListener("click", function() {
                monElem.setAttribute("contenteditable", "false");
                button.remove();
            });
        });
    }
}
