const containerEl = document.querySelector(".container");



for( let i=0; i<100; i++ ){


    //create div el
    const shapeEl = document.createElement("div");


    shapeEl.style.width="30px";
    shapeEl.style.height="30px";
    shapeEl.style.backgroundColor="red";
    shapeEl.style.border="1px solid black";
    
   if( i % 2 !== 0 ){
    shapeEl.style.borderRadius = "50%";
   }else{
    shapeEl.style.backgroundColor="blue";
   }



    containerEl.append(shapeEl)

}