//bir yerlerden data çekmek için asenkron kullanmak zorunda kalıyoruz.

//her şeyin sıra sıra olması senkronluğunu sembol ediyor js'in

/*
function f1 () {
    console.log ("f1")
}

function f2 () {
    console.log ("f2")
}

function f3 () {
    console.log ("f3")
}

f1();
f2();
f3();

//sıra ile hepsi geliyor ve işi biteni dışarı atıyoruz
*/


//iç içe fonksiyonlar

function f1(){
    //some code
}
function f2(){
    f1();
}
function f3 (){
    f2();
}
 
function main (){
    f3();
    console.log ("main")

}
//sıra ile yine geliyorlar ama bu sefer f3 ün işi bitmiyor ve yığın oluşuyor.



function asyncTest (){
    console.log("hello");

    setTimeout(()=>{console.log ("ben gelecekten geliyorum")}, 10000);

    console.log ("bye");
}

asyncTest()

