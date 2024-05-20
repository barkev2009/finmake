const encryptDecrypt = (inpString) => 
{ 
    inpString = inpString.split(""); 
  
    // Define XOR key 
    // Any character value will work 
    let xorKey = process.env.XORER; 
  
    // calculate length of input string 
    let len = inpString.length; 
  
    // perform XOR operation of key 
    // with every character in string 
    for (let i = 0; i < len; i++) 
    { 
        inpString[i] = (String.fromCharCode((inpString[i].charCodeAt(0)) ^ xorKey.charCodeAt(0)));
    } 
    return inpString.join(""); 
} 
module.exports = {encryptDecrypt};