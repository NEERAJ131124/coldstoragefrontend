import React from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { ModalTitle, UiKits } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import BasicModal from './BasicModal'
import SizeModal from './SizeModal'
import FullscreenModal from './FullscreenModal'
import CenteredModal from './CenteredModal'
import NestedModal from './NestedModal'
import StaticModal from './StaticModal'
import CustomModals from './CustomModals'

export default function ModalContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={ModalTitle} parent={UiKits} title={ModalTitle} />
            <Container fluid>
                <Row className='g-lg-3'>
                    <BasicModal />
                    <SizeModal />
                    <FullscreenModal />
                    <CenteredModal />
                    <NestedModal />
                    <StaticModal />
                    <CustomModals />
                </Row>
            </Container>
        </>
    )
}
