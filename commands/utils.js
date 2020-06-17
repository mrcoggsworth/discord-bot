module.exports = {
	name: 'utils',
	description: 'The "utils" command is used for basic troubleshooting services such as a real ping, nslookup, etc.',
	execute(message, args) {
        message.channel.send('I\'m working on it...standby!');
        setTimeout(() => {
            message.channel.send('Your still hear...It\'s over...go home...go....chicka chickahh!!!')
        }, 5000)
	},
};