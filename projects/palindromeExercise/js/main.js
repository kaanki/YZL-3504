
/*
function isPalindrome(word) {
    // Stringi ters çeviriyoruz
    const reverseWord = word.split("").reverse().join("");
    // Ters çevrilmiş string ile orijinal stringi karşılaştırıyoruz
    if (word === reverseWord) {
      return true;
    } else {
      return false;
    }
  }
 
  
  console.log(isPalindrome("küllük")); // true
 */

  //küllük, deneme, asd

  function isPalindrome( word ){
    
    //string to array
    const strArr = word.split("").reverse();
    const reversedStr = strArr.join("");
    console.log(reversedStr);
    //array to string
    return reversedStr === word;
  }

  console.log(isPalindrome("deneme"));
  console.log(isPalindrome("ütü"));



  function _isPalindrome(str){

    str = str.toLowerCase();
    let left = 0
    let right = str.length - 1; 

    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }

        left ++;
        right --;
    }

    return true;

  }

console.log(_isPalindrome('Küllük'))
  //küllük