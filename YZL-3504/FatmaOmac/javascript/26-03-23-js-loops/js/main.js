/* for loop */


for( let i = 0; i<10; i++){


    console.log(i);

}

const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];

for(let day of days ){
    console.log(day);
}


for(let i = 0; i<days.length; i++){
    console.log( days[i] );
}


const colors = ["002B5B", "1A5F7A", "159895", "57C5B6", "000000", "262A56", "B8621B"];
const objects = ["ütü", "cep telefonu", "kalem", "tava", "kaşık", "çatal", "tabak", "ütü", "cep telefonu", "kalem", "tava", "kaşık", "çatal", "tabak"];

const containerObjectsEl = document.querySelector(".container-objects");

let k = 0;

for(let i = 0; i<objects.length; i++){

    const boxEl = document.createElement("div");
    boxEl.textContent = objects[i];
    boxEl.style.backgroundColor = "#" + colors[k];
    containerObjectsEl.append(boxEl);
   
    k = k + 1;

    if(k === colors.length ){
        k = 0;
    }

   
}

 


/* while */

let myCounter1 = 0;

while( myCounter1 < 10 ){
    myCounter1 = myCounter1 + 1;
    console.log(myCounter1)
}



/* do...while */

let myCounter2 = 0;

do{
    myCounter2 = myCounter2 + 1;
    console.log(myCounter2);
}while( myCounter2 < 10 );