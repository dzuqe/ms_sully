import ts from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: 'tests/client.ts',
  output: {
    file: 'ui/client.js',
    format: 'es',
  },
  plugins: [
    commonjs({
        include: [ "./index.js", "node_modules/**" ],
        ignoreGlobal: false,
        sourceMap: false,
    }),

    nodeResolve({
        options: {
            jsnext: true,
        },
        browser: true,
        preferBuiltins: false,
    }),
    json(),
    ts(),
  ]
};
