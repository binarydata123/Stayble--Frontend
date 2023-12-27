"use client"
import React from 'react';
import { Select } from 'antd';
import styles from './selectBox.module.css';

const onChange = (value: string) => {
	console.log(`selected ${value}`);
  };
  
  const onSearch = (value: string) => {
	console.log('search:', value);
  };
 
  const filterOption = (input: string, option?: { label: string; value: string }) =>
	(option?.label ?? '').toLowerCase().includes(input.toLowerCase());


export default function SelectBoxFiled() {
	return (
		<>
			<Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />
		</>
	);
}
