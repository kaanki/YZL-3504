//hata döndürme olma olasılığı yüksek olan kodu try ve catch bloğu içine alınır ve bir tane metoda hata gönderilir.
try {
    let asd =dfg
}catch(err){
    console.log(err.message);
}

console.log ("hello");

//kendimizde hata döndürebiliyoruz
function greet (userName){

    if (typeof userName !== "string") {
       throw new Error("greet fonlsiyonu sadece string ile çalışır")
    }
    console.log (`${userName} selam`)
}


try {
    greet(3);
}catch(err){
    console.log (err.message)
}


function toplama (a,b) {

    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error ("toplama fonksiyonu sadece numberlar ile çalışır")
    }

    const sonuc= a+b ;
    return sonuc
}

try {
  toplama(3, "b");
}catch(err){
    console.log (err.message)
}

