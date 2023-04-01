/*
const btnEl1 = document.querySelector ("button:first-child")
console.log(btnEl1);

const btnEl2 = document.querySelector ("button:nth-child(2)")
console.log(btnEl2);

const btnEl3 = document.querySelector ("button:nth-child(3)")
console.log(btnEl3);

//data-index in içindeki 1 i almak için


btnEl1.addEventListener("click", handleBtn1Click);

function handleBtn1Click(e){
   const target =e.target;

   const index = target.dataset.index;
    
   const color=target.dataset.color;

   const name = target.dataset.name;

   alert("Ben" +" "+ index)
  

}
btnEl2.addEventListener("click", handleBtn2Click);

function handleBtn2Click(e){
   const target =e.target;

   const index = target.dataset.index;

   alert ("Ben" +" "+ index);
  

}
btnEl3.addEventListener("click", handleBtn3Click);

function handleBtn3Click(e){
   const target =e.target;

   const index = target.dataset.index;

   alert ("Ben" + " " + index);
  

}
*/

// Event Delegation
/* yukarıdaki gibi tek tek çağırmaktansa ebeveynden seslenmek için event delegation kullanırız */


/*

const navEl = document.querySelector("nav");

navEl.addEventListener("click", handleBtnClick);

function handleBtnClick(e){
    const target = e.target
    const index=target.dataset.index;
    alert (index);
}
*/

//tıkladığında css de yazdığımız rengi aktif hale getiriyor.
/*
const navEl = document.querySelector("nav");

navEl.addEventListener("click", handleBtnClick);

function handleBtnClick(e){
    const target = e.target
    const index=target.dataset.index;
    
    target.classList.add("active");
}*/

//hangisini tıklarsak onun kırmızı olmasını istiyorsak 

const navEl = document.querySelector("nav");

navEl.addEventListener("click", handleBtnClick);

function handleBtnClick(e){
    const target = e.target
    const index=target.dataset.index;
    const currentlyActiveBtn= document.querySelector("nav button.active");
    
console.log (currentlyActiveBtn)

    if (currentlyActiveBtn){
        currentlyActiveBtn.classList.remove("active");
    }

    
    target.classList.add("active");
}

