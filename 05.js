var arr = [1,2,3];

var re_arr = arr.map(function(x){return x * 2;});

console.log(arr);

console.log(re_arr);

Array.prototype.map = function(fn,thisarg){
  
  var len = this.length;

  if(typeof fn !== "function"){
    throw new Error("fn is function!");
  }

  var  res = [];
  var  obj = argument[1];

  for(var i = 0 ; i < len ; i++){
    res[i] = fn.call(obj,this[i],i,this);
  }

  return res;

};
