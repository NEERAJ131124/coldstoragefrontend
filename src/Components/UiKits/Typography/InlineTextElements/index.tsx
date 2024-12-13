import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Inlinetextelements } from '../../../../Utils/Constants'
import { inlineTextSubTitle } from '../../../../Data/UiKits/Typography'
import { P } from '../../../../AbstractElements'

export default function InlineTextElements() {
    return (
        <Col xl={12} xxl={6}>
            <Card>
                <CommonCardHeader title={Inlinetextelements} subTitle={inlineTextSubTitle} />
                <CardBody>
                    <div className='d-flex flex-column gap-2 align-items-start'>
                        <P className="mb-0">{'You can use the mark tag to'}<mark>{' highlight '}</mark>{'text.'}</P>
                        <P className="mb-0"><del>{'This line of text is meant to be treated as deleted text.'}</del></P>
                        <P className="mb-0"><s>{'This line of text is meant to be treated as no longer accurate.'}</s></P>
                        <P className="mb-0"><u>{'This line of text will render as underlined'}</u> </P>
                        <P className="mb-0"><small>{'This line of text is meant to be treated as fine print.'}</small></P>
                        <P className="mb-0"><strong>{'This line rendered as bold text.'}</strong></P>
                        <P className="mb-0"><em>{'This line rendered as italicized text.'}</em></P>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
