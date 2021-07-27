const cloneObject = obj => JSON.parse(JSON.stringify(obj));

const sortByTimestamp = comments => {
	comments.sort((firstComment, secondComment) => {
		return firstComment.timestamp > secondComment.timestamp;
	});
};

const getDateFromTimestamp = ({ timestamp }) => {
	const zeroIndexOffset = 1;
	const date = new Date(timestamp);
	return [
		date.getDate(),
		date.getMonth() + zeroIndexOffset,
		date.getFullYear(),
	];
};

const addFullDateProp = comments => {
	const propName = 'fullDate';
	comments.forEach(comment => {
		const [day, month, year] = getDateFromTimestamp(comment);
		comment[propName] = [day, month < 10 ? '0' + month : month, year].join('');
	});
};

const listUniqueDates = comments => {
	return [...new Set(comments.map(comment => comment.fullDate))];
};

const filterCommentsByDate = (comments, date) => {
	return comments.filter(comment => comment.fullDate === date);
};

const listCommentsByDate = comments => {
	return listUniqueDates(comments).map(date => {
		return { [date]: filterCommentsByDate(comments, date) };
	});
};

const adjustComments = comments => {
	sortByTimestamp(comments);
	addFullDateProp(comments);
	return comments;
};

export const createChat = comments => {
	const adjustedComments = adjustComments(cloneObject(comments));
	return listCommentsByDate(adjustedComments);
};
