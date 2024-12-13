import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Btn } from '../../../../AbstractElements'
import { RtlSupportTitle } from '../../../../Utils/Constants'
import { userNameAlertSubTitle } from '../../../../Data/BonusUi/SweetAlert'

export default function RtlSupport() {
    const handleAlert = () => {
        Swal.fire({
            title: 'هل تريد الاستمرار؟',
            icon: 'question',
            iconHtml: '؟',
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
            showCancelButton: true,
            showCloseButton: true
        })
    }
    return (
        <Col xl={3}>
            <Card>
                <CommonCardHeader title={RtlSupportTitle} subTitle={userNameAlertSubTitle} />
                <CardBody>
                    <div className="common-flex">
                        <Btn color='secondary' className="sweet-15" onClick={handleAlert}>{'RTL Alert'}</Btn>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}