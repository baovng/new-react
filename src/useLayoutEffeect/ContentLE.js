//Khác nhau về thứ tự render component

//useEffect
/*
 1. Cập nhật lại State
 2. Cập nhật DOM (mutated)
 3. Render lại UI
 4. Gọi cleanup nếu deps thay đổi
 5. gọi useEffect callback
  */

// useLayoutEffect
// 1. Cập nhật lại State
// 2. Cập nhật lại DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI

//Bài toán: tạo click button tăng 1
import { useEffect, useLayoutEffect, useState } from 'react';

const ContentLE = () => {
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setCount((prev) => prev + 1);
	};

	useLayoutEffect(() => {
		if (count > 3) {
			setCount(0);
		}
		console.log('test');
	}, [count]);
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={handleClick}>Increase</button>
		</div>
	);
};

export default ContentLE;
