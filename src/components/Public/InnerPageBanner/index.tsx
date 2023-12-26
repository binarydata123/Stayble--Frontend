import React, { ReactNode } from 'react';
import './style.css';
import { Image, Input } from 'antd';
import Titles from '@/commonUl/Titles';
const { Search } = Input;
interface InnerPageBannerProps {
	title: ReactNode;
	subtitle: ReactNode;
	showButton?: boolean;
	showText?: boolean;
	showImage?: boolean;
}

export default function InnerPageBanner({ title, subtitle, showButton, showText, showImage }: InnerPageBannerProps) {
	return (
		<>
			<div className="innerBannerSection">
				<div className="mainContainer">
					<Titles level={3} color="white" className="gapBottom text-center">
						{title}
					</Titles>
					<p>{subtitle}</p>
					{showButton && (
						<div className="searchBtn">
							<Search placeholder="Enter your PO Number" allowClear enterButton="Search" size="large" />
						</div>
					)}
					{showText && <p className="paddingNone">Please check your email to get your Purchase Order number</p>}
					{/* {
						showImage &&
						<Image src="/images/Image.png" alt="" className='centerImage' />
					} */}
				</div>
			</div>
		</>
	);
}
