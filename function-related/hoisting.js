print = console.log;
// print = alert;

function before() { print("before"); }
before();

after();
function after() { print("after"); }

after_with_var();
var variable1 = 'value1';
after_with_var();
function after_with_var() {
    print("after_with_var" + " : " + variable1);
}
