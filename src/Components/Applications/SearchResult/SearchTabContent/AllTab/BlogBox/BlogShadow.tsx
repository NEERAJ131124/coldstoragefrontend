import React from 'react'
import { Card } from 'reactstrap'
import { H4, Image, LI, P, UL } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Utils'

export default function BlogShadow() {
    return (
        <Card className="overflow-hidden">
            <div className="blog-box blog-shadow">
                <Image className="img-fluid" src={dynamicImage(`blog/blog.jpg`)} alt="" />
                <div className="blog-details">
                    <P>{'25 July 2024'}</P>
                    <H4>{'Accusamus et iusto odio dignissimos ducimus qui blanditiis.'}</H4>
                    <UL className="blog-social simple-list flex-row">
                        <LI><i className="icofont icofont-user" />{'Mark Jecno'}</LI>
                        <LI><i className="icofont icofont-thumbs-up" />{'02 Hits'}</LI>
                    </UL>
                </div>
            </div>
        </Card>
    )
}