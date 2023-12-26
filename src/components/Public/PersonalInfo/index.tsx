"use client"
import React from 'react';
import './style.css'
import { Col, Row } from 'antd';
import SelectBox from '../../../commonUl/SelectBox';
import ButtonUI from '../../../commonUl/ButtonUI';
import FormInput from '@/commonUl/FormInput';

export default function PersonalInfo() {

    return (
        <>
            <div className='mainContainer'>
                <div className="form">
                    <div className="formPart">
                        <h5>
                            Enter your info, so we can <br />
                            get in touch quickly!
                        </h5>
                        <form className="bannerForm">
                            <Row gutter={16}>
                                <Col xl={24}>
                                    <label className="labelText">Full Name</label>
                                    <FormInput />
                                </Col>
                                <Col xl={24}>
                                    <label className="labelText">Address</label>
                                    <FormInput />
                                </Col>
                                <Col xl={24}>
                                    <label className="labelText">Phone number</label>
                                    <FormInput />
                                </Col>
                            </Row>
                            <Row className='marginTop30' gutter={16} align={'middle'}>
                                <Col xl={4} className='paddingUse'>
                                    <div className='arrowBack'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M12.875 14.125L11 16L3 8L11 0L12.875 1.875L6.75 8L12.875 14.125Z" fill="#4C5D72" />
                                        </svg>
                                    </div>
                                </Col>
                                <Col xl={20} className='paddingUse'>
                                    <ButtonUI label='Book an appointment' className='btnCommon' />
                                </Col>
                            </Row>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
