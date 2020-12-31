// ts 转换为 js
import esbuild from 'rollup-plugin-esbuild'
// .vue 文件转换为 .js
import vue from 'rollup-plugin-vue'
// scss 结尾文件转换为 css
import scss from 'rollup-plugin-scss'
import dartSass from 'sass'
// js 代码编译
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/lib/index.ts',
  output: [{
    globals: {
      vue: 'Vue'
    },
    name: 'LuLu',
    file: 'dist/lib/lulu.js',
    format: 'umd',
    plugins: [terser()]
  }],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'
    }),
    vue({
      include: /\.vue$/,
    })
  ],
}