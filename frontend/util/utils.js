export const isAlphaNumeric = (username) => {

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
