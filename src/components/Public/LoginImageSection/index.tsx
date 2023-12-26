import React from 'react';
import ShowImage from '@/commonUl/ShowImage';

interface LoginImageSectionProps {
    imagePath: string;
    imageAlt: string;
    title: string;
    description: string;
}

const LoginImageSection: React.FC<LoginImageSectionProps> = ({ imagePath, imageAlt, title, description }) => {
    return (
        <div className='loginImage'>
            <div className='imageText'>
                <ShowImage src={imagePath} alt={imageAlt} size="full" />
                <div className='textData'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default LoginImageSection;