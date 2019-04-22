const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "*";

client.on('ready', () => {
    console.log('logged in as ' + client.user.tag)
    client.user.setActivity('la sécurité de ton serveur',{type: 'WATCHING'})
});

client.login(process.env.TOKEN)

client.on("message" , message => {
    if(message.content === prefix + "help") {
        var info_embed = new Discord.RichEmbed()
        .setColor('e70647')
        .setTitle('```Voici la liste de commande```\n\n-------------------------------------------')
        .setDescription('*help: liste de commande\n\n*aie: appeler un responsable\n\n*blacklist: avoir la liste noire\n\n*securise: activer mode sécurité\n\n*invite: avoire lien invitation bot\n\n*info: info du jour\n\n\n-------------------------------------------')
        .setTimestamp()
        .setFooter('Edité par oOTeamCocOo')
        message.channel.sendMessage(info_embed)
        message.author.sendMessage('```Tu as demander le help !\nN hesite pas à m ajouter a ton serveur ! :``` https://discordapp.com/api/oauth2/authorize?client_id=569192657536942162&permissions=0&scope=bot ')
        console.log("Un utilisateur à demander help")
    }
});


client.on("message" , message => {
    if(message.content === "*aie"){
        message.reply("```{@#5807}   et {@#4389}   un probléme est détécté```");
        message.author.sendMessage('```N hesite pas à m ajouter a ton serveur ! :``` https://discordapp.com/api/oauth2/authorize?client_id=569192657536942162&permissions=0&scope=bot ')
        console.log("Un probléme a mener a la mention des patrons")
    }
});



client.on("message" , message => {
    if(message.content === "*blacklist"){
        message.reply(" ```Voici les gens possédant des idées noire:``` @.......#0000 ; @.......#0000 ....");
        console.log("Blacklist demandé")
    }
});

client.on("message" , message => {
    if(message.content === "*securise"){
        message.reply("```Le mode securité est bientôt disponible, en attendant, fais : *aie```");
        console.log("Mode securité demander")
    }
});

client.on("message" , message => {
    if(message.content === "Wsh"){
        message.reply("```Je n'aime pas la façons dont tu parle ! [Attention]```");
        console.log("Un utilisateur à dis WESH, je n'aime pas ça")
    }
});

client.on("message" , message => {
    if(message.content === "Tg"){
        message.reply("```[WARNING] On ne parle pas comme sa à ces camarades DISCORD !```");
        console.log("Un utilisateur à dis TAGEULE, je n'aime pas ça")
    }
});

client.on("message" , message => {
    if(message.content === "Slt"){
        message.reply("```Bonjour, mes créateurs sont oOTeamCocOo et Advisor Discord Defender, je suis déstiné à apporter la protection de tous !```");
        message.author.sendMessage('```N hesite pas à m ajouter a ton serveur ! :``` https://discordapp.com/api/oauth2/authorize?client_id=569192657536942162&permissions=0&scope=bot ')
        console.log("un utilisateur à dis salut")
    }
});

client.on("message" , message => {
    if(message.content === "Hey"){
        message.reply("```Bonjour, mes créateurs sont oOTeamCocOo et Advisor Discord Defender, je suis déstiné à apporter la protection de tous !```");
        message.author.sendMessage('```N hesite pas à m ajouter a ton serveur ! :``` https://discordapp.com/api/oauth2/authorize?client_id=569192657536942162&permissions=0&scope=bot ')
        console.log("Un utilisateur à dis Hey")
        
    }
});       

client.on("message" , message => {
    if(message.content === "*invite"){
        var invite_embed = new Discord.RichEmbed()
        .setColor('01fa41')
        .setTitle('```invitation```')
        .setThumbnail('https://discordapp.com/channels/568369085595779074/569125583787786241/569605069767573600://discordapp.com/channels/568369085595779074/569125583787786241/569599932210872320')
        .setDescription('L invitation t a bien étais envoyé en privé !')
        .setTimestamp()
        .setFooter('Edité par oOTeamCocOo')
        message.channel.sendMessage(invite_embed)
        message.author.sendMessage('```N hesite pas à m ajouter a ton serveur ! :``` https://discordapp.com/api/oauth2/authorize?client_id=569192657536942162&permissions=0&scope=bot ')
        console.log("Un utilisateur à demander l'invite")
        
    }
});


client.on("message" , message => {
    if(message.content === prefix + "info") {
        var info_embed = new Discord.RichEmbed()
        .setColor('0587ff')
        .setTitle('```INFO DU JOUR```')
        .setThumbnail('https://discordapp.com/channels/568369085595779074/569125583787786241/569599932210872320')
        .setDescription('Bonjour, aujourd hui, les principales informations de discord sont : compte spotify premium pour seulement 1€50 dans la boutique à coco')
        .setTimestamp()
        .setFooter('Edité par oOTeamCocOo')
        message.channel.sendMessage(info_embed)
        message.author.sendMessage('```N hesite pas à m ajouter a ton serveur ! :``` https://discordapp.com/api/oauth2/authorize?client_id=569192657536942162&permissions=0&scope=bot ')
        console.log("Un utilisateur à demander l'info")
        message.delete()
    }
});

client.on('message' , message => {
    if(message.content === prefix +'reglement') {
        var reglement_embed = new Discord.RichEmbed()
        .setColor('f3f800')
        .setTitle('```REGLEMENT```')
        .setDescription('MON PREFIX EST "*" \n\n1) Pas de everyone sur notre serveur.\n\n 2) Les insultes sont interdites et seront sanctionnés.\n\n 3) Pas de pubs pour vos serveurs discord.\n\n 4) Ajouter le not avec la commande *invite.\n\n 5) Les liens inappropriés comme des screamers et des sites pornographiques sont automatiquement supprimés.\n\n 6) Ne pas spammer/flood, utiliser trop de caractères spéciaux ou encore écrire de longs messages en MAJUSCULES.\n\n 7) Respectez tous les membres de façon égale et soyez gentils les uns envers les autres. Si vous avez des problèmes avec quelqu un ou que vous vous sentez harcelé, contactez un membre du staff.\n\n\n-------------------------------------------')
        .setFooter('réglement 2019')
        .setTimestamp()
        message.channel.sendMessage(reglement_embed)
        console.log('le reglement à été demandé')
    }
});

client.on("message" , message => {
    if(message.content === "He"){
        var bella_embed = new Discord.RichEmbed()
        .setColor('01fa41')
        .setTitle('```MA BELLA EH```')
        .setThumbnail('https://discordapp.com/channels/568369085595779074/569125583787786241/569605069767573600://discordapp.com/channels/568369085595779074/569125583787786241/569599932210872320')
        .setDescription('Aya ya yaa')
        .setTimestamp()
        .setFooter('Edité par oOTeamCocOo')
        message.channel.sendMessage(bella_embed)
        message.author.sendMessage('```N hesite pas à m ajouter a ton serveur ! :``` https://discordapp.com/api/oauth2/authorize?client_id=569192657536942162&permissions=0&scope=bot ')
        console.log("Un utilisateur à dit he")
        
    }
});
client.on("message" , message => {
    if(message.content === prefix + 'star1502?') {
    var star1502_embed = new Discord.RichEmbed()
        .setColor('0485fa')
        .setTitle('               Qui est star1502 ?')
        .setThumbail('https://discordapp.com/channels/@me/346422121712582656/396808769105035264')
        .setTimestemp()
        .setFooter('dédicace à star1502')
        .setDescription('Bonjour à toi,\n\n Je vais te raconter l histoire de la chaîne star1502 !\n\n Pour commencer, star 1502, inscrit le 27 déc. 2015 sur youtube, à publier sa première vidéo le lendemain de son inscription.\n\n Il continue alors à publier des petites vidéo régulièrement, il atteint les 500abonnés le 27 oct. 2016 !\n Le temps passe...\n\n star1502 met en place son live "Fais ta pub", il y trouve très rapidement succé !\n tous ce passé bien jusqu a ce que YouTube interdise le fais ta pub (début 2018) \n\n Il avait aussi un serveur DISCORD depuis le début, mais à cause de cet événement, il finis vite par s éteindre ! Plus personne n était actif...\n\n Trouveras-t-il un option de secours ?\n\n Mis à jour le 22/04/2019 à 10h40.')
         message.channel.sendMessage(star1502_embed)
         message.author.sendMessage('```N hesite pas à m ajouter a ton serveur ! :``` https://discordapp.com/api/oauth2/authorize?client_id=569192657536942162&permissions=0&scope=bot ')
         console.log('L histoire de star1502 à été evoquer')
    }
});
