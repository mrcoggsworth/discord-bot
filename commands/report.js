module.exports = {
	name: 'report',
	description: 'Report command is used to report users who are misalighned with the rules of the server',
	execute(message, args) {
        message.channel.send('Currently in development....standby!');
        setTimeout(()=> {
            message.channel.send('Hasta la vista....baby!')
        }, 4000);
	},
};