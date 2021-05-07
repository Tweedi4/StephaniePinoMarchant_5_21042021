fetch('http://localhost:3000/api/teddies')
  .then((response) => response.json())
  .then((response) => {
  
    console.log(response);

    //Créer ma variable que je vais ajouter à mes elements
    let html = "";

    // Boucle pour récupérer toutes les variables des produits + (Foreach)
    for(let i = 0; i < response.length; i++) {
      console.log(response[i].name);
      
      //Html, Créer les élément, clone prototype
      html += `<li class="item">
      <h2 class="row" style="padding:10px;">${response[i].name}</h2>
      <p class="row"><img src="${response[i].imageUrl}" alt="Images ours" style= "width:28rem; border-radius:5px;"></p>
      <p class="row" style="margin: 15px;text-align: justify;">${response[i].description}</p>
      <p class="row">${(response[i].price/100).toFixed(2).replace(".",",")}€</p>
      <a class="row" href="./produit.html?${response[i]._id}" style= "background-color:#f3e9f1; box-shadow: 0px 0px 15px 0px black; margin:auto; width:100px; border-radius:15px; padding:10px;top: 20px;position: relative;"><b>Voir l'article</b></a></li>`}
     // Ajouter mes éléments créer dans le HTML pour afficher mes produits
    document.getElementById("teddy").innerHTML = html
})

// Message d'erreur
.catch(e => {
  errorMessage();
});