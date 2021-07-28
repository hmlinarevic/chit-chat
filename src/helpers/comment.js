import { getDateFromTimestamp } from './date';

export const adjustComments = comments => {
	sortByTimestamp(comments);
	addFullDateProp(comments);
	return comments;
};

const sortByTimestamp = comments => {
	comments.sort((firstComment, secondComment) => {
		return firstComment.timestamp > secondComment.timestamp;
	});
};

const addFullDateProp = comments => {
	const propName = 'fullDate';
	comments.forEach(comment => {
		const [, day, month, year] = getDateFromTimestamp(comment);
		comment[propName] = `${day}-${month < 10 ? '0' + month : month}-${year}`;
	});
};

const listUniqueCommentDates = comments => {
	return [...new Set(comments.map(comment => comment.fullDate))];
};

const filterCommentsByDate = (comments, date) => {
	return comments.filter(comment => comment.fullDate === date);
};

export const groupCommentsByDate = comments => {
	return listUniqueCommentDates(comments).map(date => {
		return { [date]: filterCommentsByDate(comments, date) };
	});
};

export const getCommentReplyCount = (currentComment, commentsList) => {
	let replyCount = 0;
	commentsList.forEach(comment => {
		comment.parent_id === currentComment.id && ++replyCount;
	});
	return replyCount;
};

export const getCommentPostTime = timestamp => {
	const date = new Date(timestamp);
	return date.toLocaleString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	});
};
