module.exports = {
    name: 'scry',
    description: "This is a ping command",
    execute(message, args){
            message.channel.send("I'm taking a free scry");
    }
}