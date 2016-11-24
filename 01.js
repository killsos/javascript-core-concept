var str = "global";

function scopeTest(){
  console.log(str);
  var str = "local";
  console.log(str);
}

scopeTest();

// undefined

// local

/**
 * 原因：
 * 在词法分析结束后,构造作用域链的时候,会将函数内var定义的变量放入该链
 * 因为变量str在整个函数scopeTest内都是可见的
 * 
 */
