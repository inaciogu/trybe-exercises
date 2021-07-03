function verificaPalindrome(str) {
    let reverse = str.split('').reverse().join(''); //str.split('') transforma o string em array.
    if (reverse === str) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(verificaPalindrome('arara'));
  console.log(verificaPalindrome('desenvolvimento'));