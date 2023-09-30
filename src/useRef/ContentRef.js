//Lưu các giá trị tham chiếu bên ngoài
// function component

//useRef(inital)
// -> luôn return 1 object có prop là current

// BaiToan2: in ra giá trị hiện tại và prev của count
import { useState, useRef, useEffect } from 'react';

const ContentRef = () => {
	const [count, setCount] = useState(60);

	// const ref = useRef(99);

	// console.log(ref);
	// console.log(ref.current);

	const timer = useRef(); //để lưu được timer của setInterval thì xài useRef() để giữ nguyên giá trị k đoổi khi re-render

	const prevCount = useRef();

	const h1Ref = useRef();
	useEffect(() => {
		prevCount.current = count;
	}, [count]);

	const handleStart = () => {
		timer.current = setInterval(() => {
			setCount((prev) => prev - 1);
		}, 1000);

		console.log('Start =>', timer.current);
	};

	const handleStop = () => {
		clearInterval(timer.current); // timer này undifined vì khi setCount trên handleStart -> re render UI -> timer lúc này undefind
		console.log('Stop =>', timer.current);
	};

	console.log(count, prevCount.current);

	//lấy elmemnt h1 // thường sẽ lấy tọa độ
	console.log(h1Ref.current);
	return (
		<div>
			<h1 ref={h1Ref}>{count}</h1>
			<button onClick={handleStart}>Start</button>
			<button onClick={handleStop}>Stop</button>
		</div>
	);
};
export default ContentRef;
