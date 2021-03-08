const twit_list = 
{
    765105291633405954: "680749508547706887",
    769070659943235584: "817006794550935572"
};
module.exports = {
    name: 'Pulltweet',
	description: "Grab tweets from priconne redive official twitter, and posts it on discord",
    run(client) {
        var Twit = require('twit')
        try {
            Config = require('./../config.json')
            var T = new Twit({
                consumer_key: Config.twitterapi,
                consumer_secret: Config.twittersecret,
                access_token: Config.accesstoken,
                access_token_secret: Config.accesssecret,
            })
            const path = 'statuses/filter'
            //const ids = ['765105291633405954']
            const params = { follow: Object.keys(twit_list).join(',') }
            var stream = T.stream(path, params)
            stream.on('error', err => {
                console.log(err)
            })
            stream.on('tweet', async tweet => {
                if (!Object.keys(twit_list).includes(tweet.user.id_str)) {
                    return
                }
                const url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
                var channel = await client.channels.fetch(twit_list[tweet.user.id_str])
                channel.send(url)
            })
        }
        catch (e) {
            console.log('error with config: ' + e.message);
            process.exit();
        }
    }
}