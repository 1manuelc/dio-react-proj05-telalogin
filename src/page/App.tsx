import styles from './App.module.css';
import Button from '../components/Button/Button';
import InputText from '../components/InputText/InputText';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface IFormData {
	email?: string;
	password?: string;
}

const schema = yup.object({
	email: yup.string().email('Email inválido'),
	password: yup.string().min(8, 'Senha deve conter no mínimo 8 caracteres'),
});

const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onTouched',
	});

	const onSubmitFn = (data: IFormData) => {
		alert(`Login bem sucedido!\n ${JSON.stringify(data)}`);
	};

	return (
		<div className={styles.App}>
			<div className={styles.loginContainer}>
				<h1 className={styles.title}>Login</h1>
				<form className={styles.form} onSubmit={handleSubmit(onSubmitFn)}>
					<InputText
						name='email'
						displayLabel={true}
						labelText='Email'
						placeholderText='Seu melhor email'
						register={register}
						type='email'
						error={errors.email?.message?.toString()}
					/>
					<InputText
						name='password'
						displayLabel={true}
						labelText='Senha'
						placeholderText='No mínimo 8 dígitos'
						register={register}
						error={errors.password?.message?.toString()}
						type='password'
					/>
					<Button text='Entrar' shouldSubmit={true} isDisabled={!isValid} />
				</form>
			</div>
		</div>
	);
};

export default App;
