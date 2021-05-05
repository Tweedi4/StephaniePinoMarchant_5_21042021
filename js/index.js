fetch('http://localhost:3000/api/teddies')
  .then((response) => response.json())
  .then((response) => {
  
    console.log(response);

    //Je créer ma variable que je vais ajouter à mes elements
    let html = "";

    // Boucle pour récupére toutes les variables des produits + (Foreach)
    for(let i = 0; i < response.length; i++) {
      console.log(response[i].name);
      
      //Html pur , Créer les élément, clone prototype
      html += `<li class="item">
      <h2 class="row">${response[i].name}</h2>
      <p class="row"><img src="${response[i].imageUrl}" alt="Images ours" style= "width:28rem; border-radius:5px;"></p>
      <p class="row">${response[i].description}</p>
      <p class="row">${(response[i].price/100).toFixed(2).replace(".",",")}€</p>`}
     // Ajouter mes element créer dans le HTML pour afficher mes produits
    document.getElementById("teddy").innerHTML = html
})

// Message d'erreur
.catch(e => {
  errorMessage();
});