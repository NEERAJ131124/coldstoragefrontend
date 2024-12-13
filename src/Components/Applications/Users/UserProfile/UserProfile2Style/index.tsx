import React from 'react'
import { Card, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { Href } from '../../../../../Utils/Constants'
import ProfileHead from '../../../../../Utils/CommonComponents/CommonUserProfile/ProfileHead'
import UserFooter from '../Common/UserFooter'

export default function UserProfile2Style() {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <ProfileHead month='26 Jan' time='6 min read' activeTime='10 Hours ago' />
                    <hr />
                    <P>{"you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."}</P>
                    <div className="img-container">
                        <div className="my-gallery" id="aniimated-thumbnials">
                            <Gallery id="aniimated-thumbnials" withCaption>
                                <figure>
                                    <Item original={dynamicImage(`other-images/profile-style-img3.png`)} caption='Image caption 1'>
                                        {({ ref, open }) => (
                                            <Link to={Href} onClick={open}>
                                                <img className='img-fluid rounded' ref={ref} src={dynamicImage(`other-images/profile-style-img3.png`)} alt='gallery' />
                                            </Link>
                                        )}
                                    </Item>
                                </figure>
                            </Gallery>
                        </div>
                    </div>
                    <UserFooter />
                </div>
            </Card>
        </Col>
    )
}