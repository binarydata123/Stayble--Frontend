import React from 'react';
import styles from './sellYourCarCard.module.css';
import { Col, Image, Row } from 'antd';
import ButtonUI from '../../../commonUl/ButtonUI';
import Titles from '@/commonUl/Titles';
import ParaText from '@/commonUl/ParaText';
const cardData = [
	{
		title: 'Schedule a mechanic appointment',
		description: 'Book a visit from our qualified mechanic who will take stunning photos and create a detailed car report.',
		imageSrc: '/images/card/calendar.svg'
	},
	{
		title: 'Car Inspection Made Easy',
		description: 'Our mechanic will inspect your car thoroughly, capturing every detail and identifying any mechanical issues.',
		imageSrc: '/images/card/calendar.svg'
	},
	{
		title: 'Watch Your Car Go Live',
		description: "Sit back as your car goes live on our auction platform. Buyers can view your car's details, photos, and place bids.",
		imageSrc: '/images/card/calendar.svg'
	}
];
export default function SellYourCarCard() {
	return (
		<>
			<div className={styles.sellCarCard}>
				<div className="mainContainer">
					<Titles level={3} className="textCenter marginBottomTwo">
						Sell your car in 3 <span className="spanColor"> simple </span>steps
					</Titles>
					<Row className="gutter-row" align={'middle'} gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
						{cardData.map((card, index) => (
							<Col key={index} xl={8} md={8} sm={12} xs={24}>
								<div className={styles.cardBoxThree}>
									<Image src={card.imageSrc} alt="calendar" />
									<Titles level={5}>{card.title}</Titles>
									<ParaText size="medium">{card.description}</ParaText>
								</div>
							</Col>
						))}
					</Row>

					<div className="textCenter paddingVerticalMedium ">
						<ButtonUI label="Evaluate your car" height={56} />
					</div>
				</div>
			</div>
		</>
	);
}
