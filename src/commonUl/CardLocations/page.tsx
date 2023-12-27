import React from 'react';
import styles from './cardlocations.module.css';
import FormInput from '../FormInput';
import { Button } from 'antd';
import SecondaryButton from '../SecondaryButton';
import ParaText from '../ParaText';
import Titles from '../Titles';
import Image from 'next/image'; 

export default function CardLocations() {
	return (
		<> 
			<div className={styles.locationsCard}> 
                <Image src="/images/Rectangle-5.png" alt="Your External Image" width={800} height={800}/>
                <br/>
                <div  className={styles.textBoxCard}>
                  <ParaText size="large" color='light'><b>Orlando</b></ParaText>
                  <br/>
                  <Titles level={4} color='light'> Orlando Awaits</Titles>
                  <br/>
                  <SecondaryButton label='Book Now' className='smallButton'/>
                </div> 
              </div>
		</>
	);
}

