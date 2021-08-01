import UserComment from '../User/UserComment';
import { isToday } from '../../helpers/date';
import { getDateParts } from '../../helpers/date';
import { getDayAndDateString } from '../../helpers/date';
import { getCommentReplyCount } from '../../helpers/comment';
import { addClassIfCommentIsReply } from '../../helpers/comment';
import classes from './ChatDay.module.css';

export default function ChatDay({ chat }) {
	const firstChat = chat[0];
	const [day, ...date] = getDateParts(firstChat);

	// add class and draw reply line next to user avatar
	addClassIfCommentIsReply(chat);

	return (
		<div className={classes['chat-day']}>
			<span className={classes['chat-day__date']}>
				{isToday(date) ? 'Today' : `${getDayAndDateString(day, date)}.`}
			</span>

			<div className={classes['chat-day__grid']}>
				{chat.map(comment => (
					<UserComment
						{...comment}
						key={comment.timestamp}
						replyCount={getCommentReplyCount(comment, chat)}
					/>
				))}
			</div>
		</div>
	);
}
