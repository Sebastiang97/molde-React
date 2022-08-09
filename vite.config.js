import { defineConfig } from 'vite'
import path from 'path'
import { readdirSync } from 'fs'

const absolutePathAliases = {}
// Root resources folder
const srcPath = path.resolve('./src/')
// Ajust the regex here to include .vue, .js, .jsx, etc.. files from the resources/ folder
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map(
  (dirent) => dirent.name.replace(/(\.js){1}(x?)/, '')
)

srcRootContent.forEach((directory) => {
  absolutePathAliases[directory] = path.join(srcPath, directory)
})

export default defineConfig({
  root: './',
  resolve: {
    alias: {
      ...absolutePathAliases,
    },
  },

  build: {
    rollupOptions: {
      input: 'main.jsx',
    },
  },
})
