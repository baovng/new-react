import './App.css';
import { useState, useEffect } from 'react';
import Content from './Content';

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
			{toggle && <Content />}
		</div>
	);
};

export default App;
