import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Link } from 'react-router-dom'
import ProfileHead from '../../../../../Utils/CommonComponents/CommonUserProfile/ProfileHead'
import { dynamicImage } from '../../../../../Utils'
import { Href } from '../../../../../Utils/Constants'
import { P } from '../../../../../AbstractElements'
import UserFooter from '../Common/UserFooter'

export default function UserProfile5Style() {
    return (
        <Col sm={12}>
            <Card>
                <div className="profile-img-style">
                    <ProfileHead month='05 Feb' time='5 min read' activeTime='10 Hours ago' />
                    <hr />
                    <Row>
                        <Col lg={12} xl={4}>
                            <div className="my-gallery" id="aniimated-thumbnials-3">
                                <Gallery withCaption>
                                    <figure>
                                        <Item original={dynamicImage(`blog/img.png`)} caption='Image caption  1'>
                                            {({ ref, open }) => (
                                                <Link to={Href} onClick={open}>
                                                    <img ref={ref} className='img-fluid rounded' src={dynamicImage(`blog/img.png`)} alt='gallery' />
                                                </Link>
                                            )}
                                        </Item>
                                    </figure>
                                </Gallery>
                            </div>
                            <UserFooter divClass='mt-4 like-comment-sm-mb' />
                        </Col>
                        <Col xl={6}>
                            <P>{"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consecteturContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"}</P>
                        </Col>
                    </Row>
                </div>
            </Card>
        </Col>
    )
}