import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Swal from 'sweetalert2'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { GithubAvatarTitle } from '../../../../Utils/Constants'
import { questionAlertSubTitle } from '../../../../Data/BonusUi/SweetAlert'
import { Btn } from '../../../../AbstractElements'

export default function GithubAvatar() {
    const handleAlert = () => {
        Swal.fire({
            title: 'Submit your Github username',
            input: 'text',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
                return fetch(`//api.github.com/users/${login}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText)
                        }
                        return response.json()
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        )
                    })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `${result.value.login}'s avatar`,
                    imageUrl: result.value.avatar_url
                })
            }
        })
    }
    return (
        <Col xl={3}>
            <Card>
                <CommonCardHeader title={GithubAvatarTitle} subTitle={questionAlertSubTitle} />
                <CardBody>
                    <div className="common-flex">
                        <Btn color='primary' className="sweet-11" onClick={handleAlert}>{'Ajax alert'}</Btn>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}