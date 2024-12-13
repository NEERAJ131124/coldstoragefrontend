import { useTour } from '@reactour/tour';
import React, { useEffect } from 'react'
import UserSecondProfile from './UserSecondProfile';
import UserThirdProfile from './UserThirdProfile';
import UserFourthProfile from './UserFourthProfile';
import UserFifthProfile from './UserFifthProfile';
import UserFirstProfile from '../../../../Utils/CommonComponents/CommonUserProfile/UserFirstProfile';

export default function TourMain() {
    const { setIsOpen } = useTour();
    useEffect(() => {
        var timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [setIsOpen]);
    return (
        <>
            <UserFirstProfile />
            <UserSecondProfile />
            <UserThirdProfile />
            <UserFourthProfile />
            <UserFifthProfile />
        </>
    )
}
