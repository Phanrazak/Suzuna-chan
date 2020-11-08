module.exports = {
	name: 'ping',
	description: "Displays the time taken for a round trip the pc running the bot to discord and back in miliseconds",
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