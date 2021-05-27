const contact = JSON.parse (sessionStorage.getItem("contact"))
const orderId = JSON.parse (sessionStorage.getItem("orderId"))
const total = JSON.parse (sessionStorage.getItem('total'))


let html="";

html += ` 
<h2>Confirmation de votre commande </h2>
<ul>
    <li class="puce">Vos coordonnées</li>
    <li class="puce">Nom: ${contact.lastName}</li>
    <li class="puce">Prénom: ${contact.firstName}</li>
    <li class="puce">Adresse: ${contact.address}</li>
    <li class="puce">Ville: ${contact.city}</li>
    <li class="puce">E-mail: ${contact.email}</li>
</ul>
<h3>Total: ${(total/100).toFixed(2).replace(".",",")} €</h3>
<h3>Numéro de commande: </br> ${orderId}</h3>`
document.getElementbyId("order__confirmed").innerHTML = html;


sessionStorage.removeItem('contact');
sessionStorage.removeItem('total');
sessionStorage.removeItem('orderId');
