//Create a comment fake app

import { useEffect, useState } from 'react';

const lessons = [
	{ id: 1, name: 'ReactJS ? Why study?' },
	{ id: 2, name: 'SPA/MPA ?' },
	{ id: 3, name: 'Arrow function' },
];
const Comment = () => {
	const [lessonId, setLessonId] = useState(1);

	useEffect(() => {
		const handleComment = ({ detail }) => {
			console.log(detail);
		};
		window.addEventListener(`lesson-${lessonId}`, handleComment);

		return () => {
			window.removeEventListener(`lesson-${lessonId}`, handleComment);
		};
	}, [lessonId]);
	return (
		<div>
			{lessons.map((lesson) => (
				<li
					key={lesson.id}
					style={{ color: lessonId === lesson.id ? 'red' : 'black' }}
					onClick={() => setLessonId(lesson.id)}
				>
					{lesson.name}
				</li>
			))}
		</div>
	);
};

export default Comment;
