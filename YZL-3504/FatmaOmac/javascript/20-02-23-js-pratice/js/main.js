//---------KOŞUL YAPILARI---------

/*
let not = prompt("notunuzu giriniz")

if(not>50) {
    console.log ("Geçtiniz, notunuz: " + not);

}

else {
    console.log ("Kaldınız, notunuz :" + not);
}
*/

//----EHLİYET SINAVINA GİRME ÖRNEĞİ-------

/*
let age= Number(prompt("Yaşınızı Gİriniz"));
let money= Number(prompt("Para miktarınızı giriniz"));

if (age>=18 && money>=3000) {
    console.log("Ehliyet alabilirsiniz");
}
else {
    console.log("Ehliyet alamazsınız")
}

*/

//------ggVİZE VE FİNAL ORTALAMASI ALMA
//vize1 %30   vize2 %30   final%40

 
/*
let vize1 = Number(prompt("Vize puanınızı giriniz"));
let vize2=Number(prompt("İkinci vize notunuzu giriniz"));
let final=Number(prompt("Final notunuzu giriniz"));

let ortalama = (((vize1*30)/100) + ((vize2*30)/100) + ((final*40)/100));

if (ortalama>=60){
    console.log("Tebrikler , dersten geçtiniz" + " " + "ortalamanız:" + ortalama);

}
else {
    console.log ("Kaldınız");
}
*/




//İF İÇİNDE İF KULLANARAK KULLANICIDAN İSİM VE TC NUMARASI ALMA

/*

let firstname = prompt("İsminizi giriniz");
let idNo= prompt("Tc kimlik numaranızı giriniz");

function check (firstname,isNo) {
  if (firstname!==""){
    console.log ("İsminiz:" + " " + firstname )
     if (idNo.length==11){
    console.log("Tc kimlik numaranız:" + " " + idNo)
     } 
     else {
        console.log ("Lütfen Tc kimlik numaranızı 11 hane olarak giriniz!!");
     }

  }
   else {
    console.log ( "Lütfen isim alanını boş bırakmayınız!!");
   }


}
check(firstname,idNo);
*/

// BEDEN KİTLE ENDEKSİ UYGULAMASI 
/*

let kilo = Number(prompt("kilonuzu giriniz"));
let boy = Number(prompt("boyunuzu metre cinsinden giriniz"));
let sonuc = kilo/(boy*2);



if (sonuc<18.5){
    console.log ("ideal kilonun altında");
}
else if (sonuc>=18.5 && sonuc<=24,9) {
  console.log ("ideal kilonun altında");
}
else if ( sonuc>=25 && sonuc <=29.9) {
    console.log ("ideal kiloda");
}
else if (sonuc>=30 && sonuc<=39.9) {
    console.log ("ideal kilonun çok üstünde");
}
else if (sonuc >= 40 ); {
    console.log ("ideal kilonun çok çok üstünde");
}
*/


// TÜR DÖNÜŞÜMLERİ 

/* string,numbers, booleans,undefined, null 
 object, function


let a =5;
let b ="10";

*/
//b değeri string olduğu için toplama işlemini yapamayız
//string veri tipinden number tipine dönüştürmek


 //FOR DÖNGÜSÜ 
 /*
 for ( let i=1; i<=10; i++){
    console.log (i);
 }
*/
 for (i=0 ; i<=10 ; i=1+2){
    console.log (i);
 }