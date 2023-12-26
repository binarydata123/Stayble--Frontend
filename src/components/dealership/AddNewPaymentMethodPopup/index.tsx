import React from 'react';
import styles from './payment.module.css';
import { Col, Row } from 'antd';
import { FiCreditCard } from 'react-icons/fi';
import FormInput from '@/commonUl/FormInput';
import ButtonUI from '@/commonUl/ButtonUI';
import ParaText from '@/commonUl/ParaText';

export default function AddNewPaymentMethodPopup() {
	return (
		<>
			<div className={styles.modalPanel}>
				<ParaText size="medium" className="alignLeft">
					<b>Card Holder</b>
				</ParaText>
				<FormInput placeHolder="Card Holder Name" className="modalInput" />
				<Row align="middle" gutter={16}>
					<Col lg={14} md={14} sm={14} xs={14}>
						<ParaText size="medium" className="alignLeft">
							<b>Card Number</b>
						</ParaText>
						<FormInput placeHolder="Card Number" prefix={<FiCreditCard color="#929EAD" />} className="modalInput" />
					</Col>
					<Col lg={5} md={5} sm={5} xs={5}>
						<ParaText size="medium" className="alignLeft">
							<b>Exp. Date</b>
						</ParaText>
						<FormInput placeHolder="MM/YY" className="modalInput" />
					</Col>
					<Col lg={5} md={5} sm={5} xs={5}>
						<ParaText size="medium" className="alignLeft">
							<b>CVC</b>
						</ParaText>
						<FormInput placeHolder="3 Digits" className="modalInput" />
					</Col>
				</Row>
			</div>
			<Row align="middle" gutter={16}>
				<Col lg={12} md={12} sm={12} xs={12}>
					<ButtonUI className={styles.marginTop} label="Cancel" showIcon={true} type="gray" width="100%" />
				</Col>
				<Col lg={12} md={12} sm={12} xs={12}>
					<ButtonUI className={styles.marginTop} label="Save" showIcon={true} width="100%" />
				</Col>
			</Row>
		</>
	);
}
