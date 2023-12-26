'use client';
import React, { useState } from 'react';
import styles from './availability.module.css';
import { Col, Row } from 'antd';
import ButtonUI from '../../../commonUl/ButtonUI';
import CheckBox from '../../../commonUl/CheckBox';
import { Modal } from 'antd';
import FormInput from '../../../commonUl/FormInput';
import Titles from '@/commonUl/Titles';

export default function Availability() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div className="mainContainer">
				<div className={styles.form}>
					<div className={styles.formPart}>
						<Titles level={5}>
							Set your availability, <br />
							let the mechanic know
						</Titles>
						<form className={styles.bannerForm}>
							<Row gutter={16}>
								<Col xl={24}>
									<label className={styles.labelText}>Date</label>
									<FormInput />
								</Col>
								<Col xl={24}>
									<label className={styles.labelText}>Time</label>
									<FormInput />
								</Col>
								<Row justify="start">
									<Col xl={24} className={styles.textLeft}>
										<CheckBox />
									</Col>
								</Row>
							</Row>
							<Row className="marginTop30" gutter={16} align={'middle'}>
								<Col xl={4} className={styles.paddingUse}>
									<div className={styles.arrowBack}>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
											<path d="M12.875 14.125L11 16L3 8L11 0L12.875 1.875L6.75 8L12.875 14.125Z" fill="#4C5D72" />
										</svg>
									</div>
								</Col>
								<Col xl={20} className={styles.paddingUse}>
									<ButtonUI
										label="Book an appointment"
										color="#1F354F"
										background="#FFEA29"
										width="100%"
										className="btnCommon"
										onClick={showModal}
									/>
								</Col>
							</Row>
						</form>
					</div>
				</div>
			</div>
			<Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</>
	);
}
