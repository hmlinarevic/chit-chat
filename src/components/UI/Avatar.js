import classes from './Avatar.module.css';

export default function Avatar({ picture }) {
	return (
		<div className={classes.avatar}>
			<img
				className={classes['avatar__img']}
				src={`./${picture}`}
				alt="user avatar"
			/>
		</div>
	);
}
