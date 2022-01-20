module.exports = {
    name: 'roll20',
    description: "This is a command to roll a d20; generate a random number between 1 and 20",
    execute(message, args){
            min = 1;
            max = 20;
            min = Math.ceil(min);
            max = Math.floor(max);
            num = Math.floor(Math.random() * (max - min + 1) + min);
        
            message.channel.send(num);
    }
}