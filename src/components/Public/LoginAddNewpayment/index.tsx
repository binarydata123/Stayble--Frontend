import FormInput from '@/commonUl/FormInput';
import ButtonUI from '@/commonUl/ButtonUI';
import { Row, Col, Form } from 'antd';
import styles from './loginAddNewpayment.module.css';
import React from 'react';
import { CreditCardFilled } from '@ant-design/icons';
import FormItem from '@/commonUl/FormItem';
export default function LoginAddNewpayment() {
	return (
		<>
			<div className={styles.loginAddNewpayment}>
				<Form layout="vertical">
					<FormItem label="Card Holder" name="Card Holder Name">
						<FormInput placeHolder="Card Holder Name" />
					</FormItem>
					<Row gutter={16}>
						<Col lg={12} md={12} sm={24} xs={24}>
							<FormItem label="Card Number" name="Card Number">
								<FormInput
									placeHolder="Card Holder Name"
									prefix={<CreditCardFilled color="#929EAD" />}
								/>
							</FormItem>
						</Col>
						<Col lg={6} md={6} sm={24} xs={24}>
							<FormItem label="Exp. Date" name="Exp. Date">
								<FormInput placeHolder="MM/YY" type="number" />
							</FormItem>
						</Col>
						<Col lg={6} md={6} sm={24} xs={24}>
							<FormItem label="CVC" name="CVC">
								<FormInput placeHolder="MM/YY" type="number" />
							</FormItem>
						</Col>
					</Row>
				</Form>
			</div>
			<Row align="middle" gutter={16}>
				<Col lg={12} md={12} sm={12} xs={12}>
					<ButtonUI className={styles.marginTop} label="Cancel" type="gray" showIcon={true} width="100%" />
				</Col>
				<Col lg={12} md={12} sm={12} xs={12}>
					<ButtonUI className={styles.marginTop} label="Save" showIcon={true} width="100%" />
				</Col>
			</Row>
		</>
	);
}
