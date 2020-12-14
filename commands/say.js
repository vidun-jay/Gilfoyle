exports.run = async (client, message, args, level) => {
  const friendly = client.config.permLevels.find(l => l.level === level).name;
  channel = client.channels.cache.get('711663896158797869');
  var Args = message.content.substr(".say".length);
  channel.send(Args);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["u", "up"],
  permLevel: "Server Owner"
};

exports.help = {
  name: "say",
  category: "Miscelaneous",
  description: "Sends a message as Gilfoyle",
  usage: "say"
};
