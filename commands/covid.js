// unfinished command still a lot of work to complete
// TODO
// individual state codes to match province names in api
// printable format back to user on discord server
// ability to look at other countries data as well

const apis = require('../apicalls.js');

module.exports = {
    name: 'covid',
    description: 'The command covid will provide users with input from various apis',
    async execute(message, args) {
        const date = new Date();
        const day = date.getDate();
        let month = date.getMonth() + 1;
        const year = date.getFullYear();
        if ( month <= 9 ){
            month = month.toString().padStart(2, '0')
        } 

        message.channel.send('Rona still exists...');

        if (!args.length) {
            return message.channel.send('You didn\'t give any arguments, try providing an argument or run the following "!covid help" for additional help');
        }
            
        // const cvCurrentCountryData = await apis.getData(`https://api.covid19api.com/live/country/united-states`);
        
        let stateCode;

        switch (args.length > 0){
            case args[0] === 'country:':
                args.shift().toLowerCase()
                const country = [];

                // parse the arguments to get the correct info from the user
                for (let i=0; i < args.length; i++) {
                    if (args[i] === 'state:'){
                        stateCode = args[i + 1];
                        break;
                    }
                    console.log(args[i], i);
                    country.push(args[i]);
                }
                
                const cvCountryDataByDate = await apis.getData(`https://api.covid19api.com/country/${country.join('-')}?from=${year}-${month}-${day - 1}T00:00:00Z&to=${year}-${month}-${day}T00:00:00Z`)

                if (args.includes('state:')){
                    const cvStateGenData = await apis.getData(`https://covidtracking.com/api/v1/states/${stateCode}/info.json`);
                    const cvCurrentStateData = await apis.getData(`https://covidtracking.com/api/v1/states/${stateCode}/current.json`);
                    
                    for (const state of cvCountryDataByDate) {
                        if (state.Province === 'Texas') {
                            console.log(state);
                        }
                    }
                }   

                message.channel.send(`Did you say county: ${country.join(' ')} and state: ${stateCode}?`);
                break;

            case args[0] === 'help':
                message.channel.send('help subcommand in development.')
                break;

            default:
                break;
        }

        // maybe scrap code for lines 54 - 60
        // if (args.length >= 3){
        //     console.log(args);
        //     stateCode = args[2];

        // } else if (args.length >= 4){
        //     return message.channel.send('Too many arguments, please try again or type "!covid help"')
        // }

        // if (country === 'united-states'){
        //     for (let state of cvCountryDataByDate){
        //         if (state.Province === `${stateCode}`){
        //             console.log(state);
        //         }
        //     }

        // } else {
        //     console.log('testing still');
        // }
        

        // const cvSummaryData = await apis.getData('https://api.covid19api.com/summary');
        // console.log(cvSummaryData);
    }, 

};