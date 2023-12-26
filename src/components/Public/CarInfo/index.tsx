'use client';
import React from 'react';
import './style.css';
import { Col, Form, Row } from 'antd';
import SelectBox from '../../../commonUl/SelectBox';
import ButtonUI from '../../../commonUl/ButtonUI';
import Titles from '@/commonUl/Titles';
import FormItem from '@/commonUl/FormItem';
export default function CarInfo() {
	return (
		<>
			<div className="form">
				<div className="formPart">
					<Titles level={5} className="textCenter">
						Car Evaluation by <br /> Professional Mechanic
					</Titles>
					<Form className="bannerForm" layout="vertical">
						<Row gutter={16}>
							<Col xl={24} md={24} xs={24}>
								<FormItem name="brand" label="Brand">
									<SelectBox />
								</FormItem>
							</Col>
							<Col xl={24} md={24} xs={24}>
								<FormItem name="Modal" label="Model">
									<SelectBox />
								</FormItem>
							</Col>
							<Col xl={12} md={12} xs={12}>
								<FormItem name="paint" label="Type">
									<SelectBox />
								</FormItem>
							</Col>
							<Col xl={12} md={12} xs={12}>
								<FormItem name="gcc" label="Production Year">
									<SelectBox />
								</FormItem>
							</Col>
						</Row>
						<Row className="">
							<Col xl={24} md={24} xs={24} className="paddingUse yellowButton">
								<ButtonUI label="Evaluate your car" type="secondary" className="btnCommon" width="100%" />
							</Col>
						</Row>
					</Form>
				</div>
			</div>
		</>
	);
}
