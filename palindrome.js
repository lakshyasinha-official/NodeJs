function isPalindrome(str) {
    str = str.toUpperCase();
    for(let i= 0, j  =str.length  -1; i<str.length && j>=i;i++,j--){
        if(str[i]!=str[j]) return false;
    }
    return true
  }
  
module.exports = isPalindrome;