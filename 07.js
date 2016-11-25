var arr = [1,2,3];

var arr1 = [0,1,2];

arr.forEach(function(val,index,arrnow){
  this[index] = val * 2 ;
  arrnow[index] = val * 3 ;
},arr1);

console.log(arr);

console.log(arr1);
