let modifyString="";
let string=process.argv[2];
for(let index=0;index<string.length;index++){
  let character=string[index];
  if(character == " "){
    character="";
  }
  modifyString = modifyString + character;
}
console.log(modifyString);
