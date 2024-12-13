import React from 'react'
import { Card, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { H5, Image, P } from '../../../../../AbstractElements'
import { Href } from '../../../../../Utils/Constants'
import { dynamicImage } from '../../../../../Utils'
import ProfileLike from '../Common/ProfileLike'
import ProfileHead from '../../../../../Utils/CommonComponents/CommonUserProfile/ProfileHead'

export default function UserSecondProfile() {
    return (
        <Col sm={12} className='step5'>
            <Card>
                <div className="profile-img-style">
                    <ProfileHead month={'25 Jan'} time={'6 min read'} activeTime={'3 min ago'} /><hr />
                    <H5 className="pb-3">{'Wonderful piece that successfully conveys the magnificence of the mountains and the natural world.'} </H5>
                    <P className="block-ellipsis">{'English Romantic painter, printer, and watercolourist '}<em className="text-danger">{'William C. Jennings'}</em> {"Is most renowned for his expressive colorization, creative landscapes, and stormy, sometimes violent maritime works. However, this moody image of the Devil's Bridge in Switzerland, close to the Gotthard Pass, feels incredibly authentic and accurately depicts historical occasions when Russian general Suvorov crossed the Alps and fought not only far larger enemy troops!"}</P>
                    <div className="img-container">
                        <div id="aniimated-thumbnials">
                            <a href={Href}>
                                <Image className="img-fluid rounded" src={dynamicImage(`other-images/profile-style-img3.png`)} alt="gallery" />
                            </a>
                            <P className="block-ellipsis pt-3">
                                {"The curved canvas is enclosed in a complex frame that the artist created but that his buddy Gottlieb Christian Kuhn carved. A variety of Christian symbols are depicted on the frame, including the faces of five infant angels, a star, grapes, vines, corn, and God's eye.Many of the Romantic elements and subjects that he would explore throughout his career are present in this work, one of his earliest, most notable of which is the landscape's significant significance. In spite of the altarpiece's inclusion of a crucifix, the emphasis is"}
                                <Link className="text-danger" to={`${process.env.PUBLIC_URL}/users/user_profile`}> {'Read More'}</Link>
                            </P>
                        </div>
                    </div>
                    <ProfileLike />
                </div>
            </Card>
        </Col>
    )
}

