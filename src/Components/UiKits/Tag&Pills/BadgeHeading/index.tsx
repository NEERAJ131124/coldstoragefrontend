import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BadgeHeadingsTitle } from '../../../../Utils/Constants'
import { badgeHeadingSubTitle } from '../../../../Data/UiKits/Tag&Pills'
import { Badges, H1, H2, H3, H4, H5, H6 } from '../../../../AbstractElements'

export default function BadgeHeading() {
    return (
        <Col sm={12} xl={6} className='mb-lg-3 mb-0'>
            <Card>
                <CommonCardHeader title={BadgeHeadingsTitle} subTitle={badgeHeadingSubTitle} />
                <CardBody className='bage-heading'>
                    <H1 className="pb-2 d-flex gap-2 flex-wrap align-items-center">{'Badge Heading 1'}
                        <Badges className="btn-primary">{'Latest'}</Badges>
                    </H1>
                    <H2 className="pb-2 d-flex gap-2 flex-wrap align-items-center">{'Badge Heading 2'}
                        <Badges className="btn-secondary">{'Trending'}</Badges>
                    </H2>
                    <H3 className="pb-2 d-flex gap-2 flex-wrap align-items-center">{'Badge Heading 3'}
                        <Badges className="btn-success">{'Checkout'}</Badges>
                    </H3>
                    <H4 className="pb-2 d-flex gap-2 flex-wrap align-items-center">{'Badge Heading 4'}
                        <Badges className="btn-warning">{'Inbox'}</Badges>
                    </H4>
                    <H5 className="pb-2 d-flex gap-2 flex-wrap align-items-center">{'Badge Heading 5'}
                        <Badges className="btn-danger">{'Login'}</Badges>
                    </H5>
                    <H6 className="pb-2 d-flex gap-2 flex-wrap align-items-center">{'Badge Heading 6'}
                        <Badges className="btn-dark">{'Logout'}</Badges>
                    </H6>
                </CardBody>
            </Card>
        </Col>
    )
}
