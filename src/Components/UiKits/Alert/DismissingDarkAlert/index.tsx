import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { DismissingDarkAlertTitle } from '../../../../Utils/Constants';
import { dismissAlertSubTitle } from '../../../../Data/UiKits/Alert';
import { Alerts, P } from '../../../../AbstractElements';

export default function DismissingDarkAlert() {
    const [active, setActive] = useState(true);
    const onDismiss = () => setActive(false)

    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader title={DismissingDarkAlertTitle} subTitle={dismissAlertSubTitle} />
                <CardBody>
                    <Alerts color='secondary' isOpen={active} toggle={onDismiss} className='mb-0'>
                        <i className="fa-regular fa-heart" />
                        <P className='mb-0'>{"Check your update! You should check in on some of those fields below."}</P>
                    </Alerts>
                </CardBody>
            </Card>
        </Col>
    )
}
