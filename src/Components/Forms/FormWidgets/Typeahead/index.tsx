import React from 'react'
import { Container, Row } from 'reactstrap'
import CommonTypeahead from './Common/CommonTypeahead'
import { BasicTypeaheadTitle, MultipleSelectInputTitle, FormWidgetsTitle, PrefetchTitle, RTLSupportTitle, SelectOneInputsTitle, TypeaheadTitle } from '../../../../Utils/Constants'
import { basicTypeaheadSubTitle, bloodHoundSubTitle, prefetchSubTitle, rTlSupportSubTitle, remoteTypeaheadSubTitle } from '../../../../Data/Forms/FormWidgets/Typeahead'
import { countryList, movieList, statesOfUSA } from '../../../../Data/Forms/FormWidgets/Typeahead'
import MultipleSectionsWithHeaders from './MultipleSectionsWithHeaders'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'

export default function TypeaheadContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={TypeaheadTitle} parent={FormWidgetsTitle} title={TypeaheadTitle} />
            <Container fluid>
                <div className="typeahead">
                    <Row>
                        <CommonTypeahead title={BasicTypeaheadTitle} subTitle={basicTypeaheadSubTitle} options={statesOfUSA} placeholder="Choose a city" />
                        <CommonTypeahead title={PrefetchTitle} subTitle={prefetchSubTitle} options={countryList} placeholder="Countries" />
                        <CommonTypeahead title={MultipleSelectInputTitle} subTitle={bloodHoundSubTitle} options={statesOfUSA} placeholder="Choose a city" />
                        <CommonTypeahead title={SelectOneInputsTitle} subTitle={remoteTypeaheadSubTitle} options={movieList} placeholder="Choose Option" />
                        <MultipleSectionsWithHeaders />
                        <CommonTypeahead title={RTLSupportTitle} subTitle={rTlSupportSubTitle} options={countryList} className='w-100 rtl-typeahead' placeholder="Choose a city" />
                    </Row>
                </div>
            </Container>
        </>
    )
}