/*

function isPalindrome(word) {
  //stringi ters çeviriyoruz
  const reverseWord = word.split("").reverse().join("");
  //ters çevirilmiş string ile orjinal stringi karşılaştırıyoruz
  if (word=== reverseWord){
    return true;
    
  }else {
    return false;
  }
}
console.log.apply(isPalindrome("küllük"));

*/

function isPalindrome (word){
  
 //stringi terse çeviremiyoruz ilk önce 
 //string to array
 //reverse array
 //array to string 
 const strArr=word.split("").reverse();
 const reversedStr = strArr.join("");
 console.log(reversedStr);
 
 return reversedStr===word;
 
}
console.log(isPalindrome("deneme"));
console.log(isPalindrome("ütü"));


function _isPalindrome(str){
  str =str.toLowerCase();
  let left =0
  let right = str.length -1 ;

  while(left < right) {
    if (str [left] !== str[right]) {
      return false ;
    }
    left ++;
    right--;
  }
  return true ;

}

console.log (_isPalindrome("küllük"))