import { useEffect, useState } from 'react';

const tabs = ['posts', 'comments', 'albums'];

const Content = () => {
	const [type, setType] = useState('');
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then((res) => res.json())
			.then((posts) => {
				setPosts(posts);
			});
		console.log(type);
	}, [type]);
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
		</div>
	);
};

export default Content;
