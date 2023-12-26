import React from 'react';
import './style.css';
import { Avatar, List } from 'antd';
const data = [
	{
		title: 'Ant Design Title 1'
	}
];
export default function CarFeatures() {
	return (
		<>
			<List
				itemLayout="horizontal"
				dataSource={data}
				renderItem={(item, index) => (
					<List.Item>
						<List.Item.Meta
							avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
							title={<a href="">{item.title}</a>}
						/>
					</List.Item>
				)}
			/>
		</>
	);
}
