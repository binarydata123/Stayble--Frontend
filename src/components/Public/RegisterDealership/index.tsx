import React from 'react';
import './style.css';
import { Col, Image, Row } from 'antd';
import ButtonUI from '../../../commonUl/ButtonUI';
import Titles from '@/commonUl/Titles';
import { CheckCircleIcon, CheckIcon } from '@heroicons/react/20/solid';
export default function RegisterDealership() {
	return (
		<>
			<div className="mainContainer">
				<div className="RegisterDealership">
					<Row>
						<Col lg={12} md={12} sm={24}>
							<div className="RegisterDealershipTitle">
								<Titles level={3} color="light">
									Join 200+ dealerships and grow your business
								</Titles>
								<Titles level={4} color="light">
									{' '}
									<CheckIcon width={20} color="#FFEA29" />
									Simplified vehicle inspection and documentation
								</Titles>
								<Titles level={4} color="light">
									{' '}
									<CheckIcon width={20} color="#FFEA29" />
									Efficient and Convenient Sales Process
								</Titles>
								<ButtonUI label="Register Dealership" type="default" icon=" " className="marginTopThree" />
							</div>
						</Col>
						<Col lg={12} md={12} sm={24} className="textEnd">
							<Image src="/images/card/dealer-dashboard.png" alt="" className="dealershipImage" />
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}
