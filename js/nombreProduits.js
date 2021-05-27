// Appel fonction du nombre d'articles dans mon panier
itemConfirmation()

// fonction qui affiche le nombre d'articles dans le panier.
function itemConfirmation() {
    
    div = document.querySelector(".item__number")
    let nomber = 0;

    if (sessionStorage.getItem('anyItem') !== null) {
        
        let keyNomber = JSON.parse(sessionStorage.getItem('anyItem'));
        
        keyNomber.forEach((prod) => {
            nomber = nomber + prod.quantity;
        });
    }
    div.textContent = nomber;
    console.log("test ajout")
}

//  fonction de message d'erreur si pas de connexion au serveur
function errorMessage() {

    let html = "";
   
    html += `<p class="section__error" style=" font-size:30px;"><b>"Impossible de se connecter, vérifiez votre réseau et reessayer"<b></p>`
    document.querySelector(".error").innerHTML = html;
}