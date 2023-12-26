'use client';
import React, { useState } from 'react';
import './style.css';
import { Col, Image, Row } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import ShowImage from '@/commonUl/ShowImage';
import ButtonUI from '@/commonUl/ButtonUI';
export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<>
			<div className="headerPart">
				<div className="mainContainer">
					<Row align="middle">
						<Col xl={4} md={4} xs={12}>
							<Link href="/">
								<ShowImage src="/images/logo.png" alt="logo Site" />
							</Link>
						</Col>
						<Col xl={14} md={20} xs={12}>
							<div className="menuBar">
								<div className="barIcon">
									<MenuOutlined onClick={() => toggleMenu()} />
								</div>
								<div className={`closeBar ${isMenuOpen ? 'open' : 'headBtnMobile'}`}>
									<CloseOutlined onClick={() => toggleMenu()} />
									<ul className="navBar">
										<li className="active">
											<Link href="/about-us">About us</Link>
										</li>
										<li>
											<Link href="/how-it-work">How it works</Link>
										</li>
										<li>
											<Link href="/articles">Articles </Link>
										</li>
										<li>
											<Link href="/testimonials">Testimonials </Link>
										</li>
										<li>
											<Link href="/po-tracker">PO Tracker </Link>
										</li>
									</ul>
								</div>
							</div>
						</Col>
						<Col xl={6} md={24} xs={24}>
							<div className={`headerBtn  textEndFlex textEnd ${isMenuOpen ? 'open' : 'headBtnMobile'}`}>
								<Link href="#" className="textButtonWhite">
									Want to buy a car?
								</Link>
								<Link href="#" className="">
									<ButtonUI label="Login" type="default" />
								</Link>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</>
	);
}
