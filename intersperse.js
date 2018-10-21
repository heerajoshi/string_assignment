let string=process.argv[2];
let separator=""
let outputString="";
for(index=0;index<string.length;index++){
  outputString=outputString+separator+string[index]
  separator=","
}
console.log(outputString);

