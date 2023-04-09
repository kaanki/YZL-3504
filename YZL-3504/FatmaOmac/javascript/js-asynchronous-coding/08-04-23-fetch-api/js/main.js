//dış kaynaklardan data çekmeye yarayan bir yapı

//JSON string yazıyoruz
//js objesi yazımından tek farkı isim kısmınıda tırnak içine alıyoruz.
//JSON : bilgisayarlar arası data gönderebilmek için dilden bağımsız kullanılan bir yapı.

const objectStr = [
    {name:"fatma"}
]

const jsonStr = '[{"name:"fatma"}]';

//fetch kullanarak data alıcaz ve then ile alıp alamadığımıza bakıcaz.
//mockApı den yaptığımız Products datasını çekiyoruz


/*

fetch("https://64318e0ad4518cfb0e641c45.mockapi.io/Products")
.then ((response)=>{
    return response.json();
})
.then((data)=>{console.log(data)})
.catch ((err)=>{
    console.log (err);
})



fetch("https://64318e0ad4518cfb0e641c45.mockapi.io/citys")
.then ((response)=>{
    return response.json();
})
.then((data)=>{console.log(data)})
.catch ((err)=>{
    console.log (err);
})


*/

const btnFetchEl = document.getElementById("btn-fetch");
const listEl = document.getElementById("citys");

btnFetchEl.addEventListener("click" , handleFetch);

function handleFetch() {

    fetch("https://64318e0ad4518cfb0e641c45.mockapi.io/citys")

    .then ((response)=>{ return response.json()})

    .then((data)=>{createCityElements(data)})
    
    .catch ((err)=>{console.log (err)})
}

function createCityElements (data){
  
    data.forEach((city) => {
        const titleEl = document.createElement ("li");
        titleEl.textContent = city.name;

        listEl.append (titleEl);
    });
}