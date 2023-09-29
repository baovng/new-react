/*

useState :

const [state,setState] = useState(init)


*/

import './App.css';
import { useState, useEffect } from 'react';
import Content from './Content.js';
import Resize from './Resize.js';
import Timers from './useEffect/Timers';

const App = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="App">
			<button
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				Toggle
			</button>
			{/* {toggle && <Content />} */}
			{/* {toggle && <Resize />} */}
			{toggle && <Timers />}
		</div>
	);
};

export default App;
