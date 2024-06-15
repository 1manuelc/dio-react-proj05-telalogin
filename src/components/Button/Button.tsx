import styles from './Button.module.css';

interface IButton {
	text: string;
	isDisabled?: boolean;
	shouldSubmit?: boolean;
}

const Button = ({ text, isDisabled = false, shouldSubmit = true }: IButton) => {
	const defineButtonType = () => {
		return shouldSubmit ? 'submit' : 'button';
	};

	return (
		<button
			type={defineButtonType()}
			className={styles.button}
			disabled={isDisabled}
		>
			{text}
		</button>
	);
};

export default Button;
