const apis = require('../apicalls.js');

module.exports = {
    name: "joke",
    description: "Command to tell a joke",
    async execute(message, args) {
        if (!args.length || args[0] === 'help') {
            return message.channel.send(`"joke" - Joke Command Usage: This command will tell you a joke!\n\nargument options:\n1. jotd\t\tJoke of the Day\n2. chuck\tChuck Norris jokes\n3. dad\t\tDad jokes\n4. help\t\tShow this help section`)
        }
            
        if (args[0] === "jotd"){
            const data = await apis.getData("https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=religious,political,racist,sexist");
        if (data.type === "single"){
            message.channel.send(`Here is your joke ${message.author}\n${data.joke}`);            
        } else {
            message.channel.send(`Here is your joke ${message.author}\n${data.setup}`);            
            setTimeout(()=>{
            message.channel.send(`${data.delivery}`);            
            }, 2000);
        }}

        if (args[0] === "chuck") {
        const data = await apis.getData("https://api.chucknorris.io/jokes/random");
        message.channel.send(`Here is your joke ${message.author}\n${data.value}`);            
        }

        if (args[0] === "dad") {
        const data = await apis.getData("https://icanhazdadjoke.com/slack");
        message.channel.send(`Here is your joke ${message.author}\n${data.attachments[0].text}`)
        }
    }

}