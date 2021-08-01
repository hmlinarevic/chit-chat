import ChatDay from './ChatDay';
import ChatForm from './ChatForm';
import { getKey } from '../../helpers/tools';
import classes from './ChatRoom.module.css';

export default function ChatRoom({ isLoading, chat, onAddComment }) {
	const openChat = (chat, key) => chat[key];

	return (
		<section className={classes['chat-room']}>
			<div className={classes['chat-room__content']}>
				{isLoading && (
					<span className={classes['chat-room__loading']}>loading chat...</span>
				)}
				{chat &&
					chat.map(chatGroup => (
						<ChatDay
							key={getKey(chatGroup)}
							chat={openChat(chatGroup, getKey(chatGroup))}
						/>
					))}
			</div>
			{chat && <ChatForm onAddComment={onAddComment} />}
		</section>
	);
}
