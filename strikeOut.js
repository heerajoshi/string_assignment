let outputString="";
let string = process.argv[2];
let select = process.argv[3];
let addingChar = "";
let dash = "-";

for(index=0;index < string.length;index++){
  addingchar = string[index];
  if(string[index] == select){
    addingchar = dash;
  }
  outputString = outputString + addingchar;
}
console.log(outputString);
