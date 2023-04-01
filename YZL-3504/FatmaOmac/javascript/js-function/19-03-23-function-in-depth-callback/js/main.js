
/*  Function are first class ctizens in js (fonksiyonlar js için birinci sınıf vatandaşlardır) */

const greet = function (){}; // js fonksiyonları değer (value) olarak kullanılabilir.

// html de yazmadan js de button ekleme 

function createButton (content){

    const newButton = document.createElement("button");
    newButton.textContent =content;
    return newButton;

}


/*  --Başka fonksiyonlara argüman olarak gönderilen fonksiyonlara callback fonksiyonları deriz.-- */


//document.body.append (createButton ("Hello")); // olay dinleyici ekleyemeyiz ve bir kez seslenebiliri.



const myNewButton = createButton ("Hello");
document.body.append (myNewButton);

/*myNewButton.addEventListener("click" , handleClick);   // function statement
function handleClick(){
    alert ("Test")
}
*/

// myNewButton.addEventListener("click" , function () {alert ("Test")});  // Anonmy olarak yazdık
myNewButton.addEventListener("click" , ()=> {alert("deneme")}) // Arrow olarak yazdık



/* Örnek  */

setTimeout ( ()=> { console.log ("Gelecekten Selam")} , 3000 ) // 3 saniye sonra çalışacak - js kuyruğa alıyor ve sonrasında çalıştırıyor bu callbacktir.


/* Örnek */

function useCallBackFunc ( callback) {

    callback();
}

function greet2 () {
    
    alert ("I am from the callback")

}

useCallBackFunc(greet2)