import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Btn } from '../../../../AbstractElements'
import { SuccessMessageTitle } from '../../../../Utils/Constants'
import { successMessageSubTitle } from '../../../../Data/BonusUi/SweetAlert'
import { toast } from 'react-toastify'

export default function SuccessMessage() {
    const handleAlert = () => {
        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <b>2000</b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            },
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                toast('I was closed by the timer')
            }
        })
    }
    return (
        <Col xl={3}>
            <Card>
                <CommonCardHeader title={SuccessMessageTitle} subTitle={successMessageSubTitle} />
                <CardBody>
                    <div className="common-flex">
                        <Btn color='danger' className="sweet-20" onClick={handleAlert}>{'Message Timer'}</Btn>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}