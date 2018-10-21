let sameLetter="";
let string=process.argv[2];
for(index=0;index<string.length;index++){
  if(string[index] == string[index+1]){
    sameLetter = sameLetter + string[index] + string[index] +","
  }
}
console.log(sameLetter);
