import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from '../../../AbstractElements'
import { dynamicImage } from '../../../Utils'
import { Col } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '../../../ReduxToolkit/Store'
import { setSideBarToggle } from '../../../ReduxToolkit/Reducers/Layout/LayoutReducer'
import SvgIcon from '../../../Utils/CommonComponents/CommonSvgIcons'
import { Href } from '../../../Utils/Constants'

export default function HorizontalLogo() {
    const dispatch = useDispatch();
    const { sideBarToggle } = useSelector((state: RootState) => state.layout);
    const handleSidebarToggle = () => {
        dispatch(setSideBarToggle(!sideBarToggle));
    };
    return (
        <Col xs="auto" className="logo-wrapper d-flex align-items-center">
            <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                <Image className="light-logo img-fluid" width={150} height={100} src={dynamicImage(`logo/BMCLogoDark.webp`)} alt="logo" />
                <Image className="dark-logo img-fluid" src={dynamicImage(`logo/BMCLogoLight.webp`)} alt="logo" />
            </Link>
            <a className="close-btn toggle-sidebar" href={Href} onClick={handleSidebarToggle}>
                <SvgIcon className="svg-color" iconId="Category" />
            </a>
        </Col>
    )
}
