'use client';
import React, { useContext, useState } from 'react';
import ShowImage from '@/commonUl/ShowImage';
import ButtonUI from '@/commonUl/ButtonUI';
import FormInput from '@/commonUl/FormInput';
import AuthContext from '@/Context/AuthContext';
import { LockClosedIcon, UserIcon } from '@heroicons/react/20/solid';
import Titles from '@/commonUl/Titles';
interface LoginFormProps {
	logoSrc: string;
	logoAlt: string;
	welcomeMessage: string;
	emailPlaceholder: string;
	passwordPlaceholder: string;
	forgotPasswordText: string;
	buttonText: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
	logoSrc,
	logoAlt,
	welcomeMessage,
	emailPlaceholder,
	passwordPlaceholder,
	forgotPasswordText,
	buttonText
}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login } = useContext(AuthContext);

	const handleLogin = async () => {
		login(email, password).then((res) => {
			//   router.push("/").then();
		});
	};

	return (
		<div className="loginFormTextBox">
			<div className="imageWidth">
				<ShowImage src={logoSrc} alt={logoAlt} size="smallSize" />
			</div>
			<div className="gapMargin"></div>
			<Titles level={3}>{welcomeMessage}</Titles>
			<div className="gapMargin"></div>
			<FormInput
				prefix={<UserIcon width={20} color="#4C5D72" />}
				placeHolder={emailPlaceholder}
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<div className="gapMargin"></div>
			<FormInput
				type="password"
				prefix={<LockClosedIcon width={20} color="#4C5D72" />}
				placeHolder={passwordPlaceholder}
				value={password}
				onChange={(e: any) => setPassword(e.target.value)}
			/>
			<div className="gapMargin"></div>
			<span className="forgetPassword">{forgotPasswordText}</span>
			<div className="gapMargin"></div>
			<ButtonUI label={buttonText} type="gray" width="100%" onClick={handleLogin} />
		</div>
	);
};
export default LoginForm;
