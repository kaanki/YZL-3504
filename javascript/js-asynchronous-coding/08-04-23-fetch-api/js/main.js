
//GET, DELETE, POST, PUT


const jsonStr = ' [ {"name":"Burak"}  ] ';

//JSON Javascript object notation

const user = { userName:"Burak "}; 

//convert a js object to json string
JSON.stringify(user);

const userJsonStr = '{ "userName":"Burak" }';

//get data via fetch

fetch("https://64318e103adb1596516f1b85.mockapi.io/products")
.then( (response)=>{
  return response.json()
} )
.then( (data)=>{console.log(data)} )
.catch( (err)=>{ console.log(err)} )



//get data get data via fetch

/*
fetch("https://64318e0a3adb1596516f1b2e.mockapi.io/Citys")
.then( (response)=>{
  return response.json()
} )
.then( (data)=>{console.log(data)} )
.catch( (err)=>{ console.log(err)} )
*/


//deleting data via fetch
/*

fetch("https://64318e0a3adb1596516f1b2e.mockapi.io/Citys/1", { 
  method:"DELETE",
  headers:{"Content-Type":"application/json"}
 } )
 .then( (response)=>{ console.log(response)}  )
 .catch( (err)=>{ console.log(err) } )
 
 */


//Updating Data using "PUT" method
fetch("https://638a06e04eccb986e8a1804b.mockapi.io/products/11", { 
  method:"PUT",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify( {name:"Nike Jordan T-shirt", category:"tişört", price:800 } )
}  )





 //form butonu al

 const btnDeleteCity = document.getElementById("btnDeleteCity");
 const inputCityId = document.getElementById("cityId");


 btnDeleteCity.addEventListener("click", handleDeleteCity);


 function handleDeleteCity(e){
   e.preventDefault();
    //şehir id'sini al
    const cityId = inputCityId.value;
    const apiUrl = "https://638a06e04eccb986e8a1804b.mockapi.io/works/" + cityId;
    
    fetch( apiUrl, {  
      method:"DELETE",
      headers:{"Content-Type":"application/json"}
    } )
    .then( (response)=>{ 

        const messageEl = document.getElementById("cityMessage");

        messageEl.textContent = `${cityId}'li şehir silindi.`

     } )
    .catch( (err)=>{console.log(err) } )
 }


 // Example adding new data 

 const inpProductNameEl = document.querySelector("#inpProductName");

 const inpProductPriceEl = document.getElementById("inpProductPrice");

 const inpProductCategoryEl = document.getElementById("inpProductCategory");


 const btnFrmAddProduct = document.querySelector("#frmAddProduct button");

 //form submit butonu yakala olay dinleyicisi ekle



 btnFrmAddProduct.addEventListener("click", handleAddProduct);

 function handleAddProduct(e){
    e.preventDefault();
   //input değerlerini al
   const productName = inpProductNameEl.value;
   const productCategory = inpProductCategoryEl.value;
   const productPrice = inpProductPriceEl.value;
   const productObj = {name:productName, category:productCategory, price:productPrice }
  //api url oluştur
  const apiUrl = "https://638a06e04eccb986e8a1804b.mockapi.io/products/";
   //api ye bağlan
   fetch( apiUrl, {
     method:"POST",
     headers:{"Content-Type":"application/json"},
     body:JSON.stringify(productObj)
   })
   .then( (response)=>{ clearFields("frmAddProduct"); } )
   .catch(  (err)=>{ console.log(err) }    );


 }


 function clearFields(frmId){
  const frm = document.getElementById(frmId);
  const inputFields = frm.querySelectorAll("input");
  
  inputFields.forEach( (input)=>{
    input.value = "";
  }  )

 }




