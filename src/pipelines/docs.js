const matter = require('statisk/lib/plugins/matter')
const markdown = require('statisk/lib/plugins/markdown')

module.exports.docsPipeline = [
  matter(),
  markdown()
]