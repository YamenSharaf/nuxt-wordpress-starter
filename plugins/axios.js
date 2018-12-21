export default function(context) {
  context.$axios.onRequest(config => {
    console.log('config', config)
    console.log('CONTEXT', context)
    console.log('Making request to ' + config.url)
  })
}
