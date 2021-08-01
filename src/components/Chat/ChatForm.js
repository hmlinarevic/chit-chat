import { useState } from 'react';
import Button from '../UI/Button';
import classes from './ChatForm.module.css';
import IconSend from '../../assets/send.svg';

const initalMessage = 'Hola friends, you got it right!';

export default function ChatForm({ onAddComment }) {
	const [enteredMessage, setEnteredMessage] = useState(initalMessage);

	const submitHandler = e => {
		e.preventDefault();
		if (!enteredMessage) return;

		const guestComment = {
			author: { name: 'Guest', picture: 'img/guest.jpg' },
			text: enteredMessage,
			id: Math.random(),
			timestamp: Date.now(),
		};
		onAddComment(guestComment);
		setEnteredMessage('');
	};

	return (
		<form className={classes['chat-form']} onSubmit={submitHandler}>
			<Button className={classes['button--add']} type="button">
				&#x0002B;
			</Button>
			<input
				type="text"
				value={enteredMessage}
				onChange={e => setEnteredMessage(e.target.value)}
			/>
			<Button className={classes['button--send']} type="submit">
				<img src={IconSend} alt="paper airplane" />
				Send Message
			</Button>
		</form>
	);
}
