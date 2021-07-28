import ChatDay from './ChatDay';
import classes from './ChatRoom.module.css';

export default function ChatRoom({ loading, chat }) {
	let chatKeys;

	if (chat) {
		chatKeys = chat.flatMap(chatOnDay => Object.keys(chatOnDay));
	}

	const loadingText = (
		<span className={classes['chat-room__loading']}>loading chat...</span>
	);

	return (
		<section className={classes['chat-room']}>
			{loading && loadingText}

			{chat &&
				chat.map((chatOnDay, i) => {
					const chatContent = chatOnDay[chatKeys[i]];
					return <ChatDay key={chatKeys[i]} chat={chatContent} />;
				})}
		</section>
	);
}
