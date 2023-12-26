import React from 'react'
import './style.css'
import { Avatar, List } from 'antd';

const data = [
    {
        title: 'Ant Design Title 2',
        content: 'Ant Design Title 2',
    },
];

interface DescriptionItemProps {
    title: string;
    content: string;
}

export default function EngineTransmission({ title, content }: DescriptionItemProps) {
    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        {content}
                        <List.Item.Meta
                            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                            title={<a href="">{item.title}</a>}
                        />

                    </List.Item>
                )}
            />
        </>
    )
}
