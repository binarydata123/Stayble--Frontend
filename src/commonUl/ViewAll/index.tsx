import React from 'react';
import { Switch as AntSwitch } from 'antd';
import ParaText from '../ParaText';
import { FiArrowRight } from "react-icons/fi";

export default function ViewAll() {
	return (
		<>
			<a href="#">
				<ParaText size="small" color="neutralColor">
					 <b>View all</b> <FiArrowRight />
				</ParaText>
			</a>
		</>
	);
}
