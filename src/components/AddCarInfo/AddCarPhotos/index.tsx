'use client';
import { Col, Row } from 'antd';
import React from 'react';
import styles from './addCarPhotos.module.css';
import ButtonUI from '@/commonUl/ButtonUI';
import Titles from '@/commonUl/Titles';
import { FaChevronLeft } from 'react-icons/fa6';
import { FaChevronRight } from 'react-icons/fa6';
import MenuMechanic from '@/commonUl/Menumechanic';
import FileUploader from '@/commonUl/FileUploader';
export default function AddCarPhotos() {
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
									<div className={styles.iconButton}>
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
						<div className={`${styles.dashBody} ${styles.spacingTop}`}>
							<Row gutter={16} align={'middle'}>
								<Col xl={5} md={5} sm={24} xs={24}></Col>
								<Col xl={14} md={14} sm={24} xs={24}>
									<Titles level={3} className="alignCenter">
										Add car photos
									</Titles>
									<div className={styles.fileUploadHeight}>
										<FileUploader title="" />
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
