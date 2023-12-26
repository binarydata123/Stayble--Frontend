import React from 'react';
import styles from './bannerSection.module.css';
import { FaArrowRight } from 'react-icons/fa';
import { Col, Image, Row } from 'antd';
import CarInfo from '../CarInfo';
import ParaText from '@/commonUl/ParaText';
import Titles from '@/commonUl/Titles';
import ShowImage from '@/commonUl/ShowImage';

export default function BannerSection() {
	return (
		<>
			<section className={styles.bannerPart}>
				<div className="mainContainer">
					<Row align="middle">
						<Col xl={8} md={24} xs={24}>
							<div className={styles.topBannerCar}>
								<div className={styles.linkTextBanner}>
									<a href="#" className={styles.carPrice}>
										Car Price?
									</a>
									<a href="#" className={styles.textLink}>
										Get Professional Evaluation <FaArrowRight />
									</a>
								</div>
								<Titles color="light" className={styles.Launch}>
									Launch Your Car Sale to New Heights!
								</Titles>
								<div className="gapMargin"></div>
								<ParaText size="large" color="light">
									Use our free car valuation service of
									<br /> make and model to determine the
									<br /> best used car price.
								</ParaText>
							</div>
						</Col>
						<Col xl={16} md={24} xs={24}>
							<div className={styles.carBannerImage}>
								<div className="">
									<ShowImage src="/images/car.png" alt="car Banner" size={100} className={styles.carBannerImg} />
								</div>
								<CarInfo />
							</div>
						</Col>
					</Row>
				</div>
			</section>
		</>
	);
}
