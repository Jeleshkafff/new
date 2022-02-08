let arr = [4,1,6,2,8,9,-45,73,43,-5,78,94,25,-4,3];
let newArr = [];
    
for (let i = 0; i < arr.length; i++) {
      if (isNumberInRange(arr[i])) {
        newArr.push(arr[i])
        console.log("true")}
    else{
        console.log("false");
    }
}
console.log(newArr);
function isNumberInRange (num) {
      return num > 0 && num <= 10;
    }