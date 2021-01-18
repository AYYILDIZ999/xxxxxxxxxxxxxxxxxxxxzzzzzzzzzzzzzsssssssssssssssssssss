module.exports.operate = ({client, msg, args}) => {
  if (msg.channel.id !== "797883775416926278") return msg.channel.send("<#797883775416926278>");
  let kullanici = msg.mentions.users.first() || client.users.cache.get(args[0]) || msg.author;
  let avatar = kullanici.avatarURL({ dynamic: true, size: 2048 });
  msg.channel.send({
    embed: {
      author: { name: kullanici.tag, icon_url: avatar },
      description: `[Resim Adresi](${avatar})`,
      footer: {
        text: `${msg.member.displayName} tarafından istendi.`,
        icon_url: msg.author.avatarURL({ dynamic: true })
      },
      image: { url: avatar },
      timestamp: new Date(),
      color: client.favoriRenkler[Math.floor(Math.random() * client.favoriRenkler.length)]
    }
  });
};

module.exports.help = {
  name: "avatar",
  alias: ["gif", "pp"]
};