export const getDateFromTimestamp = ({ timestamp }) => {
	const zeroIndexOffset = 1;
	const date = new Date(timestamp);
	return [
		date.getDay(),
		date.getDate(),
		date.getMonth() + zeroIndexOffset,
		date.getFullYear(),
	];
};
