// Exercice 2

// Fonction pour générer un produit avec un id spécifié
function generateProduct(id) {
  $.ajax({
    url: `https://dummyjson.com/products/${id}`,
    method: 'GET',
    success: function (result) {
      const productTemplate = $('.product-template').clone().removeClass('product-template').addClass(`product-${id}`);
      $('body').append(productTemplate);

      const productData = result;

      productTemplate.find('.img').attr('src', productData.image).attr('alt', productData.name);
      productTemplate.find('.title').text(productData.name);
      productTemplate.find('.brand').text(`(${productData.brand})`);
      productTemplate.find('.price').text(`${productData.price} €`);
      productTemplate.find('.old-price').text(`${productData.price * 1.2} €`);
      productTemplate.find('.stock').text(`${productData.stock} en stock`);
    },
    error: function (xhr, status, error) {
      console.log(`Error fetching product ${id}: `, xhr.responseText);
    }
  });
}


// Générez les 3 premiers produits
for (let i = 1; i <= 3; i++) {
  generateProduct(i);
}

// Gestion de l'événement de clic sur le bouton "Générer"
$('#product-generation').on('click', function () {
  const existingProductsCount = $('div[class^="product-"]').length;
  if (existingProductsCount >= 100) {
    $(this).prop('disabled', true);
    return;
  }

  let newProductId;
  do {
    newProductId = Math.floor(Math.random() * 100) + 1;
  } while ($(`.product-${newProductId}`).length > 0);

  generateProduct(newProductId);

  // Si le nombre de produits générés atteint 100, désactive le bouton "Générer"
  if ($('div[class^="product-"]').length >= 100) {
    $('#product-generation').prop('disabled', true);
  }
});
