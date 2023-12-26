'use client';
import { Col, Row } from 'antd';
import './style.css';
import React from 'react';
import { Tabs } from 'antd';

export default function TabsPanel() {
	return (
		<>
			<div className="TabsPanel">
				<Row align={'middle'} justify="center">
					<Col xl={10} md={12} sm={24} xs={24}>
						<Tabs
							defaultActiveKey="1"
							centered
							items={[
								{
									label: 'Tab 1',
									key: '1',
									children: (
										<div className="FaqCollapse">
											<h2>Tab 1</h2>
										</div>
									)
								},
								{
									label: 'Tab 2',
									key: '2',
									children: (
										<div>
											<h2>Tab 2</h2>
										</div>
									)
								},
								{
									label: 'Tab 3',
									key: '3',
									children: (
										<div>
											<h2>Tab 3</h2>
										</div>
									)
								}
							]}
						/>
					</Col>
				</Row>
			</div>
		</>
	);
}
