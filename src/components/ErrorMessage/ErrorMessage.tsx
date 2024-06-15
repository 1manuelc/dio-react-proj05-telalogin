import styles from './ErrorMessage.module.css';

interface IErrorMessage {
	message?: string;
}

const ErrorMessage = ({ message }: IErrorMessage) => {
	return <div className={styles.container}>{message}</div>;
};

export default ErrorMessage;
