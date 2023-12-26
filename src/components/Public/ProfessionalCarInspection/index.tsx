import React from 'react';
import './style.css';
import { Col, Image, Row } from 'antd';
import Titles from '@/commonUl/Titles';
import ParaText from '@/commonUl/ParaText';
export default function ProfessionalCarInspection() {
	return (
		<>
			<div className="ProfessionalCarInspection paddingVerticalSuperLarge " id="">
				<div className="mainContainer">
					<Row className="imageCenter">
						<Col className="text-center" lg={24}>
							<div className="partnerText">
								<Titles level={3}>Professional Car Inspection</Titles>
								<ParaText size="medium">
									Our mechanic will inspect your car thoroughly, capturing <br /> every detail and identifying any mechanical
									issues.
								</ParaText>
							</div>
							<div className="">
								<Image src="/images/Features-section.png" alt="full-parts-car" />
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}
