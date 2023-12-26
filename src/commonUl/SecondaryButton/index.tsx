import React from 'react';
import './style.css'
interface SecondaryButtonProps {
	label?: string;
	className?: string;
	children?: React.ReactNode;
	showIcon?: boolean;
	color?: string;
	background?: string;
	height?: number;
	fontSize?: number;
	onClick?: () => void;
}

export default function SecondaryButton({label, className = '', children, onClick}: SecondaryButtonProps) {
	return (
		<div className="primaryWrapper">
			<button onClick={onClick} className={` ${className}`}>
				{label || children}
			</button>
		</div>
	);
}
