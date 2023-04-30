async function getProducts(){
  const response = await fetch("https://638a06e04eccb986e8a1804b.mockapi.io/products");

  const data = await response.json();
  

  //asenkron fonksiyonlar mutlaka promise döndürür
}

getProducts();


/*

function _getProducts(){
  fetch("https://638a06e04eccb986e8a1804b.mockapi.io/products" )
  .then( ( response  )=>{ return response.json() })
  .then( (data)=>{ console.log(data) })

}

*/