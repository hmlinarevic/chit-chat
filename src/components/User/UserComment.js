import Avatar from '../UI/Avatar';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './UserComment.module.css';
import { getCommentPostTime } from '../../helpers/comment';

export default function UserComment({
	parent_id,
	author,
	text,
	timestamp,
	replyCount,
	isReply,
}) {
	return (
		<div className={`${classes.comment} ${parent_id ? classes.child : ''}`}>
			<div className={classes.content}>
				<Avatar
					picture={author.picture}
					className={isReply ? 'avatar--reply' : ''}
				/>
				<Card>
					<span className={classes.author}>{author.name}</span>
					<p className={classes.text}>{text}</p>
				</Card>
				<footer className={classes.footer}>
					{getCommentPostTime(timestamp)}{' '}
					<span className={classes.dot}>&#183;</span>
					<Button className={classes.button}>
						Reply {replyCount > 0 ? `(${replyCount})` : ''}
					</Button>
				</footer>
			</div>
		</div>
	);
}
