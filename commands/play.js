const  ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: "This is a command to play yt videos as audio",
    async execute(message, args){
            const voiceChannnel = message.member.voice.channel;

            if(!voiceChannnel) return message.channel.send('You need to be in a voice channel to execute this command!');
            const permissions = voiceChannnel.permissionsFor(message.client.user);
            if(!permissions.has('CONNECT')) return message.channel.send('You dont have sufficient permissisons');
            if(!permissions.has('SPEAK')) return message.channel.send('You dont have sufficient permissisons');
            if(!args.length) return message.channel.send('You need to request a yt link');

            const validURL = (str) => {
                var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
                if(!regex.test(str)){
                    return false;
                }
                else{
                    return true;
                }


            }

            if(validURL(args[0])){

                const connection = await voiceChannnel.join();
                const stream = ytdl(args[0], {filter: 'audioonly'});
                
                connection.play(stream, {seek: 0, volume: 1})
                .on('finish', () =>{
                    voiceChannnel.leave();
                });
                await message.reply(`:Thumbsup: Now Playing ***${stream.title}***`)
                return
            }


            const connection = await voiceChannnel.join();

            const videoFinder = async (query) => {
                const videoResult = await ytSearch(query);

                return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;



            }

            const video = await videoFinder(args.join(' '));

            if(video){
                const stream = ytdl(video.url, {filter: 'audioonly'});
                connection.play(stream, {seek: 0, volume: 1})
                .on('finish', () => {
                    voiceChannnel.leave();
                });
                await message.reply(`:Thumbsup: Now Playing ***${video.title}***`)
            }
            else{
                message.channel.send('No result found');
            }
    }
}