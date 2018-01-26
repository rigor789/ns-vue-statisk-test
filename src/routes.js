const {blogPipeline} = require('./pipelines/blog')
const {docsPipeline} = require('./pipelines/docs')
const {landingPipeline} = require('./pipelines/landing')

const blogRoute = {
  from: 'content/blog/:year-:month-:day-:slug.md',
  pipeline: blogPipeline
}

const docsRoute = {
  from: 'content/docs/:lang/:category*/:order(\\d+-)?:slug.md',
  pipeline: docsPipeline
}

const landingRoute = {
  from: 'content/index(\_*):lang?.html',
  pipeline: landingPipeline
}

module.exports.routes = {
  '/blog/:year/:month/:day/:slug/index.html': blogRoute,
  ':lang/docs/:category*/:slug/index.html': docsRoute,
  ':lang?/index.html': landingRoute,
}