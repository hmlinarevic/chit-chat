import Avatar from '../UI/Avatar';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './UserComment.module.css';
import { getCommentPostTime } from '../../helpers/comment';

export default function UserComment({
	author,
	text,
	parent_id,
	timestamp,
	timesReplied,
}) {
	return (
		<div className={`${classes.comment} ${parent_id ? classes.child : ''}`}>
			<div className={classes.container}>
				<Avatar picture={author.picture} />
				<Card>
					<span className={classes.author}>{author.name}</span>
					<p className={classes.text}>{text}</p>
				</Card>
				<footer className={classes.footer}>
					{getCommentPostTime(timestamp)}{' '}
					<span className={classes.dot}>&#183;</span>
					<Button className={classes.button}>
						Reply {timesReplied > 0 ? `(${timesReplied})` : ''}
					</Button>
				</footer>
			</div>
		</div>
	);
}
