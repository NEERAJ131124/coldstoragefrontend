import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { H5, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import CountdownData from '../Common/CountdownData'

export default function ComingWithBgImage() {
    return (
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
            <Container fluid className="p-0 m-0">
                <div className="comingsoon comingsoon-bgimg">
                    <div className="comingsoon-inner text-center">
                        <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                            <Image className="for-light" src={dynamicImage(`other-images/logo-login.png`)} alt="logo" />
                            <Image className="for-dark" src={dynamicImage(`other-images/dark-logo-login.png`)} alt="logo" />
                        </Link>
                        <H5>{'WE ARE COMING SOON'}</H5>
                        <div className="countdown" id="clockdiv">
                            <CountdownData />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
