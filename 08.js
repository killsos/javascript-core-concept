var adder = function(x){
  return function(y){
    return x + y;
  };
};

var inc = adder(1);

var dec = adder(-1);

console.log(inc(100));

console.log(dec(100));
