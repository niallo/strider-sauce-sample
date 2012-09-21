var app = require('tako')()

// Return 200 on / and a little HTML doc too
app.route('/')
  .html(function (req, resp) {
    console.log("server got request for /")
    resp.end('<html><head><title>Page Title</title></head><body>this is a body</body></html>')
  })
  .methods('GET')

var port = process.env.PORT || 8000
app.httpServer.listen(port)

console.log("tako server listening on port %d", port)
