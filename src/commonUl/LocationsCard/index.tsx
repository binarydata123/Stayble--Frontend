import React from 'react';
import { Switch as AntSwitch } from 'antd';
import ParaText from '../ParaText';
import { FiArrowRight } from "react-icons/fi";
import ShowImage from '../ShowImage';
import Image from 'next/image';

export default function LocationsCard() {
	return (
		<>
			<div className='locationsCard'>
			<ShowImage src="/images/card-img.png" alt="card" size={100} />
			 <Image src="/images/card-img.png" alt="Your External Image" />
			</div>
		</>
	);
}
