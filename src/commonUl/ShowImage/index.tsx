import React from 'react';
import { Image } from 'antd';

export default function ShowImage({ src, alt, size }: any) {
	let imageSize;
	switch (size) {
		case 'Icon':
			imageSize = { width: 32 };
			break;
		case 'carSm':
			imageSize = { width: 90 };
			break;
		case 'headProfile':
			imageSize = { width: 40 };
			break;
		case 'profile':
			imageSize = { width: 50 };
			break;
		case 'small':
			imageSize = { width: 100 };
			break;
		case 'medium':
			imageSize = { width: 200 };
			break;
		case 'large':
			imageSize = { width: 300 };
			break;
		case 'smallSize':
			imageSize = { width: 172 };
			break;
		case 'smallSize2':
			imageSize = { width: 200 };
			break;
		case 'full':
			imageSize = { width: 720 };
			break;
		case 100:
			imageSize = { width: '100%' };
			break;
		default:
			imageSize = { width: 200 };
			break;
	}

	return (
		<div className="showImage">
			<Image {...imageSize} src={src} preview={false} alt={alt} />
		</div>
	);
}
