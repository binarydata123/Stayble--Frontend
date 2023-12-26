import React from 'react';
import styles from './emailFiled.module.css';
import FormInput from '../FormInput';

export default function EmailFiled() {
	return (
		<>
			<div className='emailFiled'>
                <FormInput placeHolder="Year"  />
            </div>
		</>
	);
}

