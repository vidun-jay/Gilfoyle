const fetch = require("node-fetch");

module.exports.run = (client, message, args) => {
    let mesg = args.join(" ");
    if (!mesg) return message.channel.send("Please say something.");
    
    // part one
    fetch(`http://api.brainshop.ai/get?bid=154185&key=YTV7RbW8zo8p44Fb&uid=1&msg=${encodeURIComponent(mesg)}`)
    .then(res => res.json())
    .then(data => {
    message.channel.send(data.cnt);
    });
    
    // part two
    /*fetch(`https://some-random-api.ml/chatbot?message=${encodeURIComponent(mesg)}`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(data.response);
    });*/
    // part three
    // fetch (`https://api.snowflakedev.xyz/chatbot?message=${encodeURIComponent(message.content)}&name=${encodeURIComponent(client.user.username)}`)
    //     .then(data => {
    //     const json = data.json();
    //     message.channel.send(json.message);
    // });
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };

module.exports.help = {
    name: "chat"
};
