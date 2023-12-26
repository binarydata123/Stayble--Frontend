import React from 'react';
import { Select } from 'antd';
import styles from './selectBox.module.css';
const handleChange = (value: string) => {
	console.log(`selected ${value}`);
};
export default function SelectBox() {
	return (
		<>
			<Select
				className={styles.selectFiled}
				defaultValue="lucy"
				onChange={handleChange}
				options={[
					{ value: 'Role', label: 'Role' },
					{ value: 'Role', label: 'Role' }
				]}
			/>
		</>
	);
}
