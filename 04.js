var outter = function(){
  var x = 0;
  return function(){
    return x++;
  };
};

var a = outter();

console.log(a());   // 0

console.log(a());   // 1

var b = outter();

console.log(b());   // 0

console.log(b());   // 1

/**
 * 变量a通过闭包引用outter的一个内部变量
 * 每次调用a就会改变内部变量
 *
 * 变量b也引用了outter但是这是一个不同的闭包
 * 所以b开始引用x值不会随着a()被调用而改变
 * 两者有不同的实例
 * 这就相当于面向对象中的不同实例
 */
