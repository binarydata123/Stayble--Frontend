import React from 'react';
import styles from './articles.module.css';
import { Col, Image, Row } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;
import ButtonUI from '../../../commonUl/ButtonUI';
import Titles from '@/commonUl/Titles';
import ParaText from '@/commonUl/ParaText';
import ShowImage from '@/commonUl/ShowImage';

interface ArticlesAboutCarsProps {
	showSection: boolean;
}
export default function ArticlesAboutCars({ showSection }: ArticlesAboutCarsProps) {
	const blogPosts = [
		{
			imageUrl: '/images/blog/oneBlog.png',
			title: 'Car manufacturers called on to do more to protect pets',
			date: '25 Apr 2023',
			content: 'Car manufacturers are being welcomed to improve their driver assistance systems to stop for pets as a carwow investigation...',
			learnMoreLink: '#'
		},
		{
			imageUrl: '/images/blog/ThreeBlog.png',
			title: 'RocketCarSell Car of the Year Awards 2023',
			date: '25 Apr 2023',
			content: 'The Audi A6 has won carwow Car of the Year 2018. It beat off tough competition from the Mercedes A-Class in a unique...',
			learnMoreLink: '#'
		},
		{
			imageUrl: '/images/blog/twoBlog.png',
			title: 'The November Dealer of the Month is…',
			date: '25 Apr 2023',
			content: 'Our top priority at carwow is providing a great experience for all customers. We only work with dealers who share this goal...',
			learnMoreLink: '#'
		}
	];

	return (
		<>
			<div id="articlesAboutCars">
				<div className="mainContainer">
					{showSection && (
						<div className={styles.headingTitle}>
							<Row align={'middle'}>
								<Col lg={20}>
									<Titles level={3}> Articles about cars</Titles>
									<Titles level={5} className="fontTwenty">
										The latest industry news, interviews, technologies, and resources.
									</Titles>
								</Col>
								<Col lg={4} className="textRight  paddingVerticalMedium">
									<ButtonUI label="View all posts" className="mNone" />
								</Col>
							</Row>
						</div>
					)}

					<Row className={styles.blogRow} gutter={16}>
						{blogPosts.map((post, index) => (
							<Col key={index} xl={8} md={8} sm={12} xs={24}>
								<Card
									style={{ background: '#EEF3F6' }}
									id="cardStyle"
									bordered={false}
									cover={<ShowImage size={100} src={post.imageUrl} alt="Blog Image" />}
								>
									<div className={styles.articlesAboutCarsMain}>
										<div className={styles.articleFlex}>
											<span className={styles.titleSub}>Article</span>
											<span className={styles.date}>{post.date}</span>
										</div>
										<Titles level={5}>{post.title}</Titles>
										<div className={styles.description}>
											<ParaText size="medium">{post.content}</ParaText>
										</div>
										<div className="gapMargin"></div>
										<a href={post.learnMoreLink}>
											Learn more <Image src="/images/arrow right.svg" alt="arrow Right" />
										</a>
									</div>
								</Card>
							</Col>
						))}
						<Col lg={12} xs={24} className="textRight  paddingVerticalMedium mCenter">
							<ButtonUI label="View all posts" className="buttonNoneTab" />
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}
