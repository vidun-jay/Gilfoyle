exports.run = async (client, message, args, level) => {
  const friendly = client.config.permLevels.find(l => l.level === level).name;
  channel = client.channels.cache.get('775394548612202568');
  channel.send('Server is online!');
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["u", "up"],
  permLevel: "Server Owner"
};

exports.help = {
  name: "on",
  category: "Miscelaneous",
  description: "Sets server status to online",
  usage: "on"
};
