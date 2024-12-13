import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom'
import ProfileHead from '../../../../../Utils/CommonComponents/CommonUserProfile/ProfileHead'
import { P } from '../../../../../AbstractElements'
import { dynamicImage, dynamicNumber } from '../../../../../Utils'
import { Href } from '../../../../../Utils/Constants'
import UserFooter from '../Common/UserFooter'

export default function UserProfile3Style() {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <ProfileHead month='22 Feb' time='5 min read' activeTime='10 Hours ago' />
                    <hr />
                    <P>{"you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."}</P>
                    <Row className="mt-4 pictures my-gallery" id="aniimated-thumbnials-2">
                        {dynamicNumber(2).map((index) => (
                            <Gallery key={index} withCaption>
                                <Col sm={6}>
                                    <figure>
                                        <Item original={dynamicImage(`other-images/profile-style-img3.png`)} caption={index === 0 ? 'Image caption 1' : 'Image caption 2'}>
                                            {({ ref, open }) => (
                                                <Link to={Href} onClick={open}>
                                                    <img className='img-fluid rounded' ref={ref} src={dynamicImage(`other-images/profile-style-img.png`)} alt='gallery' />
                                                </Link>
                                            )}
                                        </Item>
                                    </figure>
                                </Col>
                            </Gallery>
                        ))}
                    </Row>
                    <UserFooter />
                </div>
            </Card>
        </Col>
    )
}