import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { TextColorsTitle } from '../../../../Utils/Constants'
import { borderColorData, textColorSubTitle } from '../../../../Data/UiKits/HelperClasses'

export default function TextColors() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={TextColorsTitle} subTitle={textColorSubTitle} />
                <CardBody>
                    {borderColorData && borderColorData.slice(0, 6).map((item, index) => (
                        <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                            <div className={`font-${item}`}>
                                {'This is a '} <b>{`font-${item}`}</b> {` text used class as .font-${item}`}
                            </div>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
