'use client';
import { Col, Row } from 'antd';
import React from 'react';
import styles from './carFeatures.module.css';
import ButtonUI from '@/commonUl/ButtonUI';
import ParaText from '@/commonUl/ParaText';
import Titles from '@/commonUl/Titles';
import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa6';
import MenuMechanic from '@/commonUl/Menumechanic';
import FormInput from '@/commonUl/FormInput';
import CheckBox from '@/commonUl/CheckBox';

export default function CarFeatures() {
	return (
		<>
			<section className={styles.dashboard}>
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
								<Col xl={20} md={20} sm={16} xs={16} className="alignCenter">
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
						<div className={styles.dashBody}>
							<Row gutter={16} align={'middle'}>
								<Col xl={4} md={4} sm={24} xs={24}></Col>
								<Col xl={16} md={16} sm={24} xs={24}>
									<Titles level={3} className="alignCenter">
										Car Features
									</Titles>

									<div className="cardPart">
										<Titles level={5}>Exterior</Titles>
										<Row gutter={16} align={'middle'}>
											<Col xl={12} md={12} sm={24} xs={24}>
												<CheckBox title="Heated Windshield" />
												<CheckBox title="ABS" />
												<CheckBox title="Distance Warning" />
												<CheckBox title="ESP" />
												<CheckBox title="Cruise Control" />
												<CheckBox title="Light Sensor" />
												<CheckBox title="Fog Lights " />
											</Col>
											<Col xl={12} md={12} sm={24} xs={24}>
												<CheckBox title="Panoramic Roof" />
												<CheckBox title="Roof Rails" />
												<CheckBox title="Sport Package" />
												<CheckBox title="Sport Suspension" />
												<CheckBox title="Bi-Xenon" />
												<CheckBox title="Emergency Braking Assistant" />
											</Col>
										</Row>
									</div>
									<br />

									<div className="cardPart ">
										<Titles level={5}>Interior</Titles>
										<Row gutter={16} align={'middle'}>
											<Col xl={12} md={12} sm={24} xs={24}>
												<CheckBox title="Heated Windshield" />
												<CheckBox title="ABS" />
												<CheckBox title="Distance Warning" />
												<CheckBox title="ESP" />
												<CheckBox title="Cruise Control" />
											</Col>
											<Col xl={12} md={12} sm={24} xs={24}>
												<CheckBox title="Panoramic Roof" />
												<CheckBox title="Roof Rails" />
												<CheckBox title="Sport Package" />
												<CheckBox title="Sport Suspension" />
											</Col>
										</Row>
									</div>

									<div className="cardPart ">
										<Titles level={5}>Other</Titles>
										<FormInput placeHolder="Unique features" className="modalInput" />
										<ParaText size="small">Seperate features with commas</ParaText>
									</div>
									<br />
									<div className="alignCenter">
										<ButtonUI label="Continue " type="primary"></ButtonUI>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</section>
		</>
	);
}
