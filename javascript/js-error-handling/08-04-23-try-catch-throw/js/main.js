try{
    let asd = dfg;
}catch(err){
    console.log(err.message);
}


console.log("hello");



function greet( userName ){
    if(typeof userName !== "string"){
        throw new Error("greet fonksiyonu sadece string ile çalışır")
    }
    console.log(`${userName} selam`)

}

try{
    greet(3);
}catch(err){
    console.log(err.message);
}


function toplama(a, b){
    if( typeof a !== "number" || typeof b !== "number" ){
        //console.log("number ile çalışır")
        throw new Error("toplama fonksiyonu sadece sayılarla çalışır");
    }
    const sonuc = a + b;
    return sonuc;
}


try{
    toplama("Burak", 5);
}catch(err){
    console.log(err.message)
}
