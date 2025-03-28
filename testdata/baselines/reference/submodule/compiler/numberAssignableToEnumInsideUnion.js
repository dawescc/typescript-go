//// [tests/cases/compiler/numberAssignableToEnumInsideUnion.ts] ////

//// [numberAssignableToEnumInsideUnion.ts]
enum E { A, B }
let n: number;
let z: E | boolean = n;


//// [numberAssignableToEnumInsideUnion.js]
var E;
(function (E) {
    E[E["A"] = 0] = "A";
    E[E["B"] = 1] = "B";
})(E || (E = {}));
let n;
let z = n;
