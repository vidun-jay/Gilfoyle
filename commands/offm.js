exports.run = async (client, message, args, level) => {
  const friendly = client.config.permLevels.find(l => l.level === level).name;
  channel = client.channels.cache.get('775394548612202568');
  channel.send('Server is temporarily down for maintenance.');

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["m",],
  permLevel: "Server Owner"
};

exports.help = {
  name: "offm",
  category: "Miscelaneous",
  description: "Sets server status to offline due to maintenance",
  usage: "offm"
};
