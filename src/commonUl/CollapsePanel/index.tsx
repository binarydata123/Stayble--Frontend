'use client';
import { Col, Row } from 'antd';
import './style.css';
import React from 'react'; 
import type { CSSProperties } from 'react';
import type { CollapseProps } from 'antd';
import { Collapse, theme } from 'antd'; 
import { FaMinus } from 'react-icons/fa6';

const text = `
Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.
`;

const text2 = `
Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.
`;

const text3 = `
Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.
`;

const text4 = `
Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.
`;

const text5 = `
Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.
`;

const text6 = `
Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibh natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
	{
		key: '1',
		label: 'Do you offer discounts if I pay by the week or month?',
		children: <p>{text}</p>,
		style: panelStyle
	},
	{
		key: '2',
		label: 'What are your office hours?',
		children: <p>{text2}</p>,
		style: panelStyle
	},
	{
		key: '3',
		label: 'Do you offer housekeeping service?',
		children: <p>{text3}</p>,
		style: panelStyle
	},
	{
		key: '4',
		label: 'Are there any extra fees, like security deposits?',
		children: <p>{text2}</p>,
		style: panelStyle
	},
	{
		key: '5',
		label: 'Elementum facilisi aliquam, nisi, orci vulputate?',
		children: <p>{text2}</p>,
		style: panelStyle
	},
	{
		key: '6',
		label: 'Do you welcome pets in the hotel?',
		children: <p>{text2}</p>,
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
					<Col xl={14} md={20} sm={24} xs={24}>
						<Collapse
							bordered={false}
							defaultActiveKey={['1']}
							expandIcon={({ isActive }) => <FaMinus />
						}
							style={{ background: token.colorBgContainer }}
							items={getItems(panelStyle)}
						/>
					</Col>
				</Row>
			</div>
		</>
	);
}
