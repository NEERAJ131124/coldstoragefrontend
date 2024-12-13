import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../ReduxToolkit/Store';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import { Col } from 'reactstrap';
import HorizontalLogo from './HeaderLeft/HorizontalLogo';

export default function Header() {
    const { sideBarToggle } = useSelector((state: RootState) => state.layout);

    return (
        <header className={`page-header row ${sideBarToggle ? 'close_icon' : ''}`}>
                <HorizontalLogo />
                <Col className="page-main-header">
                    <HeaderLeft />
                    <HeaderRight />
                </Col>
        </header>
    )
}