const express = require('express')
const consola = require('consola')
const bodyParser = require('body-parser')
const { Nuxt, Builder } = require('nuxt')
const app = express()

const fs = require('fs')
const path = require('path')
const filePath = '../store/initial_data.json'
const initialData = require(filePath)

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(bodyParser.json())

  app.get('/api/posts', function(req, res) {
    return res.json({posts: 'Just some testing data'})
  })

  app.post('/api/posts', function(req, res) {
    const post = req.body
    initialData.posts.push(post)

    fs.writeFile(path.join(__dirname, filePath), JSON.stringify(initialData, null, 2), function(err) {
      if (err) {
        return res.status(422).send(err)
      }

      console.log('Sending Data to client')
      return res.json('File Sucesfully updated')
    })
  })

  app.patch('/api/posts/:id', function(req, res) {
    const id = req.params.id
    console.log('Param is: ', id)
    return res.json({posts: 'Data has been updated!'})
  })

  app.delete('/api/posts/:slug', function(req, res) {
    const slug = req.params.slug
    console.log('Param is: ', slug)
    return res.json({posts: 'Data has been deleted!'})
  })

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()





