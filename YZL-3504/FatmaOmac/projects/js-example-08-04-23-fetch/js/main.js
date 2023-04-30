
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

/*
const btnFormEl = document.getElementById("btndelete");
const inputFetchDelEl = document.getElementById("cityId");


btnFormEl1.addEventListener ("click", handledelete);

function handledelete (){

    const cityId = inputFetchDelEl.value ;
   
    fetch(`https://64318e0ad4518cfb0e641c45.mockapi.io/citys ${cityId}` , {
        method:"DELETE",
        headers: {"Content-Type":"application/json"}
    })
    .then ((response)=>{console.log(response)})
    .catch ((err)=>{console.log (err)})
}

*/