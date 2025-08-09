import process from 'node:process'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import { terser } from 'rollup-plugin-terser'

const isProd = process.env.NODE_ENV === 'prod'

export default defineConfig(
  {
    input: './src/index.tsx',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: 'dist/index.mjs',
        format: 'esm',
        sourcemap: false,
      },
    ],

    external: ['vue'],

    plugins: [
      // 解析 node_modules 中的模块
      nodeResolve(),

      // 将 CommonJS 模块转换为 ES6
      commonjs(),

      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        emitDeclarationOnly: true,
        noEmit: true,
        outDir: 'dist',
      }),

      // 添加 Babel 转换
      babel({
        babelHelpers: 'bundled',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
        ],
        plugins: [
          '@vue/babel-plugin-jsx',
        ],
      }),

      isProd ? terser() : false,
    ].filter(Boolean),
  },
)
