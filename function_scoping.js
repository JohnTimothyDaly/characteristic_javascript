(function() {
  var foo;

  var callMap = {
    "foo": foo,
    "bar": bar,
    "buz": buz
  };

  var call = function(func) {
    console.log('callMap is');
    console.log(callMap);

    callMap[search]();
  };

  var foo = function() {
    console.log('this is foo');
  };

  var bar = function() {
    console.log('this is bar');
  }

  function buz() {
    console.log('this is buz');
  }

  window.TestObj = {
    call: call
  };
})();

try {
  TestObj.call('foo');
} catch(e) {
  console.log("can't call foo");
  console.log(e);
}

try {
  TestObj.call('bar');
} catch(e) {
  console.log("can't call bar");
  console.log(e);
}

try {
  TestObj.call('buz');
} catch(e) {
  console.log("can't call buz");
  console.log(e);
}
