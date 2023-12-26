import React from 'react';
import './style.css';
import { Col, Image, Row } from 'antd';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Titles from '@/commonUl/Titles';
import ParaText from '@/commonUl/ParaText';

const cardData = [
	{
		title: 'Sedans',
		imageSrc: '/images/card/_Feature-car.png',
		altText: '_Feature-car',
		link: '#',
		category: 'Discover'
	},
	{
		title: 'SUV’s',
		imageSrc: '/images/card/_Feature-bmw.png',
		altText: '_Feature-car',
		link: '#',
		category: 'Discover'
	},
	{
		title: 'Coupes',
		imageSrc: '/images/card/_Feature-odi.png',
		altText: 'Coupes',
		link: '#',
		category: 'Discover'
	},
	{
		title: 'Cabriolet’s',
		imageSrc: '/images/card/_Feature-thar.png',
		altText: 'Cabriolet’s',
		link: '#',
		category: 'Discover'
	}
];

export default function TheMostPopularCar() {
	return (
		<>
			<div className="theMostPopularCar paddingVerticalExtraLarge">
				<div className="mainContainer">
					<Titles level={3} className="textCenter marginBottomThree">
						The Most Popular Car Types
					</Titles>
					<Row className="gutter-row" align={'middle'} gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
						{cardData.map((card, index) => (
							<Col key={index} xl={6} md={6} sm={12} xs={12}>
								<div className="mostPopularCar">
									<div className="imageCarTitle">
										<Image src={card.imageSrc} alt={card.altText} />
										<div className="mostPopularCarTitle">
											<Titles level={5} color="light">
												{card.title}
											</Titles>
											<a href={card.link}>
												<Titles level={4} color="#FFEA29">
													{card.category}
													<ArrowRightIcon width={20} />
												</Titles>
											</a>
										</div>
									</div>
								</div>
							</Col>
						))}
					</Row>
				</div>
			</div>
		</>
	);
}
