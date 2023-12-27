import React from 'react';
import styles from './emailFiled.module.css'; 
import SecondaryButton from '../SecondaryButton';

export default function EmailFiled() {
	return (
		<> 
			<div className={styles.emailFiled}>
                  <input type='text' placeholder='Email Address' /> 
				  <SecondaryButton label='Subscribe' className={`mediumButton ${styles.SubscribeButton}`}/>
                </div> 
		</>
	);
}

