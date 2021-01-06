import { useState, useEffect } from "react";
import Login from "./components/Login";
import wsConnect from "./wsConnect";

function App() {
	const [rate, setRate] = useState();
	const [timestamp, setTimestamp] = useState();

	// Connect to websocket
	useEffect(() => {
		wsConnect(setRate, setTimestamp);
	}, []);

	return (
		<div className="App">
			<Login price={rate} timestamp={timestamp} />
		</div>
	);
}

export default App;
