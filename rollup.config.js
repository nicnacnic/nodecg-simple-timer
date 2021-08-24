import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'rollup/modules.js',
  output: {
    dir: 'dashboard',
    format: 'cjs'
  },
  plugins: [nodeResolve()]
};