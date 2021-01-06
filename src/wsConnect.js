const wsConnect = (setRate, setTimestamp) => {
	// Create a websocket connection
	const ws = new WebSocket(
		"ws://stream.tradingeconomics.com/?client=guest:guest"
	);

	// Send msg when connection is opened
	ws.onopen = function (event) {
		const msg = {
			topic: "subscribe",
			to: "EURUSD:CUR",
		};
		ws.send(JSON.stringify(msg));
	};

	// Listen to messages from server
	ws.onmessage = function (event) {
		const { price, dt } = JSON.parse(event.data);

		if (price && dt) {
			const date = new Date(dt).toLocaleString();
			setTimestamp(date);
			setRate(price);
		}
	};

	// Close websocket connection if there is an error
	ws.onerror = function (error) {
		console.error(
			"Websocket encountered error: ",
			error.message,
			"Closing connection..."
		);
		ws.close();
	};
};

export default wsConnect;
