module.exports = {
    name: 'roll',
    description: "This is a command to roll any amount of the requested dice type i.e. 6,10,20",
    execute(message, args){
            // get rid of prefix
            const parameters = message.content.slice(5);
            //message.channel.send(parameters);
            //multiplier = numbers before d (number of die to roll)
            const IndexOfD = parameters.indexOf('d');
            //after d is the die size i.e 6,20,4,10
            //message.channel.send('Index of d = ' + IndexOfD);
            const numOfDiceToRoll = parameters.substring(0,IndexOfD);
           //message.channel.send('Num of dice to roll ' + numOfDiceToRoll);
            const diceSize = parameters.substring(IndexOfD + 1);
            //message.channel.send('dice size ' + diceSize);


            message.channel.send('rolling!');
        

            for(let i = 0; i < numOfDiceToRoll; i++){
                min = 1;
                max = diceSize;
                min = Math.ceil(min);
                max = Math.floor(max);
                num = Math.floor(Math.random() * (max - min + 1) + min);
                message.channel.send(num);
            }

            //slice everythin before d and after d for these parameters
    }
}