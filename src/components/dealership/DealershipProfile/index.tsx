import React from 'react';
import { Col, Divider, Image, Row } from 'antd';
import ImageText from '@/commonUl/ImageText';
import TextIconPanel from '@/commonUl/TextIconPanel';
import { PhoneIcon } from '@heroicons/react/20/solid';
import { MailFilled } from '@ant-design/icons';
import ButtonUI from '@/commonUl/ButtonUI';
import Titles from '@/commonUl/Titles';
import ParaText from '@/commonUl/ParaText';
export default function DealershipProfile() {
	const data = [
		{
			time: 'bmw.dubai@bmw.com',
			location: '',
			showPlaneIcon: true
		}
	];
	return (
		<>
			<div className="mainContainer" id="profile">
				<Row>
					<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
						<ImageText imagePath="/images/CarReviewIcon/CarReviewIcon1.png" altText="Car Review Icon" title="BMW Dealership" />
						<div className="gapMargin"></div>
						{data.map((item, index) => (
							<Col key={index} xl={24} md={24} sm={24} xs={24}>
								<TextIconPanel icon={<MailFilled width={15} />} text={item.time} />
								<div className="gapMargin"></div>
								<TextIconPanel icon={<PhoneIcon width={15} />} text={item.time} />
							</Col>
						))}
						<div className="gapMargin"></div>
						<ButtonUI
							label="Settings"
							width="100%"
							className="editButton"
							type="gray"
							icon={<Image src="/images/CarReviewIcon/Edit.svg" width={20} alt="Edit" />}
						/>
						<div className="gapMargin"></div>
						<Titles level={5} className="fontSixTeen">
							Address
						</Titles>
						<div className="gapMargin"></div>
						<Row gutter={16}>
							<Col lg={12} md={12} sm={12} xs={12}>
								<ParaText size="small">Street</ParaText>
							</Col>
							<Col lg={12} md={12} sm={12} xs={12}>
								<div className="textEnd">
									<ParaText size="small" className="textEnd">
										Al Mohan 24
									</ParaText>
								</div>
							</Col>
						</Row>
						<Divider />
						<Row gutter={16}>
							<Col lg={12} md={12} sm={12} xs={12}>
								<ParaText size="small">City</ParaText>
							</Col>
							<Col lg={12} md={12} sm={12} xs={12}>
								<div className="textEnd">
									<ParaText size="small" className="textEnd">
										Dubai
									</ParaText>
								</div>
							</Col>
						</Row>
						<Divider />
						<Row gutter={16}>
							<Col lg={12} md={12} sm={12} xs={12}>
								<ParaText size="small">ZIP</ParaText>
							</Col>
							<Col lg={12} md={12} sm={12} xs={12}>
								<div className="textEnd">
									<ParaText size="small" className="textEnd">
										N/A
									</ParaText>
								</div>
							</Col>
						</Row>
						<Divider />
						<Row gutter={16}>
							<Col lg={12} md={12} sm={12} xs={12}>
								<ParaText size="small">State</ParaText>
							</Col>
							<Col lg={12} md={12} sm={12} xs={12}>
								<div className="textEnd">
									<ParaText size="small" className="textEnd">
										UAE
									</ParaText>
								</div>
							</Col>
						</Row>
						<Divider />
						<div className="gapMargin"></div>
						<Titles level={5} className="fontSixTeen">
							Account info
						</Titles>
						<div className="gapMargin"></div>
						<Row gutter={16}>
							<Col lg={12} md={12} sm={12} xs={12}>
								<ParaText size="small">Account created</ParaText>
							</Col>
							<Col lg={12} md={12} sm={12} xs={12}>
								<div className="textEnd">
									<ParaText size="small" className="textEnd">
										19.12.2023
									</ParaText>
								</div>
							</Col>
						</Row>
						<Divider />
						<Row gutter={16}>
							<Col lg={12} md={12} sm={12} xs={12}>
								<ParaText size="small">User ID</ParaText>
							</Col>
							<Col lg={12} md={12} sm={12} xs={12}>
								<div className="textEnd">
									<ParaText size="small" className="textEnd">
										120182
									</ParaText>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
		</>
	);
}
