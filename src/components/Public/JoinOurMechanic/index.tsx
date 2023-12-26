import React from 'react';
import './style.css';
import { Col, Image, Row } from 'antd';
import ButtonUI from '@/commonUl/ButtonUI';
import Titles from '@/commonUl/Titles';
import ParaText from '@/commonUl/ParaText';
export default function JoinOurMechanic() {
	return (
		<div>
			<section className="JoinOurMechanicTeam paddingVerticalExtraLarge ">
				<div className="mainContainer">
					<Row gutter={20}>
						<Col xl={12} md={24} xs={24}>
							<Image src="/images/Contents.png" alt="Contents" className="Contents" />
						</Col>
						<Col xl={12} md={24} xs={24}>
							<div className="ContentPart">
								<Titles level={3}>
									Join Our <span className="spanColor">Mechanic Team</span> and Fuel Your Career!
								</Titles>
								<ParaText className="" size="large">
									Experience a rewarding career and contribute to keeping vehicles running smoothly. Take your automotive expertise
									to new heights with us!
								</ParaText>
								<br />
								<br />
								<Row gutter={20}>
									<Col xl={12} md={12} xs={24}>
										<div className="cardUser">
											<Row gutter={20}>
												<Col xl={6} md={6} xs={6}>
													<Image src="/images/Avatar2.png" alt="Avatar2" />
												</Col>
												<Col xl={18} md={18} xs={18}>
													<p className="nameUser">Mark Thompson</p>
													<p className="subText">Senior Auto Mechanic</p>
												</Col>
											</Row>
										</div>
										<br />
									</Col>
									<Col xl={12} md={12} xs={24}>
										<div className="cardUser">
											<Row gutter={20}>
												<Col xl={6} md={6} xs={6}>
													<Image src="/images/Avatar.png" alt="Avatar" />
												</Col>
												<Col xl={18} md={18} xs={18}>
													<p className="nameUser">Mark Thompson</p>
													<p className="subText">Senior Auto Mechanic</p>
												</Col>
											</Row>
										</div>
									</Col>
								</Row>
								<br />
								<div className="TabCenter">
									<ButtonUI label="Join our team" className="ButtonUI"></ButtonUI>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</section>
		</div>
	);
}
