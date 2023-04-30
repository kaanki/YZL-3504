//then ve catch kullanmaya gerek kalmadan bekler
async function getProducts(){
    const response = await fetch ("https://64318e0ad4518cfb0e641c45.mockapi.io/Products/");
    const data= await response.json();
    console.log(data);
}
getProducts()