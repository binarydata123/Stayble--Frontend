"use client"
import React, { ReactNode } from 'react';
import './style.css';
import Condition from '../../../commonUl/Condition';
import CarInfo from '../CarInfo';
import PersonalInfo from '../PersonalInfo';
import Availability from '../Availability';
import AvailabilityDisabled from '../../../commonUl/AvailabilityDisabled';
import NotificationBottomRight from '../../../commonUl/NotificationBottomRight';
interface SellYourCarBannerProps {
    title: ReactNode;
}

export default function SellYourCarBanner({ title }: SellYourCarBannerProps) {
    return (
        <>
            <div className='mainBanner'>
                <div className='sellCarSection'>
                    <div className='mainContainer'>
                        <h2 className='titleSub text-center'>{title}</h2>

                    </div>
                    <br />
                    {/* <Condition /> */}
                    {/* <CarInfo /> */}
                    {/* <PersonalInfo /> */}
                    {/* <Availability /> */}
                    {/* <AvailabilityDisabled /> */}
                    <NotificationBottomRight />
                </div>
            </div>
        </>
    );
}
