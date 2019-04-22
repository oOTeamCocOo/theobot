const ytdl = require('ytdl-core');
      
//verification
module.exports.run = async (bot, message, args) => {
    if(!message.member.VoiceChannel) return message.channel.send('Vous devez être connecté à un salon vocale !')
    if(message.guild.me.VoiceChannel) return message.channel.send('Le bot est déja en ligne sur un autre salon !')
    if(args[0]) return message.channel.send('Merci de me préciser un lien vers YouTube !')
    
    const validate = await ytdl.validateURL(args[0]);
    if(!validate)return message.channel.send("Désoler, je ne trouve pas de correspondance avec ton URL !")

//commandes
const info = await ytdl.getInfo(args[0]);
const connection = await message.member.VoiceChannel.join()
const dispatcher = await connection.playStream(
    ytdl(args[0] , {filter: 'audioonely'})
    );
message.channel.send('Musique ajoutée: ${info.title}');
                                         
};


module.exports.help ={
    name: 'play'
}
