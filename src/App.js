/*

useState :

const [state,setState] = useState(init)


*/

import './App.css';
import { useState, useEffect } from 'react';
import Content from './Content.js';
import Resize from './Resize.js';
import Timers from './useEffect/Timers';
import ChangeAvatar from './useEffect/ChangeAvatar';

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
			{/* {toggle && <Timers />} */}
			{toggle && <ChangeAvatar />}
		</div>
	);
};

export default App;
