'use client';
import { Col, Row } from 'antd';
import React from 'react';
import styles from './ownerInfo.module.css';
import ButtonUI from '@/commonUl/ButtonUI';
import Titles from '@/commonUl/Titles';
import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa6';
import MenuMechanic from '@/commonUl/Menumechanic';
import FormInput from '@/commonUl/FormInput';
import FileUploader from '@/commonUl/FileUploader';

export default function OwnerInfo() {
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
						<div className={`${styles.dashBody} ${styles.spacingTop}`}>
							<Row gutter={16} align={'middle'}>
								<Col xl={6} md={4} sm={24} xs={24}></Col>
								<Col xl={12} md={16} sm={24} xs={24}>
									<div className={`${styles.formPart} ${styles.spacingTop}`}>
										<Titles level={3} className="alignCenter">
											Owner Private Information
										</Titles>
										<Row gutter={16}>
											<Col xl={12} md={12} sm={24} xs={24} className="MarginBottomXMobile">
												<FormInput placeHolder="Minimal Price in AED" className="modalInput" />
											</Col>
											<Col xl={12} md={12} sm={24} xs={24}>
												<FormInput placeHolder="Minimal Price in AED" className="modalInput" />
											</Col>
										</Row>
										<br />
										<Row gutter={16}>
											<Col xl={12} md={12} sm={24} xs={24} className="MarginBottomXMobile">
												<FormInput placeHolder="Minimal Price in AED" className="modalInput" />
											</Col>
											<Col xl={12} md={12} sm={24} xs={24}>
												<FormInput placeHolder="Minimal Price in AED" className="modalInput" />
											</Col>
										</Row>

										<br />
										<Titles level={5}>Vehicle Documents</Titles>
										<Row gutter={16}>
											<Col xl={12} md={12} sm={24} xs={24} className="MarginBottomXMobile">
												<div className="fileUploadHeight">
													<FileUploader title="" />
												</div>
											</Col>

											<Col xl={12} md={12} sm={24} xs={24}>
												<FileUploader title="" />
											</Col>
										</Row>

										<br />
										<div className="alignCenter">
											<ButtonUI label="Continue" type="gray"></ButtonUI>
										</div>
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
