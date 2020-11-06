module.exports = {
	name: 'ping',
	description: "ping command",
	execute(message){
		var lack = Date.now();
		message.channel.send('pong!')
			.then(message => {
				var hite = Date.now();
				message.edit('pog! '+(hite-lack)+'ms. <:chag:455929484789415936>' );
			})
			.catch(console.error);
	}
}