module.exports = {
    name: 'roll',
    description: "This is a command to roll any amount or requested dice; generate a random number between 1 and 20",
    execute(message, args){
            // get rid of prefix
            const parameters = message.content.slice(5);
            message.channel.send(parameters);
            //multiplier = numbers before d (number of die to roll)
            parameters.indexOf('d' + 1);
            //after d is the die size i.e 6,20,4,10

            //slice everythin before d and after d for these parameters


            message.channel.send('rolling!');
    }
}