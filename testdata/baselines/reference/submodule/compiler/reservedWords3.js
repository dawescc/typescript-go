//// [tests/cases/compiler/reservedWords3.ts] ////

//// [reservedWords3.ts]
function f1(enum) {}
function f2(class) {}
function f3(function) {}
function f4(while) {}
function f5(for) {}


//// [reservedWords3.js]
function f1() { }
var ;
(function () {
})( || ( = {}));
{ }
function f2() { }
class {
}
{ }
function f3() { }
function () { }
{ }
function f4() { }
while () { }
function f5() { }
for (;;) { }
