var cleverBot = require('cleverbot-node')

module.exports = function(ziggy, _settings) {
  var bot = new cleverBot()
  var settings = _settings || {}

  ziggy.on('message', function (user, channel, message) {
    var reg = new RegExp(settings.botnick || ziggy.settings.nickname)

    if(reg.test(message)) {
      var toWrite =  message.replace(reg, ' ').split(/\s+/).join(' ')
      bot.write(toWrite,  function (resp) {
        ziggy.say(channel, user.nick + ': ' + resp.message)
      })
    }
  })
}
