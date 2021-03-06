module.exports = {
    name: 'Pulltweet',
	description: "Grab tweets from uma musu official twitter, and posts it on discord",
    run(client) {
        var Twit = require('twit')
        try {
            Config = require('./../config.json');
            var T = new Twit({
                consumer_key: Config.twitterapi,
                consumer_secret: Config.twittersecret,
                access_token: Config.accesstoken,
                access_token_secret: Config.accesssecret,
            })
            const path = 'statuses/filter'
            const ids = ['769070659943235584']
            const params = { follow: ids.join(',') }
            //const ids = ['id1', 'id2']
            //const params = { follow: ['765105291633405954'].join(',') }
            var stream = T.stream(path, params)
            stream.on('error', err => {
                console.log(err)
            })
            stream.on('tweet', async tweet => {
                if (!ids.includes(tweet.user.id_str)) {
                    return
                }
                const url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
                var channel = await client.channels.fetch('817006794550935572')
                channel.send(url)
            })
        }
        catch (e) {
            console.log('error with config: ' + e.message);
            process.exit();
        }
    }
}