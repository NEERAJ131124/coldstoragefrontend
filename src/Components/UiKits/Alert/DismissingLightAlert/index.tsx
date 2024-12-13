import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { DismissingLightAlertTitle } from '../../../../Utils/Constants';
import { dismissAlertSubTitle } from '../../../../Data/UiKits/Alert';
import { Alerts, P } from '../../../../AbstractElements';

export default function DismissingLightAlert() {
    const [active, setActive] = useState(true);
    const onDismiss = () => setActive(false)

    return (
        <Col sm={12} xl={6}>
            <Card>
                <CommonCardHeader title={DismissingLightAlertTitle} subTitle={dismissAlertSubTitle} />
                <CardBody>
                    <Alerts color='warning' isOpen={active} toggle={onDismiss} className='mb-0'>
                        <i className="fa-regular fa-bell" />
                        <P className="mb-0">{"Hidden content You should check in on some of those fields below."}</P>
                    </Alerts>
                </CardBody>
            </Card>
        </Col>
    )
}
