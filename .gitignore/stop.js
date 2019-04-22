module.exports.run = async (bot, message, args) => {
    if(!message.member.VoiceChannel) return message.channel.send('Vous devez être connecté à un salon vocale !')
    if(!message.guild.me.VoiceChannel) return message.channel.send('Le bot n est pas connécté')
    if(message.guild.me.VoiceChannelID !== message.member.VoiceChannelID) return message.channel.send('Vous n etes pas dans le même salon que moi !')
    message.guild.me.VoiceChannel.leave();
    message.delete();
    
};

module.exports.help ={
    name: 'stop'
}
