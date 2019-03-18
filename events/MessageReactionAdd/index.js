"use strict";

const { ENTER_CHANNEL } = process.env;
const categories = require("./config");

const enterChannel = (reaction, user) => {
  if (reaction.message.channel.name === ENTER_CHANNEL) {
    const category = categories[reaction.emoji.name];

    if (category) {
      const member = reaction.emoji.guild.members.get(user.id);
      member.addRole(category.role.id);
    }
  }
};

module.exports = {
  enterChannel
};
