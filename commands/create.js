module.exports = {
	name: 'create',
	description: 'The "create" command is used add/remove permissions, roles, channels, etc.',
	execute(message, args) {

        const collection = message.member.roles.cache;
        const roles = [];
        collection.each(role => roles.push(role.name))
        
        if (roles.includes('admins')){
            console.log("Is admin");
            message.channel.send('Still in development...standby!');
            setTimeout(() => {
                message.channel.send('Your still hear...It\'s over...go home...go....chicka chickahh!!!')
            }, 5000)
        } else {
            return
        }
        
	},
};