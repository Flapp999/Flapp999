const Discord = require("discord.js")
 
const TOKEN = "OTkxMTY3MzgzNzA2MjkyMzE1.Gyk8nu.t-OIYLFvC57Qabd9Wwdwqd5uSqZIYCY_ONbJfY"
 
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})
 
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})
 
client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Greetings Mortal!")
    }
})

client.login(TOKEN)