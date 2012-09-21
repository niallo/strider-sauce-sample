var wd = require('wd')
var assert = require('assert')
browser = wd.remote(
  "ondemand.saucelabs.com"
  , 80
  , process.env.SAUCE_USERNAME
  , process.env.SAUCE_ACCESS_KEY
)

var REMOTE_HOST = 'http://localhost'
var REMOTE_PORT = process.env.PORT || 8000
var BASE_URL = REMOTE_HOST + ":" + REMOTE_PORT + "/"

var desired = {
  browserName: 'iphone',
  version: '5.0',
  platform: 'Mac 10.6',
  name: "Mobile Summit selenium test"
}

describe("Selenium Tests: ", function() {

  beforeEach(function(done) {
    this.timeout(90000)
    browser.init(desired, done)
  })

  afterEach(function(done) {
    this.timeout(10000)
    browser.quit(done)
  })

  it("should have correct title", function(done) {
    browser.get(BASE_URL, function() {
      browser.title(function(err, title) {
        assert.ok(~title.indexOf('Page Title'), 'Wrong Title')
        done()
      })
    })
  })


})

