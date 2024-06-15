/* eslint-disable @typescript-eslint/ban-types */
import styles from './InputText.module.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface IInputText {
	displayLabel?: boolean;
	name: string;
	labelText?: string;
	placeholderText?: string;
	rest?: string;
	register: Function;
	type?: string;
	error?: string;
}

const InputText = ({
	displayLabel = false,
	name,
	labelText,
	placeholderText = '',
	register,
	type = 'text',
	error,
}: IInputText) => {
	const handleDisplayLabel = (): JSX.Element | undefined => {
		return displayLabel ? (
			<label className={styles.label} htmlFor={name}>
				{labelText}
			</label>
		) : undefined;
	};

	return (
		<div className={styles.container}>
			{handleDisplayLabel()}
			<input
				className={styles.inputText}
				type={type}
				name={name}
				placeholder={placeholderText}
				{...register(name)}
			/>
			;{error && <ErrorMessage message={error} />}
		</div>
	);
};

export default InputText;
