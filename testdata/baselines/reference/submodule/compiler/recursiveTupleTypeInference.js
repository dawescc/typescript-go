//// [tests/cases/compiler/recursiveTupleTypeInference.ts] ////

//// [recursiveTupleTypeInference.ts]
// Repro from #37475

export type A = "number" | "null" | A[];

export type F<T> = null extends T
    ? [F<NonNullable<T>>, "null"]
    : T extends number
    ? "number"
    : never;

export type G<T> = { [k in keyof T]: F<T[k]> };

interface K {
    b: number | null;
}

const gK: { [key in keyof K]: A } = { b: ["number", "null"] };

function foo<T>(g: G<T>): T {
    return {} as any;
}

foo(gK);


//// [recursiveTupleTypeInference.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gK = { b: ["number", "null"] };
function foo(g) {
    return {};
}
foo(gK);
