import FormInput from '@/commonUl/FormInput'
import OpenModal from '@/commonUl/OpenModal'
import ButtonUI from '@/commonUl/ButtonUI'
import { Row, Col, Divider } from 'antd'
import './style.css'
import React from 'react'
import SecondaryShowIconButton from '@/commonUl/SecondaryShowIconButton'
import { CreditCardFilled } from '@ant-design/icons'
export default function LoginAddBilling() {
    return (
        <>
            <OpenModal title={'Add Billing Address'} width={512}>
                <div className='loginAddNewpayment'>
                    <Row gutter={16}>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <label htmlFor="">Address line 1</label>
                            <FormInput placeHolder='Street / Number' />
                        </Col>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <label htmlFor="">Address line 2</label>
                            <FormInput placeHolder='Street / Number' />
                        </Col>
                        <Col lg={16} md={16} sm={24} xs={24}>
                            <label htmlFor="">City</label>
                            <FormInput placeHolder='Enter City' type='number' prefix={<CreditCardFilled color='#929EAD' />} />
                        </Col>
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <label htmlFor="">ZIP</label>
                            <FormInput placeHolder='Zip' type='number' />
                        </Col>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <label htmlFor="">Country</label>
                            <FormInput placeHolder='Enter Country' />
                        </Col>
                        <Divider orientation="right" plain></Divider>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <h6>Tax Details</h6>
                            <label htmlFor=""> company name</label>
                            <FormInput placeHolder='Enter company name' />
                        </Col>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <label htmlFor="">Tax Number</label>
                            <FormInput placeHolder='Enter Tax Number' />
                        </Col>
                    </Row>
                </div>
                <Row align="middle" gutter={16}>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <SecondaryShowIconButton label="Cancel" width="100%" background='EEF3F6' color='#000' />
                    </Col>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <ButtonUI label="Save" width="100%" />
                    </Col>
                </Row>
            </OpenModal>
        </>
    )
}
