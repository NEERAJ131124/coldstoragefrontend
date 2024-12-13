import React from 'react'
import { Card, CardBody, Col, InputGroup, InputGroupText } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { CustomFormsTitle, FavoriteChocolatesTitle, FavoriteColorsTitle, FavoriteThemeTitle, Options, PixelstrapThemeTitle, Submit } from '../../../../../Utils/Constants'
import { customFormsSubTitle, favoriteChocolatesData, favoriteColorsData, favoriteThemesData, pixelstrapSelectList } from '../../../../../Data/Forms/FormControls'
import { Btn } from '../../../../../AbstractElements'
import CustomFormSelect from './CustomFormSelect'

export default function CustomForms() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={CustomFormsTitle} subTitle={customFormsSubTitle} />
                <CardBody className="common-flex main-custom-form">
                    <InputGroup>
                        <InputGroupText for="inputGroupSelect01">{Options}</InputGroupText>
                        <CustomFormSelect inputId='inputGroupSelect01' title={PixelstrapThemeTitle} options={pixelstrapSelectList} />
                    </InputGroup>
                    <InputGroup>
                        <CustomFormSelect inputId='inputGroupSelect02' title={FavoriteColorsTitle} options={favoriteColorsData} />
                        <InputGroupText for="inputGroupSelect02">{Options}</InputGroupText>
                    </InputGroup>
                    <InputGroup>
                        <Btn color='secondary' outline><i className="fa-solid fa-credit-card" /></Btn>
                        <CustomFormSelect inputId='inputGroupSelect03' title={FavoriteChocolatesTitle} options={favoriteChocolatesData} />
                    </InputGroup>
                    <InputGroup>
                        <CustomFormSelect inputId='inputGroupSelect04' title={FavoriteThemeTitle} options={favoriteThemesData} />
                        <Btn color='secondary' outline>{Submit}</Btn>
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}