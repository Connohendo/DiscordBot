module.exports = {
    name: 'perms',
    description: "This is a command to test and practice permissions",
    execute(message, args){


            if(message.member.roles.cache.has('674052022219178006')){
                message.channel.send('permissions');
            }
            else{
                message.channel.send('You suck!');
            }
    }
}