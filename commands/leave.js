module.exports = {
    name: 'leave',
    description: "This is a command to make the bot shut up",
    async execute(message, args){
            const voiceChannnel = message.member.voice.channel;

            if(!voiceChannnel) return message.channel.send("You need to be in a voice channel to stop the bot");
            await voiceChannnel.leave();
    }
}