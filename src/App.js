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
import Comment from './useEffect/Comment';
import ContentLE from './useLayoutEffeect/ContentLE';
import ContentRef from './useRef/ContentRef';
const App = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className="App">
			<button
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				Reset
			</button>
			{/* {toggle && <Content />} */}
			{/* {toggle && <Resize />} */}
			{/* {toggle && <Timers />} */}
			{/* {toggle && <ChangeAvatar />} */}
			{/* {toggle && <Comment />} */}

			{/* content of useLayoutEffect */}
			{/* {toggle && <ContentLE />} */}

			{toggle && <ContentRef />}
		</div>
	);
};

export default App;
