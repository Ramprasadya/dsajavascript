// First Approach
let str = "Hello dosto";

// make a empty object to achive the value 
let obj = {};

// run a for loop to go throught every char and add it in object 
for(let i=0;i<str.length;i++){
    let char = str[i].toLocaleLowerCase()
    if(obj[char] > 0){
       obj[char]++;
    }else{
        obj[char] = 1;
    }
}
//check if char value is not 1 the set it to default increae 1
// at the end return the object 

// testing 
let n= [12,23,4,5,2,3,4,5,4,3,4,5,4,3]
let object = {};

for(let i=0;i<n.length;i++){
    let num = n[i]
  if(object[num]>0){
    object[num]++
  }else{
    object[num] = 1
  }
}

// Second and better approach  ------ Refactor 
function printStr(str){
    let obj = {};
    for(var char of str){
      char = char.toLocaleLowerCase()
      if(/[a-z0-9]/.test(char)){
        obj[char] = ++obj[char] || 1;
      }
    }
   console.log(obj)
}

printStr("Hello world23")