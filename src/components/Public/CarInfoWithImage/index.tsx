import ParaText from '@/commonUl/ParaText';
import Titles from '@/commonUl/Titles';
import { Col, Row } from 'antd';
import React from 'react';
import './style.css';

interface TitleProps {
	title?: React.ReactNode;
	value?: any;
	icon?: React.ReactNode;
}

export default function CarInfoWithImage({ title, value, icon }: TitleProps) {
	return (
		<>
			<Row className="marginBottom">
				<Col lg={5} md={4} sm={4} xs={8} className="icon-image">
					<div className="icon">{icon}</div>
				</Col>
				<Col lg={19} md={20} sm={20} xs={12} className="plTen">
					<div className="marginNone">
						<ParaText size="small">{title}</ParaText>
					</div>
					<div className="m-0">
						<Titles level={4} className="fontFourTeen">
							{value}
						</Titles>
					</div>
				</Col>
			</Row>
			<div className="gapMargin"></div>
		</>
	);
}
