import React from 'react';
import styles from './dealershipAuctions.module.css';
import { Badge, Col, Flex, Row } from 'antd';
import ShowImage from '../../../commonUl/ShowImage';
import { ClockIcon, HeartIcon } from '@heroicons/react/20/solid';
export default function DealershipAuctions() {
	return (
		<>
			<div className={styles.dealershipAuctions}>
				<div className={styles.carSection}>
					<Row gutter={16} className="reviewTitleMain">
						<Col xl={4} xxl={4} lg={6} md={6} sm={24} xs={24}>
							<div className={styles.reviewTitle}>
								<ShowImage src="/images/sell-car.png" alt="Rocket car sell logo" size="smallSize2" />
								<div className={styles.carReview}>
									<HeartIcon width={15} height={15} color="#fff" />
								</div>
							</div>
						</Col>
						<Col xl={16} xxl={16} lg={16} md={24} sm={24} xs={24}>
							<div className={styles.reviewTitle}>
								<h6>2023 BMW Series 4 M Performance</h6>
								<Flex align="start" className={styles.flexBox}>
									<li>32 000 km</li>
									<li>Automatic</li>
									<li>Cabrio</li>
									<li>Diesel</li>
									<li>320HP</li>
								</Flex>
							</div>
							<div className={styles.startPrice}>
								<Flex align="start" className={styles.flexBox}>
									<div className={styles.startPriceLeft}>
										<span>Start Price</span>
										<p>$51,480</p>
									</div>
									<div className={styles.startPriceLeft}>
										<span>Minimum Bid</span>
										<p>$51,480</p>
									</div>
									<div className={styles.startPriceLeft}>
										<span>Highest Bid</span>
										<p>$51,480</p>
									</div>
								</Flex>
							</div>
						</Col>
						<Col xl={4} xxl={4} lg={2} md={24} sm={24} xs={24}>
							<div className={styles.floatRight}>
								<div className={`${styles.lastChance} ${styles.live}`}>
									<Badge status="success" text="Live" />
								</div>
								<Flex align="center">
									<div className={`${styles.timeLeft} ${styles.colorChange}`}>
										<span>Time left</span>
										<p className={styles.flexBox}>
											<ClockIcon width={20} height={20} color="#1F354F" /> 00:00:57
										</p>
									</div>
								</Flex>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}
