import Titles from '@/commonUl/Titles';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface TextProps {
	title: string | React.ReactNode;
	type?: boolean;
}

export default function TextWithCheck({ title, type = true }: TextProps) {
	return (
		<div
			className="text-with-check-wrappers"
			style={{
				display: 'flex',
				gap: '5px',
				alignItems: 'center'
			}}
		>
			{type ? <CheckIcon width={20} color="#0F43E6" /> : <XMarkIcon width={20} color="#0F43E6" />}
			<Titles level={4} className="fontSixTeen">
				{title}
			</Titles>
		</div>
	);
}
