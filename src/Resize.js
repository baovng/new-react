/*
Listen DOM events 
    -Resize 

Q: resize the window width and show when resize, clean code whenever the component is unmounted
*/

import { useState, useEffect } from 'react';

const Resize = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth);
		});

		//clean up func
		return () => {
			window.removeEventListener('resize', () => {
				setWidth(window.innerWidth);
			});
		};
	}, []);

	return <div>{width}</div>;
};

export default Resize;
