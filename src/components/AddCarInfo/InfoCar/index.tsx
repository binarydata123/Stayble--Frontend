'use client';
import { Col, Row } from 'antd';
import React from 'react';
import styles from './infoCar.module.css';
import ButtonUI from '@/commonUl/ButtonUI';
import Titles from '@/commonUl/Titles';
import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa6';
import MenuMechanic from '@/commonUl/Menumechanic';
import SelectBox from '@/commonUl/SelectBox';
import FormInput from '@/commonUl/FormInput';

export default function InfoCar() {
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
						<div className={styles.dashBody}>
							<Row gutter={16} align={'middle'}>
								<Col xl={7} md={4} sm={24} xs={24}></Col>
								<Col xl={10} md={16} sm={24} xs={24}>
									<div className="formPart">
										<Titles level={3} className="alignCenter">
											Enter main info <br />
											of the car
										</Titles>
										<SelectBox />
										<br />
										<br />
										<SelectBox />
										<br />
										<br />
										<Row gutter={16} align={'middle'}>
											<Col xl={12} md={12} sm={24} xs={24} className="MarginBottomXMobile">
												<SelectBox />
											</Col>
											<Col xl={12} md={12} sm={24} xs={24}>
												<FormInput placeHolder="Year" className="modalInput" />
											</Col>
										</Row>
										<br />
										<Titles level={5}>More information</Titles>
										<FormInput placeHolder="Year" className="modalInput" />
										<br />
										<Row gutter={16} align={'middle'}>
											<Col xl={12} md={12} sm={24} xs={24} className="MarginBottomXMobile">
												<SelectBox />
											</Col>
											<Col xl={12} md={12} sm={24} xs={24}>
												<SelectBox />
											</Col>
										</Row>
										<br />
										<SelectBox />
										<br />
										<br />
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
