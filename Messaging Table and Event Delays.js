var func = function(num) {
  var innerFunc = function(){
    console.log(num);
  }
  return innerFunc;
}

for (var i = 0; i < 5; i++) {
  setTimeout (func(i), 5000 - i * 1000);
}

innerFunc //num in this invocation will be i = 1
innerFunc //num in this invocation will be i = 2 

(function() {

  console.log('this is the start');

  setTimeout(function cb() {
    console.log('this is a msg from call back');
  }, 1000);

  console.log('this is just a message');

  setTimeout(function cb1() {
    console.log('this is a msg from call back1');
  }, 0);

  console.log('this is the end');

})();