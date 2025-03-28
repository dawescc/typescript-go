//// [tests/cases/compiler/nonExportedElementsOfMergedModules.ts] ////

//// [nonExportedElementsOfMergedModules.ts]
module One {
    enum A { X }
    module B {
        export var x;
    }
}

module One {
    enum A { Y }
    module B {
        export var y;
    }
    B.x;
    B.y;
}


//// [nonExportedElementsOfMergedModules.js]
var One;
(function (One) {
    let A;
    (function (A) {
        A[A["X"] = 0] = "X";
    })(A || (A = {}));
    let B;
    (function (B) {
    })(B || (B = {}));
})(One || (One = {}));
(function (One) {
    let A;
    (function (A) {
        A[A["Y"] = 0] = "Y";
    })(A || (A = {}));
    let B;
    (function (B) {
    })(B || (B = {}));
    B.x;
    B.y;
})(One || (One = {}));
