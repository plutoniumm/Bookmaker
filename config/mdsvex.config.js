import { defineMDSveXConfig as defineConfig } from "mdsvex";

import rehypeMJax from "rehype-mathjax/svg.js";
import remarkMath from 'remark-math';

const config = defineConfig( {
  extensions: [ ".svelte.md", ".md", ".svx" ],

  smartypants: { dashes: "oldschool" },

  remarkPlugins: [ remarkMath, { singleDollarTextMath: true } ],
  rehypePlugins: [ rehypeMJax, {
    tex: {
      inlineMath: [              // start/end delimiter pairs for in-line math
        [ '$', '$' ],
        [ '\\(', '\\)' ]
      ],
      displayMath: [             // start/end delimiter pairs for display math
        [ '$$', '$$' ],
        [ '\\[', '\\]' ]
      ],
    }, options: { enableMenu: false }
  } ]
} );

export default config;
