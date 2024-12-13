import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { dynamicImage } from '../../../../../Utils'
import { H5, Image } from '../../../../../AbstractElements'
import CountdownData from '../Common/CountdownData'

export default function ComingWithBgVideo() {
    return (
        <div className="page-wrapper compact-wrapper" id="pageWrapper">
            <Container className="p-0" fluid>
                <div className="comingsoon auth-bg-video">
                    <video className="bgvideo-comingsoon" id="bgvid" poster={dynamicImage(`other-images/coming-soon-bg.jpg`)} playsInline autoPlay muted loop>
                        <source src={process.env.PUBLIC_URL + '/assets/video/auth-bg.mp4'} type="video/mp4" />
                    </video>
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