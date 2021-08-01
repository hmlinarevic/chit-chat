import classes from './Avatar.module.css';

export default function Avatar({ picture, className }) {
	return (
		<div className={`${classes['avatar']} ${classes[className]}`}>
			<img
				className={classes['avatar__img']}
				src={`./${picture}`}
				alt="user avatar"
			/>
		</div>
	);
}
