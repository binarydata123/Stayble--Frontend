import React from 'react';
import './style.css';
import { CarFilled, CheckOutlined, CloseOutlined, DownOutlined, LeftOutlined, RightOutlined, UpOutlined } from '@ant-design/icons';
import ShowImage from '../../../commonUl/ShowImage';
export default function BookingStatusIcon() {
	return (
		<>
			<div className="mainContainer">
				<div className="accepted colorStyle">
					<CheckOutlined />
				</div>
				<br />
				<div className="accepted colorStyle2">
					<CloseOutlined />
				</div>
				<br />
				<div className="accepted colorStyle3">
					<CarFilled />
				</div>
				<br />
				<div className="accepted colorStyle4">
					<CarFilled />
				</div>
				<br />
				<div className="accepted colorStyle3">
					<DownOutlined />
				</div>
				<br />
				<div className="accepted colorStyle3">
					<UpOutlined />
				</div>
				<br />
				<div className="accepted colorStyle3">
					<LeftOutlined />
				</div>
				<br />
				<div className="accepted colorStyle3">
					<RightOutlined />
				</div>
				<br />
				<br />
				<br />
				<ShowImage
					src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
					alt="Rocket car sell logo"
					size="profile"
				/>
			</div>
		</>
	);
}
