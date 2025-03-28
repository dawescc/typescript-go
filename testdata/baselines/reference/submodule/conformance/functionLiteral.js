//// [tests/cases/conformance/types/specifyingTypes/typeLiterals/functionLiteral.ts] ////

//// [functionLiteral.ts]
// basic valid forms of function literals

var x = () => 1;
var x: {
    (): number;
}

var y: { (x: string): string; };
var y: (x: string) => string;
var y2: { <T>(x: T): T; } = <T>(x: T) => x

var z: { new (x: number): number; };
var z: new (x: number) => number;

//// [functionLiteral.js]
// basic valid forms of function literals
var x = () => 1;
var x;
var y;
var y;
var y2 = (x) => x;
var z;
var z;
