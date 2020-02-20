module.exports = function toReadable (number) {
    let str="", arr=[];
    if(number==0) return "zero";
    while(number>=1){
        arr.unshift(number%10);
        number=Math.floor(number/10);
    }
    if(arr.length==3){
      str+=digital(arr[0]);
      str+=" hundred ";
      if(arr[1]==1) str+=ten(arr[2]);
      else {
          str+=dozen(arr[1]);
          str+=digital(arr[2]);
      } 
    }
    if(arr.length==2){
      if(arr[0]==1) str+=ten(arr[1]);
      else {
          str+=dozen(arr[0]);
          str+=digital(arr[1]);
      } 
    }
    if(arr.length==1){
      arr[0]==0?str+="zero": str+=digital(arr[0]);
    }
    return str.replace(/\s$/,'');
}
function digital(dig){
    switch(dig){
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        case 6: return "six";
        case 7: return "seven";
        case 8: return "eight";
        case 9: return "nine";
        case 0: return "";
    }
}
function ten(dig){
    switch(dig){
        case 1: return "eleven";
        case 2: return "twelve";
        case 3: return "thirteen";
        case 4: return "fourteen";
        case 5: return "fifteen";
        case 6: return "sixteen";
        case 7: return "seventeen";
        case 8: return "eighteen";
        case 9: return "nineteen";
        case 0: return "ten";

    }
}
function dozen(dig){
    switch(dig){
        case 2: return "twenty ";
        case 3: return "thirty ";
        case 4: return "forty ";
        case 5: return "fifty ";
        case 6: return "sixty ";
        case 7: return "seventy ";
        case 8: return "eighty ";
        case 9: return "ninety ";
        case 0: return "";
    }
}
// let str="",remainder, arr=[], number =0;
//   if(number==0) return "zero"
//   while(number>=1){
//       arr.unshift(number%10);
//       number=Math.floor(number/10);
//   }
//   if(arr.length==3){
//     str+=digital(arr[0]);
//     str+=" hundred ";
//     if(arr[1]==1) str+=ten(arr[2]);
//     else {
//         str+=dozen(arr[1]);
//         str+=digital(arr[2]);
//     } 
//   }
//   if(arr.length==2){
//     if(arr[0]==1) str+=ten(arr[1]);
//     else {
//         str+=dozen(arr[0]);
//         str+=digital(arr[1]);
//     } 
//   }
//   if(arr.length==1){
//     typeof arr[0]==="undefined" ?str+="zero": str+=digital(arr[0]);
//   }
//   //str=str.replace(/\s$/,'');
//   console.log(typeof arr[0]);
//   console.log(str);
