const Discord = require('discord.js'); 
const bot = new Discord.Client(); 
//const token = require("./token.json");



bot.on("ready", async () =>{
    console.log("Le bot est en ligne");
    bot.user.setStatus("online"); 
    bot.user.setActivity("@MAYSTROKER", {type: 'WATCHING'});
});


bot.login("ODAzNTM2MzUwNjkwODAzNzMz.YA_Nig.mUzGuAXBNOgza_U2G0AxzI40E8g"); 

clientInformation.login(process.env.TOKEN);