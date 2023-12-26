'use client';
import { Col, Row } from 'antd';
import './style.css';
import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
import type { CSSProperties } from 'react';
import type { CollapseProps } from 'antd';
import { Collapse, theme } from 'antd';
import { CiCircleMinus } from 'react-icons/ci';

const text = `
We handle vehicle transportation and delivery through trusted shipping partners, offering transparent quotes, door-to-door delivery, tracking updates, and insurance coverage for a smooth experience.
`;

const text2 = `
2 We handle vehicle transportation and delivery through  coverage for a smooth experience.
`;

const text3 = `
3 We handle vehicle   trusted shipping partners, offering transparent quotes, door-to-door delivery, tracking updates, and insurance coverage for a smooth experience.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
	{
		key: '1',
		label: 'How do you handle logistics, such as vehicle transportation and delivery, once a purchase is made?',
		children: <p>{text}</p>,
		style: panelStyle
	},
	{
		key: '2',
		label: 'How can I register as a dealer on your car auction platform?',
		children: <p>{text2}</p>,
		style: panelStyle
	},
	{
		key: '3',
		label: 'What types of vehicles are typically available for auction on your platform?',
		children: <p>{text3}</p>,
		style: panelStyle
	}
];

export default function CollapsePanel() {
	const { token } = theme.useToken();

	const panelStyle: React.CSSProperties = {
		marginBottom: 4,
		border: 'none'
	};

	return (
		<>
			<div className="CollapsePanel">
				<Row align={'middle'} justify="center">
					<Col xl={10} md={12} sm={24} xs={24}>
						<Collapse
							bordered={false}
							defaultActiveKey={['1']}
							expandIcon={({ isActive }) => <CiCircleMinus />}
							style={{ background: token.colorBgContainer }}
							items={getItems(panelStyle)}
						/>
					</Col>
				</Row>
			</div>
		</>
	);
}
