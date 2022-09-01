const o=async({fetch:t})=>({posts:await t("/api").then(e=>e.json())}),a=Object.freeze(Object.defineProperty({__proto__:null,load:o},Symbol.toStringTag,{value:"Module"}));export{a as _,o as l};
