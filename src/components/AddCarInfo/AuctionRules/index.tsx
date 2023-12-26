'use client';
import { Col, Row } from 'antd';
import React from 'react';
import styles from './auctionRules.module.css';
import ButtonUI from '@/commonUl/ButtonUI';
import Titles from '@/commonUl/Titles';
import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa6';
import MenuMechanic from '@/commonUl/Menumechanic';
import FormInput from '@/commonUl/FormInput';
import ParaText from '@/commonUl/ParaText';
import Switch from '@/commonUl/Switch';
import { BsClock } from 'react-icons/bs';
import { MdOutlineCalendarToday } from 'react-icons/md';

export default function AuctionRules() {
	return (
		<>
			<section className="Dashboard">
				<Row>
					<Col xl={5} md={5} sm={24} xs={24} className={styles.leftBack}>
						<MenuMechanic />
					</Col>
					<Col xl={19} md={19} sm={24} xs={24} className={styles.backgroundGray}>
						<div className={styles.headerDashboard}>
							<Row gutter={16} align={'middle'}>
								<Col xl={2} md={2} sm={4} xs={4}>
									<div className="iconButton">
										<ButtonUI type="gray" icon={<FaChevronLeft className="iconGap" />}></ButtonUI>
									</div>
								</Col>
								<Col xl={20} md={20} sm={16} xs={16} className="alignCenter mobileCenter">
									<Titles level={3}>New listing</Titles>
								</Col>
								<Col xl={2} md={2} sm={4} xs={4}>
									<div className="iconButton">
										<ButtonUI type="gray" icon={<FaChevronRight className="iconGap" />}></ButtonUI>
									</div>
								</Col>
							</Row>
						</div>
						<div className={styles.stepProgress}>
							<div className={styles.progress}></div>
						</div>
						<div className={`${styles.dashBody} ${styles.spacingTop}`}>
							<Row gutter={16} align={'middle'}>
								<Col xl={7} md={4} sm={24} xs={24}></Col>
								<Col xl={10} md={16} sm={24} xs={24}>
									<div className={`${styles.formPart} ${styles.spacingTop}`}>
										<Titles level={3} className="alignCenter">
											Auction Rules
										</Titles>
										<FormInput placeHolder="Minimal Price in AED" className="modalInput" />
										<div className="gapMargin"></div>
										<Row gutter={16}>
											<Col xl={20} md={20} sm={20} xs={20}>
												<ParaText size="medium">
													<b>Express Sale</b>
												</ParaText>
											</Col>
											<Col xl={4} md={4} sm={4} xs={4} className="alignRight">
												<div className="switchButton">
													<Switch />
												</div>
											</Col>
										</Row>
										<div className="gapMargin"></div>
										<ParaText size="medium">
											<b>Auction Start Date and Time</b>
										</ParaText>
										<div className="gapMargin"></div>
										<div className="gapMargin"></div>
										<FormInput placeHolder="Start Date" prefix={<MdOutlineCalendarToday />} className="modalInput" />
										<div className="gapMargin"></div>
										<Row gutter={16} align={'middle'}>
											<Col xl={12} md={12} sm={24} xs={24} className="MarginBottomXMobile">
												<FormInput placeHolder="Start Time" prefix={<BsClock />} className="modalInput" />
											</Col>
											<Col xl={12} md={12} sm={24} xs={24}>
												<FormInput placeHolder="Duration Time" prefix={<BsClock />} className="modalInput" />
											</Col>
										</Row>

										<div className="gapMargin"></div>
										<div className="alignCenter">
											<ButtonUI label="Continue" type="gray"></ButtonUI>
										</div>
									</div>
								</Col>
								<Col xl={7} md={7} sm={24} xs={24}></Col>
							</Row>
						</div>
					</Col>
				</Row>
			</section>
		</>
	);
}
