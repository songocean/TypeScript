/// <reference path="fourslash.ts" />

// @Filename: /other.ts
////export const x = 0;

// @Filename: /a.ts
////import {} from ".//*path*/";
////
////const x: "a" = "/*type*/";
////
////interface I {
////    /** Prop doc */
////    x: number;
////    /** Method doc */
////    m(): void;
////}
////declare const o: I;
////o["/*prop*/"];

verify.completions(
    { marker: "path", includes: { name: "other", text: "other", kind: "script" }, isNewIdentifierLocation: true },
    { marker: "type", exact: { name: "a", text: "a", kind: "string" } },
    {
        marker: "prop",
        exact: [
            { name: "x", text: "(property) I.x: number", documentation: "Prop doc", kind: "property" },
            { name: "m", text: "(method) I.m(): void", documentation: "Method doc", kind: "method" },
        ],
    },
);
