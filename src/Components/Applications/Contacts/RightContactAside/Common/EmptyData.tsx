import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { EmptyDataProp } from '../../../../../Types/Contact.type'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { P } from '../../../../../AbstractElements'

export default function EmptyData({ title }: EmptyDataProp) {
    return (
        <Card className="mb-0">
            {title && <CommonCardHeader headClass="d-flex" title={title}
                subTitle={[{ text: '0 Contacts' }]} />}
            <CardBody>
                <P className='text-center'>{'No Contact Found'} </P>
            </CardBody>
        </Card>
    )
}