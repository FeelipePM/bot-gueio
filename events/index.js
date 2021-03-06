const Ready = require("./Ready");
const GuildMemberAdd = require("./GuildMemberAdd");
const Message = require("./Message");
const MessageReactionAdd = require("./MessageReactionAdd");
const MessageReactionRemove = require("./MessageReactionRemove");

module.exports = client => {
  client.on("ready", () => Ready.init(client));
  client.on("guildMemberAdd", member => GuildMemberAdd.welcome(member));
  client.on("message", msg => Message.ping(msg, client));
  client.on("raw", event => {
    if (event.t === "MESSAGE_REACTION_ADD")
      MessageReactionAdd.enterChannel(event, client);
  });

  client.on("raw", event => {
    if (event.t === "MESSAGE_REACTION_REMOVE")
      MessageReactionRemove.quitChannel(event, client);
  });
};
