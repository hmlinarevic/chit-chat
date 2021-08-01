import { useState, useEffect } from 'react';
import { createChat } from '../../helpers/chat';
import ChatRoom from '../Chat/ChatRoom';

export default function App() {
	const [comments, setComments] = useState();

	const addComment = comment => {
		setComments(prevComments => [...prevComments, comment]);
	};

	useEffect(() => {
		setTimeout(() => {
			const getComments = async () => {
				const res = await fetch('/data');
				const data = await res.json();
				const { comments } = data;
				setComments(comments);
			};
			getComments();
		}, 2000);
	}, []);

	if (!comments) {
		return <ChatRoom isLoading />;
	}

	return (
		<>
			<ChatRoom chat={createChat(comments)} onAddComment={addComment} />
		</>
	);
}
