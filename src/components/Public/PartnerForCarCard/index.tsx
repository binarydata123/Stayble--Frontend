import React from 'react';
import './style.css';
import { Col, Image, Row } from 'antd';
import Titles from '@/commonUl/Titles';
import ParaText from '@/commonUl/ParaText';
const cardData = [
	{
		imageSrc: '/images/card/guaranteed.png',
		altText: 'Guaranteed',
		title: 'Guaranteed Purchase',
		description: 'Sell your car with confidence. Our platform offers a guaranteed purchase.'
	},
	{
		imageSrc: '/images/card/link.png',
		altText: 'link',
		title: 'No Costs. No Obligation',
		description: 'List your car for auction without any upfront costs or obligations. Explore offers at no risk.'
	},
	{
		imageSrc: '/images/card/fast-time.png',
		altText: 'fast-time',
		title: 'Quick and Easy',
		description: 'Selling your car has never been easier. Our streamlined process saves you time and effort.'
	},
	{
		imageSrc: '/images/card/safe.png',
		altText: 'safe',
		title: 'Fast and Secure',
		description: 'Rest assured knowing that your car sale is fast and secure. Our platform employs advanced security.'
	}
];
export default function PartnerForCarCard() {
	return (
		<>
			<div className="paddingVerticalSuperLarge " id="partnerForCarCard">
				<div className="mainContainer">
					<Row gutter={16}>
						<Col className="" lg={8}>
							<div className="partnerText">
								<h2 className="titleSub">
									Your reliable <span className="spanColor">partner</span> for car sales
								</h2>
								<p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.</p>
							</div>
						</Col>
						<Col lg={16}>
							<Row className="gutter-row" align={'middle'} gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
								{cardData.slice(0, 2).map((card, index) => (
									<Col key={index} xl={12} md={12} sm={12} xs={24}>
										<div className="partnerForCarCardTitle">
											<Image src={card.imageSrc} alt={card.altText} />
											<Titles level={3}>
												<h5>{card.title}</h5>
											</Titles>
											<p>{card.description}</p>
										</div>
									</Col>
								))}
							</Row>
							<Row className="gutter-row partnerForCarCardTop " align={'middle'} gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
								{cardData.slice(2).map((card, index) => (
									<Col key={index} xl={12} md={12} sm={12} xs={24}>
										<div className="partnerForCarCardTitle">
											<Image src={card.imageSrc} alt={card.altText} />
											<Titles level={3}>
												<h5>{card.title}</h5>
											</Titles>
											<p>{card.description}</p>
										</div>
									</Col>
								))}
							</Row>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}
