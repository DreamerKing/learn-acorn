let acorn = require('acorn');
let code = `import moduleA from "./moduleA.js";
    import moduleB from "./moduleB.js";

    function add(v1, v2) { return v1 + v2 }

    add(moduleA.val, moduleB.val);`;
console.dir(acorn.parse(code, { sourceType: 'module'}), { depth: Infinity });