import { cloneObject } from './tools';
import { adjustComments } from './comment';
import { groupCommentsByDate } from './comment';

export const createChat = comments => {
	const clonedComments = cloneObject(comments);
	const adjustedComments = adjustComments(clonedComments);
	return groupCommentsByDate(adjustedComments);
};
