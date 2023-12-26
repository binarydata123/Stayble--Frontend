import React from 'react';
import './style.css';
import { Col, Image, Row } from 'antd';
const carBrands = [
    'bmw',
    'Vector',
    'nissan',
    'lexus',
    'porsche',
    'ford',
    'hyundai',
    'mercedes',
];

export default function CompanyLogo() {
    return (
        <>
            <div className="mainContainer mNone">
                <div className="companyTabs paddingVerticalLarge">
                    <Row justify="space-evenly" align="middle">
                        {carBrands.map((brand, index) => (
                            <Col key={index} xl={3} md={3} sm={3} xs={6}>
                                <Image src={`/images/tags/${brand}.svg`} alt={brand} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </>
    );
}
