// ResetEmail.tsx
import React from 'react';
import ButtonUI from '@/commonUl/ButtonUI';
import { CheckOutlined } from '@ant-design/icons';
interface ResetEmailProps {
    title: string;
    description: string;
    buttonLabel: string;
}

const ResetEmail: React.FC<ResetEmailProps> = ({ title, description, buttonLabel }) => {
    return (
        <div className="loginFormTextBox">
            <div className='imageWidth'>
                <div className='checkBox'>
                    <CheckOutlined />
                </div>
            </div>
            <div className='resetEmail'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <ButtonUI label={buttonLabel} color='#fff' background='#0F43E6' width="100%" />
        </div>
    );
}
export default ResetEmail;
