import classes from './Button.module.css';

export default function Button({ className, type, onClick, children }) {
	return (
		<button
			className={`${classes.button} ${className}`}
			type={type || 'button'}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
