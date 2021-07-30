import { WEEK_DAYS } from '../config/days';

export const getDateParts = ({ timestamp }) => {
	const zeroIndexOffset = 1;
	const date = new Date(timestamp);
	return [
		date.getDay(),
		date.getDate(),
		date.getMonth() + zeroIndexOffset,
		date.getFullYear(),
	];
};

export const isToday = datePartsArray1 => {
	const [, ...datePartsArray2] = getDateParts({
		timestamp: Date.now(),
	});
	return datePartsArray1.join('') === datePartsArray2.join('');
};

export const getDayAndDateString = (day, datePartsArray) => {
	return `${WEEK_DAYS[day]}, ${datePartsArray.join('.')}`;
};
