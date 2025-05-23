const fs = require("fs");
module.exports.config = {
  name: "tea",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("tea")==0 || event.body.indexOf("Tea")==0 || event.body.indexOf("Chai")==0 || event.body.indexOf("CHAI")==0) {
    var msg = {
        body: "𝙍𝘼𝙅 𝙏𝙃𝘼𝙆𝙐𝙍 𝙆𝙀 𝙂𝙃𝘼𝙍 𝘼𝘼𝙊 𝘼𝙐𝙍 𝘾𝙃𝘼𝙔𝙄 𝙉𝘼𝙎𝙏𝘼 𝙆𝙍𝙆𝙀 𝙅𝘼𝙊 𝙁𝙍𝙀𝙀 𝙈𝙀 😾❤️☕",
        attachment: fs.createReadStream(__dirname + `/noprefix/tea.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫖", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
