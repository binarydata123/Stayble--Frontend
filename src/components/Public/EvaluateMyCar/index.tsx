import React from 'react';
import './style.css';
import { Col, Image, Row } from 'antd';
import ButtonUI from '../../../commonUl/ButtonUI';
import Titles from '@/commonUl/Titles';
export default function EvaluateMyCar() {
	return (
		<>
			<div className="paddingBottomMedium">
				<div className="mainContainer RegisterDealership">
					<Row>
						<Col lg={12} md={12} sm={24}>
							<div className="RegisterDealershipTitle">
								<Titles level={3} color="light">
									Thinking of selling a car? You re in the right place.
								</Titles>
								<Titles level={5} color="light">
									Book a visit from our qualified mechanic who will take stunning photos and create a detailed car report.
								</Titles>
								<div className="RegisterDealershipTitleBtn">
									<ButtonUI label="Evaluate My Car" type="default" />
								</div>
							</div>
						</Col>
						<Col lg={12} md={12} sm={24} className="textEnd">
							<Image src="/images/yellow-car.png" alt="" />
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}
