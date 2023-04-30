/* Functions are first class citizens in js ( fonksiyonlar js için birinci sınıf vatandaşlardır. ) */

const greet = function(){}; // js fonksiyonları değer (value ) olarak kullanılabilir.


function createButton(content){

    const newButton = document.createElement("button");

    newButton.textContent = content;

    return newButton;

}


/* --- Başka fonksiyonlara argüman olarak gönderilen fonksiyonlara callback fonksiyonları deriz. --- */

//document.body.append( createButton("Hello"));

const myNewButton =  createButton("Hello");

// myNewButton.addEventListener("click", function(){ alert("Test")} );


myNewButton.addEventListener("click", ()=>{ alert("Hello") } )

document.body.append( myNewButton );

setTimeout( ()=>{ console.log("Gelecekten merhaba") },  8000 );



function useCallbackFunc( callback ){


    callback();

}


function greet2(){
    alert("I am from the callback")
}

useCallbackFunc( greet2  );











