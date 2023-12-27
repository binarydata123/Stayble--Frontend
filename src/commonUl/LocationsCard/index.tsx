import React from 'react';
import { Switch as AntSwitch } from 'antd';
import ParaText from '../ParaText';
import { FiArrowRight } from "react-icons/fi";
import ShowImage from '../ShowImage';
import Image from 'next/image';
import Titles from '../Titles';
import styles from './locationsCard.module.css';

export default function LocationsCard() {
	return (
		<>
			<div className="textCenter"> 
				<div className={styles.locationsCard}> 
				<Image src="/images/card-img.png" alt="Your External Image" width={500} height={500}  />
				<br/>
				<ParaText size="medium" color='primaryColor'><b>Kissimmee East</b></ParaText>
				<Titles level={5} color='neutralColor'> Experience Kissimmee</Titles> 
				<a href="#"><ParaText size="medium" color='darkgray'>View Locations</ParaText></a> 
				</div>
           </div>
		</>
	);
}
