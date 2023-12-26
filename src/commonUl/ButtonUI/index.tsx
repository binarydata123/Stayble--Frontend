import React from 'react';
import styles from './buttonUI.module.css';
import { Button } from 'antd';
import { FaCarAlt } from 'react-icons/fa';

export default function ButtonUI() {
	return (
		<>
			<div className="customContainer">
				<div>
					<Button
						type='primary'
					>
						Hello
					</Button>
				</div>
			</div>
		</>
	);
}
