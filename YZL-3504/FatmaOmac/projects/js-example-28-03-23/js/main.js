/* Aşağıda kendisine argüman olarak yolladığmız
bir sayı dizisinden çift sayıları ayıklayıp
yeni bir diziye ekleyen sonra da bu 
diziyi döndüren bir fonksiyon görüyorsunuz.
Bu fonksiyona extra bir parametre ekleyerek ve fonksiyon statement bloğu kısmında koşullu ifade kullanarak, istediğimiz zaman tek sayıları istediğimiz zaman çift sayıları ayıklayabilecek hale getiriniz.

Örnek ->  

myFilterFunction( [1,2,4,7,8], 'filterOdd') olarak çağırırsak [1,7] sonucunu vermeli.

Örnek ->  

myFilterFunction( [1,2,4,7,8], 'filterEven') olarak çağırırsak [2,4,8] sonucunu vermeli.

*/

function myFilterFunction( inArr , filterType ){
    //döndüreceğin dizi
    const outArr = []
    
    for(let i = 0; i < inArr.length; i++){
      
      //dizideki elemanın çift sayı olduğunu
      //kontrol et
      

      if (filterType==="filterOdd") {

        if( inArr[i] % 2 !== 0 ){
            
            outArr.push( inArr[i] )
          }

      }else if ( filterType==="filterEven") {
        if( inArr[i] % 2 === 0 ){
            //çift sayı ise dışarı atacağın
            //diziye ekle
            outArr.push( inArr[i] )
          }
      }

     
      
    }
    
    return outArr;
  }
  
  
  const odds =myFilterFunction( [1,5,6,8] , "filterOdd" );

  const evens = myFilterFunction( [1,5,6,8] , "filterEven" );

  console.log (odds);
  console.log (evens);





//callback ile

  function myFilterFunction2 (inArr , testFunc){
  
    const outputArr = [];

    for (let i=0 ; i< inArr.length; i++){

        if (testFunc ( inArr[i])) {

            outputArr.push (inArr[i]);
        }
    }

    return outputArr;

  }

   const test1 = myFilterFunction2 ([1,2,3,4,5,6,7,8] , (num)=>{
    
    if (num %2 === 0){
        return true;
    }

  })

  const test2 = myFilterFunction2 ([1,2,3,4,5,6,7,8] , (num)=>{
    
    if (num<5){
        return true;
    }

  })


  console.log (test1)
  console.log (test2);

 

  







