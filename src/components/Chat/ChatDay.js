import UserComment from '../User/UserComment';
import { WEEK_DAYS } from '../../config/days';
import { getDateFromTimestamp } from '../../helpers/date';
import { getCommentReplyCount } from '../../helpers/comment';
import classes from './ChatDay.module.css';

export default function ChatDay({ chat }) {
	const firstChatEntry = chat[0];
	const [chatDay, ...chatDate] = getDateFromTimestamp(firstChatEntry);

	return (
		<div className={classes['chat-day']}>
			<span className={classes.date}>
				{`${WEEK_DAYS[chatDay]}, ${chatDate.join('.')}`}
			</span>

			<div className={classes.grid}>
				{chat.map(comment => {
					return (
						<UserComment
							{...comment}
							key={comment.timestamp}
							timesReplied={getCommentReplyCount(comment, chat)}
						/>
					);
				})}
			</div>
		</div>
	);
}
