module.exports = {
	name: 'help',
	description: 'Help Command',
	execute(message, args) {
        console.log(args)
        if (args.length >= 1) {
            return message.channel.send("You only need to type \"!help\", and nothing more to view all the commands available to you.\nHave a nice day!")
        }
        
        const collection = message.member.roles.cache;
        const roles = [];
        collection.each(role => roles.push(role.name))
        
        if (roles.includes('admins')){
        console.log("Is admin");
        message.channel.send(`Command List:\n1. help\t\t    "help" command shows this menu\n2. joke\t\t    "joke" command will tell you a joke if you want to hear one\n3. show\t\t  "show" command will let you know a variety of info for your user\n4. report\t\t"report" command is hear to report ill mannered behavior to the admins\n5. utils\t\t    "utils" command is a simple discord network troubleshooting tool\n6. create\t\t"create" command should only be visible for admins. Useage is to create/remove channels, permissions, etc.`);

        } else {
        message.channel.send(`Command List:\n1. help\t\t    "help" command shows this menu\n2. joke\t\t    "joke" command will tell you a joke if you want to hear one\n3. show\t\t  "show" command will let you know a variety of info for your user\n4. report\t\t"report" command is hear to report ill mannered behavior to the admins\n5. utils\t\t    "utils" command is a simple discord network troubleshooting tool`)
        }
	},
};