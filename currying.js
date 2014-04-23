function curryFoo(x) {
  return function(y) {
    return foo(x, y);
  }
}

function foo(x, y) {
  return function() {
    console.log("x => " + x + ", y => " + y);
  }
}

var myCurry = curryFoo('42');

var x = [1, 2, 3].map(myCurry);

x.forEach(function(fun) {
  fun();
});
