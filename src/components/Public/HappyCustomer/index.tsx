'use client';
import React, { useState } from 'react';
import './style.css';
import { Col, Image, Row } from 'antd';
import AvterImage from '../../../commonUl/AvterImage';
import UserName from '../../../commonUl/UserName';
import Titles from '@/commonUl/Titles';
import ParaText from '@/commonUl/ParaText';

interface HappyCustomerProps {
	showSection: boolean;
}

export default function HappyCustomer({ showSection }: HappyCustomerProps) {
	const [data, setdata] = useState([[], [], []]);

	return (
		<>
			<div className="paddingVerticalSuperLarge" id="beforeHappyCustomer">
				<div className="mainContainer">
					{showSection && (
						<h2 className="titleSub text-center">
							Become our <span className="spanColor">happy</span> customer
						</h2>
					)}
					<br />
					<Row className="gutter-row" align={'middle'} gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
						{data.map((item, index) => (
							<Col key={index} xl={8} md={8} sm={12} xs={24} lg={8}>
								<div className="cardBoxThree beforeHappyCustomer">
									<div className="star">
										<ul>
											{[...Array(5)].map((_, starIndex) => (
												<li key={starIndex}>
													<Image src="/images/star/Star.svg" alt="" />
												</li>
											))}
										</ul>
									</div>
									<br />
									<p>
										“They made selling my car a breeze! Their user-friendly platform and wide reach helped me find a buyer
										quickly. Highly recommended
									</p>
									<br />

									<div className="AvTerTitle">
										<Row>
											<Col lg={5}>
												<AvterImage />
											</Col>
											<Col lg={19}>
												<UserName />
											</Col>
										</Row>
									</div>
								</div>
							</Col>
						))}
					</Row>
				</div>
			</div>
		</>
	);
}
