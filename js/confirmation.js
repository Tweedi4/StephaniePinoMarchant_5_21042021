//Récupération des différents éléments "contact,orderId,total" dans le sessionStorage
const contact = JSON.parse (sessionStorage.getItem("contact"))
const orderId = JSON.parse (sessionStorage.getItem("orderId"))
const total = JSON.parse (sessionStorage.getItem('total'))


let html="";

html += ` 
<h2>Confirmation de votre commande </h2>
<ul>
    <li class="form__style">Vos coordonnées</li>
    <li class="form__style">Prénom: ${contact.firstName}</li>
    <li class="form__style">Nom: ${contact.lastName}</li>
    <li class="form__style">Adresse: ${contact.address}</li>
    <li class="form__style">Ville: ${contact.city}</li>
    <li class="form__style">E-mail: ${contact.email}</li>
</ul>
<h3>Total: ${(total/100).toFixed(2).replace(".",",")} €</h3>
<h3>Numéro de commande: ${orderId}</h3>`
document.getElementById("order__confirmed").innerHTML = html;



sessionStorage.removeItem('contact');
sessionStorage.removeItem('total');
sessionStorage.removeItem('orderId');
