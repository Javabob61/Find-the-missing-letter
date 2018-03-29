
function fearNotLetter(str) {
  
  var myAns;
  
  for (var i = 0; i < str.length - 1; i++) {  // testing one before the end. Only interested in last 2 characters..
       
    if (str.charCodeAt(i+1) - str.charCodeAt(i) !== 1) { // Subtracting unicode values...
      
      myAns = String.fromCharCode(str.charCodeAt(i) + 1); // if not sequential myAns = next char value.
      break;
      
    } // If loop exits before setting myAns, myAns is undefined.

  } 
  
  console.log(myAns);
  return myAns;
}

fearNotLetter("abce");