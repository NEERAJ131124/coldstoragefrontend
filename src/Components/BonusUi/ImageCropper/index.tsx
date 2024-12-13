import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUi, ImageCropperTitle } from '../../../Utils/Constants'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader'
import ImageCropperBody from './ImageCropperBody'
import { imageCropperSubTitle } from '../../../Data/BonusUi/RangeSlider'

export default function ImageCropperContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={ImageCropperTitle} parent={BonusUi} title={ImageCropperTitle} />
            <Container fluid>
                <div className="img-cropper">
                    <Row>
                        <Col sm={12}>
                            <Card>
                                <CommonCardHeader title={ImageCropperTitle} subTitle={imageCropperSubTitle} />
                                <ImageCropperBody />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}
