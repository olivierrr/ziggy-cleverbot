
var cleverBot = require('cleverbot-node')

module.exports = function(ziggy, settings) {
  var bot = new cleverBot()

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
