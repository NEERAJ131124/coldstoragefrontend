import React, { Fragment } from 'react'
import { CardBody, Col } from 'reactstrap'
import CommonCard from '../CommonCard'
import { ProfileIntroTitle } from '../../../../../../Utils/Constants'
import { Btn, P } from '../../../../../../AbstractElements'
import { profileIntroList } from '../../../../../../Data/Applications/SocialApp'

export default function ProfileIntro() {
    return (
        <Col xl={12} className='xl-50 box-col-6'>
            <CommonCard title={ProfileIntroTitle}>
                <CardBody className="filter-cards-view">
                    {profileIntroList.map((item) => (
                        <Fragment key={item.id}>
                            <span className="f-w-700 mb-2 d-block">{item.text}:</span>
                            <P>{item.paragraph}</P>
                        </Fragment>
                    ))}
                    <div className="social-network theme-form">
                        <span className="f-w-700">{'Social Networks'}</span>
                        <Btn color='transparent' className="social-btn btn-fb mb-2 text-center"><i className="fa-solid fa-reply" />{'Facebook'}</Btn>
                        <Btn color='transparent' className="social-btn btn-twitter mb-2 text-center"><i className="fa-brands fa-twitter" />{'Twitter'}</Btn>
                        <Btn color='transparent' className="social-btn btn-google text-center"><i className="fa-brands fa-dribbble" />{'Dribbble'}</Btn>
                    </div>
                </CardBody>
            </CommonCard>
        </Col>
    )
}