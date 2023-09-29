/*
1.useEffect(callback)
- Gọi callback mỗi khi component re-render
- Gọi callback sau khi component thêm element vào DOM
2. useEffect(callback,[])
- Gọi callback once at the initial
3. useEffect(callback,[deps])
- Gọi callback whenever deps changed 


useEffect(()=>{...},[])


*/

/*
Listen DOM events 
    -Scroll
    -Resize
*/

/*
Clean up function luôn được gọi trước khi component unmounted 
-> Resolve: return a function 
If Toggle -> the content component is unmounted but the window.addEvenListener is still there. If mounted again
There will be another eventListener add on but the previous is still there. 
This is call Memory Leak
 Resolve example:
    useEffect(()=>{
        ...
        return (()=>{
            this is where we can clean up 
        })
    }, [])
*/

import './App.css';
import { useEffect, useState } from 'react';

const tabs = ['posts', 'comments', 'albums'];

const Content = () => {
	const [type, setType] = useState('');
	const [posts, setPosts] = useState([]);

	const [showGoToTop, setShowGoToTop] = useState(false);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then((res) => res.json())
			.then((posts) => {
				setPosts(posts);
			});
		console.log(type);
	}, [type]);

	//-Scroll under x px to show button
	useEffect(() => {
		const handleScroll = () => {
			console.log(window.scrollY);

			if (window.scrollY >= 200) {
				setShowGoToTop(true);
			} else {
				setShowGoToTop(false);
			}

			// setShowGoToTop(window.scrollY >=200);
		};
		window.addEventListener('scroll', handleScroll);

		//clean up function -> return whenever the component is unmounted
		return () => {
			console.log('unmounting ....');
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			{tabs.map((tab) => (
				<button
					key={tab}
					style={type === tab ? { color: '#fff', backgroundColor: '#ccc' } : {}}
					onClick={() => {
						setType(tab);
					}}
				>
					{tab}
				</button>
			))}

			<ul>
				{posts.map((post) => (
					<li key={post.id}>{post.title || post.name}</li>
				))}
			</ul>

			{showGoToTop && <button className="buttonTop">Go to Top </button>}
		</div>
	);
};

export default Content;
