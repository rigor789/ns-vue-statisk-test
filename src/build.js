const Generator = require('statisk')
const {resolve} = require('path')

const {routes} = require("./routes")

const generator = new Generator({
  cwd: resolve(__dirname, '..'),
  source: './content',
  destination: './dist',
  clean: true,

  routes,
  meta: {
    title: 'NativeScript-Vue'
  }
})

generator.use(async (files) => {
  console.log(files)
  return files
})

generator.run().then(() => {
  console.log('Build successful')
})