export const isAlphaNumeric = (username) => {

  //I use ASCII code to determine if any particular character is alphanumeric, which would
  //mean its ASCII code would lie in any one of three number ranges according to the ASCII table
  function isNumeric(letter){
    if(letter.charCodeAt(0) > 47 && letter.charCodeAt(0) < 58) return true;
    return false;
  }

  function isUpperCase(letter){
    if(letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91) return true;
    return false;
  }

  function isLowerCase(letter){
    if(letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123) return true;
    return false;
  }

  for(let i = 0; i < username.length; i++){
    let letter = username[i]
    if(!isNumeric(letter) && !isLowerCase(letter) && !isUpperCase(letter)) return false;
  }
  return true;
};
