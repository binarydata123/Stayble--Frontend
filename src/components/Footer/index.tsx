import React from 'react';
import './style.css';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { Col, Image, Row } from 'antd';
import Link from 'next/link';
export default function Footer() {
	return (
		<div>
			<div className="footerPart">
				<div className="mainContainer">
					<Row>
						<Col xl={6} md={10} xs={24}>
							<div className="footerDescription ">
								<Link href="#">
									<Image src="/images/logo.png" alt="logo Site" className="footerLogo" />
								</Link>
								<p className="defaultText">
									With the mission of creating the ultimate online car buying and selling experience,
									carwow helps its 12+ million users
								</p>
								<ul className="socialIcons">
									<li>
										<Link href="#">
											<FaLinkedinIn />
										</Link>
									</li>
									<li>
										<Link href="#">
											<FaInstagram />
										</Link>
									</li>
									<li>
										<Link href="#">
											<FaFacebookF />
										</Link>
									</li>
								</ul>
							</div>
						</Col>
						<Col xl={4} md={2} xs={24}>
							<div className="emailForm bigScreenNone">
								<p className="defaultText mB-6 mT-15">Stay up to date</p>
								<Row gutter={16}>
									<Col xl={16} md={16} xs={14}>
										<input type="text" placeholder="Enter your email" />
									</Col>
									<Col xl={8} md={8} xs={10}>
										<button className="ButtonSubscribe">Subscribe</button>
									</Col>
								</Row>
							</div>
						</Col>
						<Col xl={6} md={12} xs={24}>
							<div className="footerData">
								<p className="defaultText mB-6">Links</p>
								<Row>
									<Col xl={12} md={12} xs={12}>
										<ul className="footerList">
											<li>
												<Link href="/">Home</Link>
											</li>
											<li>
												<Link href="/about-us">About us</Link>
											</li>
											<li>
												<Link href="/how-it-work">How it Works</Link>
											</li>
											<li>
												<Link href="/articles">Articles</Link>
											</li>
											<li>
												<Link href="/po-tracker">PO Tracker</Link>
											</li>
										</ul>
									</Col>
									<Col xl={12} md={12} xs={12}>
										<ul className="footerList">
											<li>
												<Link href="/testimonials">Testimonials</Link>
											</li>
											<li>
												<Link href="/contact-us">Contact us</Link>
											</li>
										</ul>
									</Col>
								</Row>
							</div>
						</Col>
						<Col xl={8} md={24} xs={24}>
							<div className="emailForm mobileNone">
								<p className="defaultText mB-6 mT-15">Stay up to date</p>
								<Row gutter={16}>
									<Col xl={16} md={16} xs={14}>
										<input type="text" placeholder="Enter your email" />
									</Col>
									<Col xl={8} md={8} xs={10}>
										<button className="ButtonSubscribe">Subscribe</button>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>

					<div className="lastFooter">
						<Row className="RowReverse">
							<Col xl={12} md={12} xs={24}>
								<p className="defaultText mB-6">© 2023 RocketCarSell. All rights reserved.</p>
							</Col>
							<Col xl={12} md={12} xs={24}>
								<div className="text-end mText-Left">
									<ul className="footerEndList">
										<li>
											<Link href="/terms-conditions">Terms & conditions</Link>
										</li>
										<li>
											<Link href="/privacy-policy">Privacy Policy</Link>
										</li>
										<li>
											<Link href="/cookies">Cookies</Link>
										</li>
									</ul>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</div>
	);
}
