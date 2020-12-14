exports.run = async (client, message, args, level) => {
  const friendly = client.config.permLevels.find(l => l.level === level).name;
  channel = client.channels.cache.get('775394548612202568');
  channel.send('Server is down.');

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["d", "down"],
  permLevel: "Server Owner"
};

exports.help = {
  name: "off",
  category: "Miscelaneous",
  description: "Sets server status to offline",
  usage: "off"
};
