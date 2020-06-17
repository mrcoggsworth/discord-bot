module.exports = {
	name: 'show',
	description: 'The "show" command will let users know certain stats about their own user',
	execute(message, args) {
        message.channel.send('Show you what?!...This command is still being developed.');
        setTimeout(() => {
            message.channel.send('You\'re gonna need a bigger boat...')
        }, 4000);
	},
};