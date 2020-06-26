const {execSync, spawn} = require('child_process');

let dataObj = {
  pingData: []
}

const ping = (target) => {
  const dst = execSync(`ping ${target}`, (err, stdout, stderr) => {
    if (err) {
      console.log(`error message ${err.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr message ${stderr.message}`);
    }
    return stdout;
  });

  return dst;
}

const pingStream = (target, message) => {
  const dst = spawn('ping', [target]);

  dst.stdout.on('data', data => {
    console.log(`stdout ${data}`);
    dataObj.pingData.push(data);
  });

  dst.stderr.on('data', data => {
    console.log(`stdout ${data}`);
  });

  dst.on('error', error => {
    console.log(`stdout ${error}`);
  });

  dst.on('close', code => {
    console.log(`stdout ${code}`);
  });
}

module.exports = {
	name: 'utils',
	description: 'The "utils" command is used for basic troubleshooting services such as a real ping, nslookup, etc.',
	execute(message, args) {

    console.log(args);

    if (args[0] === 'ping') {
      message.channel.send('I\'m working on it...standby!');
      // const data = ping(args[1]);
      pingStream(args[1], message);
      setTimeout(()=> {
        console.log(dataObj.pingData);

        dataObj.pingData.forEach((data) => {
          console.log(data.toString());
          message.channel.send(`\`\`\`${data.toString()}\`\`\``);
        });
      }, 5000);
      
      // message.channel.send(`\`\`\`${data.toString()}\`\`\``);
    }

    setTimeout(() => {
        message.channel.send('Your still hear...It\'s over...go home...go....chicka chickahh!!!')
    }, 5000)
	},
};