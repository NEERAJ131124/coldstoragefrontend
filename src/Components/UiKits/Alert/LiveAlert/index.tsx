import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { LiveAlertTitle, ShowLiveAlert } from '../../../../Utils/Constants';
import { liveAlertSubTitle } from '../../../../Data/UiKits/Alert';
import { Alerts, Btn, P } from '../../../../AbstractElements';

export default function LiveAlert() {
    const [data, setData] = useState<number[]>([])
    const removeValue = (item: number) => {
        setData(data.filter((value, index) => {
            return value !== item;
        }));
    }

    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={LiveAlertTitle} subTitle={liveAlertSubTitle} />
                <CardBody className='live-dark'>
                    {data.map((item: number, index: number) => (
                        <Alerts color='light' toggle={() => { removeValue(item) }} key={index}>
                            <P className='text-dark'>{'Nice, you triggered this alert message!'}</P>
                        </Alerts>
                    ))}
                    <Btn color='dark' onClick={() => { setData((prev) => [...prev, prev.length + 1]) }}>{ShowLiveAlert}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}
