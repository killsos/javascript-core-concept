var str = "1";

var obj = {
  str : 2
}

function print(){
  var str = 3;
  console.log(this.str);
  console.log(str);
}

print.call(obj);
// 2
// 1/3
