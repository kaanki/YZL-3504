//dış kaynaklardan data çekmeye yarayan bir yapı

//JSON string yazıyoruz
//js objesi yazımından tek farkı isim kısmınıda tırnak içine alıyoruz.
//JSON : bilgisayarlar arası data gönderebilmek için dilden bağımsız kullanılan bir yapı.

const objectStr = [
    {name:"fatma"}
]

const jsonStr = '[{"name:"fatma"}]';


//conver a js object to json string (kendi objemizi jsona çevirmek için)
const user = {userName:"fatma"};
JSON.stringify(user);

//fetch kullanarak data alıcaz ve then ile alıp alamadığımıza bakıcaz.
//mockApı den yaptığımız Products datasını çekiyoruz


//get data via fetch
/*

fetch("https://64318e0ad4518cfb0e641c45.mockapi.io/Products")
.then ((response)=>{
    return response.json();
})
.then((data)=>{console.log(data)})
.catch ((err)=>{
    console.log (err);
})*/

//get data via fetch
/*
fetch("https://64318e0ad4518cfb0e641c45.mockapi.io/citys")
.then ((response)=>{
    return response.json();
})
.then((data)=>{console.log(data)})
.catch ((err)=>{
    console.log (err);
})*/

//deleting data via fetch 

/*
fetch("https://64318e0ad4518cfb0e641c45.mockapi.io/citys", {
    method:"DELETE",
    headers: {"Content-Type":"application/json"}
})
.then ((response)=>{console.log(response)})
.catch ((err)=>{console.log (err)})

*/
const btnFormEl = document.getElementById("btnDelete");
const inputFetchDelEl = document.getElementById("cityId");


btnFormEl.addEventListener ("click", handleDelete);

function handleDelete (e){
    e.preventDefault ();

    //şehir id'sini al
    const cityId = inputFetchDelEl.value ;
    const apiUrl ="https://64318e0ad4518cfb0e641c45.mockapi.io/citys/" + cityId;


    fetch(apiUrl , {
        method:"DELETE",
        headers: {"Content-Type":"application/json"}
    })
    .then ((response)=>{
        const messageRl = document.getElementById("cityMessage");

        messageRl.textContent = `${cityId} ID'li şehir silindi.`
    })
    .catch ((err)=>{console.log (err)})  
}


//Example adding new data

const inpProductNameEl  = document.getElementById("inpProductName");

const inpProductCategoryEl = document.getElementById ("inpProductCategory");

const inpProductPriceEl = document.getElementById ("inpProductPrice");

const btnFrmAddProduct =document.querySelector("#frmAddProduct button");
 
//form submit butonunu yakala olay dinleyicisi ekle

btnFrmAddProduct.addEventListener ("click" ,handleAddProduct);

function handleAddProduct (e) {
    e.preventDefault ();
    //input değerlerini al
  
    const productName = inpProductNameEl.value ;
    const productCategory = inpProductCategoryEl.value ;
    const productPrice = inpProductPriceEl.value ;
    //obje yapıyoruz
    const  productObj ={ name:productName , category :productCategory,price:productPrice}
    //api url oluştur

    const apiUrl2 = "https://64318e0ad4518cfb0e641c45.mockapi.io/Products/";

    //api ye bağlan 
    
    fetch (apiUrl2, {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        //ekleme yaptığımız için bodyi kullanıyoruz
        body : /* json string */ JSON.stringify(productObj)
    })
    .then ((response)=>{ clearFields ("frmAddProduct")})
    .catch ((err)=>{console.log (err)})  



}

function clearFields (frmId){

    const frm = document.getElementById(frmId);
    const inputFields = frm.querySelectorAll("input") ;
    
    inputFields.forEach ((input)=> {
        input.value ="";
    })

}




//updating Data using "PUT" method

fetch("https://64318e0ad4518cfb0e641c45.mockapi.io/Products/11" , {

method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({name:"Nike Jordan T-shirt" , category:"T-shirt", price:800})
})
