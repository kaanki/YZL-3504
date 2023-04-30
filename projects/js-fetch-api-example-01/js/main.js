const btnFetchEl = document.getElementById("btn-fetch");
const listEl = document.getElementById("cities");

btnFetchEl.addEventListener( "click", handleFetch);

function handleFetch(){

  fetch("https://64318e0a3adb1596516f1b2e.mockapi.io/Citys")
  .then((response)=>{ return response.json() } )
  .then( (data)=>{   createCityElements(data)  } )
  .catch( (err)=>{ console.log(err) } )

}

function createCityElements(data){
  data.forEach( (city)=>{

    const titleEl = document.createElement("li");
    titleEl.textContent = city.name;

    listEl.append(titleEl);

  } );
}



