import React from 'react';
import styles from './billing.module.css';
import { Col, Divider, Row } from 'antd';
import FormInput from '../../../commonUl/FormInput';
import ParaText from '../../../commonUl/ParaText';
import ButtonUI from '@/commonUl/ButtonUI';
export default function AddBillingAddressPopup() {
	return (
		<>
			<div className={styles.modalPanel}>
				<ParaText size="small" className="modalSubText alignLeft">
					<b>Address line 1</b>
				</ParaText>
				<FormInput placeHolder="Street / Number" className="modalInput" />
				<ParaText size="small" className="modalSubText alignLeft">
					<b>Address line 2</b>
				</ParaText>
				<FormInput placeHolder="Street / Number" className="modalInput" />
				<Row align="middle" gutter={16}>
					<Col lg={17} md={17} sm={17} xs={17}>
						<ParaText size="small" className="modalSubText alignLeft">
							<b>City</b>
						</ParaText>
						<FormInput placeHolder="Enter City" className="modalInput" />
					</Col>
					<Col lg={7} md={7} sm={7} xs={7}>
						<ParaText size="small" className="modalSubText alignLeft">
							<b>ZIP</b>
						</ParaText>
						<FormInput placeHolder="ZIP" className="modalInput" />
					</Col>
				</Row>
				<ParaText size="small" className="modalSubText alignLeft">
					<b>Country</b>
				</ParaText>
				<FormInput placeHolder="Enter country" className="modalInput" />
				<Divider />
				<ParaText size="large">Tax Details</ParaText>
				<br />
				<br />
				<ParaText size="small" className="modalSubText alignLeft">
					<b>Company Name</b>
				</ParaText>
				<FormInput placeHolder="Enter company name" className="modalInput" />

				<ParaText size="small" className="modalSubText alignLeft">
					<b>Tax Number</b>
				</ParaText>
				<FormInput placeHolder="Enter tax number" className="modalInput" />
			</div>
			<Row align="middle" gutter={16}>
				<Col lg={12} md={12} sm={12} xs={12}>
					<ButtonUI className="marginTop" label="Cancel" type="gray" showIcon={true} width="100%" />
				</Col>
				<Col lg={12} md={12} sm={12} xs={12}>
					<ButtonUI className="marginTop" label="Save" showIcon={true} width="100%" />
				</Col>
			</Row>
		</>
	);
}
