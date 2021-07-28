import { useState, useEffect } from 'react';
import { createChat } from '../../helpers/chat';
import ChatRoom from '../Chat/ChatRoom';

export default function App() {
	const [comments, setComments] = useState();

	useEffect(() => {
		setTimeout(() => {
			const getComments = async () => {
				const data = await fetch('/data');
				const res = await data.json();
				const { comments } = res;
				setComments(comments);
			};
			getComments();
		}, 1000);
	}, []);

	if (!comments) {
		return <ChatRoom loading />;
	}

	return (
		<>
			<ChatRoom chat={createChat(comments)} />
		</>
	);
}
