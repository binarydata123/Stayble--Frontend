'use client';
import { Col, Row } from 'antd';
import React from 'react';
import styles from './mechanicReport.module.css';
import ButtonUI from '@/commonUl/ButtonUI';
import Titles from '@/commonUl/Titles';
import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa6';
import MenuMechanic from '@/commonUl/Menumechanic';
import ImageText from '@/commonUl/ImageText';
import RateStar from '@/commonUl/RateStar';
import ReviewTextarea from '@/commonUl/ReviewTextarea';

export default function MechanicReport() {
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
								<Col xl={5} md={5} sm={24} xs={24}></Col>
								<Col xl={14} md={14} sm={24} xs={24}>
									<Titles level={3} className="alignCenter">
										Mechanic Report
									</Titles>
									<div className={styles.cardPart}>
										<div className={styles.cardPanel}>
											<Row gutter={16} align={'middle'} className="AlignCenter RowBottomMargin10">
												<Col xl={14} md={14} sm={24} xs={24}>
													<ImageText
														imagePath="/images/CarReviewIcon/CarReviewIcon1.png"
														altText="Car Review Icon"
														title="Suspension and Steering"
													/>
												</Col>
												<Col xl={10} md={10} sm={24} xs={24} className="alignRight mobileCenter">
													<RateStar />
												</Col>
											</Row>
											<br />
											<ReviewTextarea placeholder="Describe car condition, equipment etc." height={93} maxLength={200} />
										</div>
									</div>
									<br />
									<div className={styles.cardPart}>
										<div className={styles.cardPanel}>
											<Row gutter={16} align={'middle'} className="AlignCenter RowBottomMargin10">
												<Col xl={14} md={14} sm={24} xs={24}>
													<ImageText
														imagePath="/images/CarReviewIcon/CarReviewIcon2.png"
														altText="Car Review Icon"
														title="Exterior and Body"
													/>
												</Col>
												<Col xl={10} md={10} sm={24} xs={24} className="alignRight mobileCenter">
													<RateStar />
												</Col>
											</Row>
											<br />
											<ReviewTextarea placeholder="Describe car condition, equipment etc." height={93} maxLength={200} />
										</div>
									</div>
									<br />
									<div className={styles.cardPart}>
										<div className={styles.cardPanel}>
											<Row gutter={16} align={'middle'} className="AlignCenter RowBottomMargin10">
												<Col xl={14} md={14} sm={24} xs={24}>
													<ImageText
														imagePath="/images/CarReviewIcon/CarReviewIcon3.png"
														altText="Car Review Icon"
														title="Brakes"
													/>
												</Col>
												<Col xl={10} md={10} sm={24} xs={24} className="alignRight mobileCenter">
													<RateStar />
												</Col>
											</Row>
											<br />
											<ReviewTextarea placeholder="Describe car condition, equipment etc." height={93} maxLength={200} />
										</div>
									</div>
									<br />
									<div className={styles.cardPart}>
										<div className={styles.cardPanel}>
											<Row gutter={16} align={'middle'} className="AlignCenter RowBottomMargin10">
												<Col xl={14} md={14} sm={24} xs={24}>
													<ImageText
														imagePath="/images/CarReviewIcon/CarReviewIcon4.png"
														altText="Car Review Icon"
														title="Engine and Fluids"
													/>
												</Col>
												<Col xl={10} md={10} sm={24} xs={24} className="alignRight mobileCenter">
													<RateStar />
												</Col>
											</Row>
											<br />
											<ReviewTextarea placeholder="Describe car condition, equipment etc." height={93} maxLength={200} />
										</div>
									</div>
									<br />
									<div className={styles.cardPart}>
										<div className={styles.cardPanel}>
											<Row gutter={16} align={'middle'} className="AlignCenter RowBottomMargin10">
												<Col xl={14} md={14} sm={24} xs={24}>
													<ImageText
														imagePath="/images/CarReviewIcon/CarReviewIcon5.png"
														altText="Car Review Icon"
														title="Interior and Electrical System"
													/>
												</Col>
												<Col xl={10} md={10} sm={24} xs={24} className="alignRight mobileCenter">
													<RateStar />
												</Col>
											</Row>
											<br />
											<ReviewTextarea placeholder="Describe car condition, equipment etc." height={93} maxLength={200} />
										</div>
									</div>
									<br />
									<div className={styles.cardPart}>
										<div className={styles.cardPanel}>
											<Row gutter={16} align={'middle'} className="AlignCenter RowBottomMargin10">
												<Col xl={14} md={14} sm={24} xs={24}>
													<ImageText
														imagePath="/images/CarReviewIcon/CarReviewIcon6.png"
														altText="Car Review Icon"
														title="Tires and Wheels"
													/>
												</Col>
												<Col xl={10} md={10} sm={24} xs={24} className="alignRight mobileCenter">
													<RateStar />
												</Col>
											</Row>
											<br />
											<ReviewTextarea placeholder="Describe car condition, equipment etc." height={93} maxLength={200} />
										</div>
									</div>
									<br />
									<div className="alignCenter">
										<ButtonUI label="Continue " type="primary">
											{' '}
										</ButtonUI>
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
