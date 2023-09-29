//Timers : setInterval, setTimeout, clearInterval, clearTimeout

//Closure

import { useState, useEffect } from 'react';

// create an app that counterclock from 180s
/*
Because the display will change every second -> need useState  
*/

const Timers = () => {
	// setInterval(() => {
	// 	setTime((preTime) => preTime - 1);
	// }, 1000);
	/*
    This is wrong because it will re-render infinity cause everytime the re-render a component. 
    it will call another setInterval
    */
	const [countdown, setCountdown] = useState(180);

	useEffect(() => {
		// const timer = setTimeout(() => {
		// 	setCountdown((prevState) => prevState - 1);
		// }, 1000);

		const timer2 = setInterval(() => {
			setCountdown((prevState) => prevState - 1);
		}, 1000);
		return () => {
			// clearTimeout(timer);
			clearTimeout(timer2);
		};
	}, []);

	return (
		<div>
			<h1>{countdown}</h1>
		</div>
	);
};

export default Timers;
