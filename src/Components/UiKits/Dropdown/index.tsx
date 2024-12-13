import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { DropdownTitle, UiKits } from '../../../Utils/Constants'
import BasicDropdown from './BasicDropdown'
import RoundedDropdown from './RoundedDropdown'
import SplitDropdown from './SplitDropdown'
import HeadingDropdown from './HeadingDropdown'
import DropdownWithInput from './DropdownWithInput'
import DarkDropdown from './DarkDropdown'
import UniqueDropdown from './UniqueDropdown'
import JustifyContent from './JustifyContent'
import Alignments from './Alignments'
import HelperCard from './HelperCard'
import DividerDropdown from './DividerDropdown'
import DropdownSizing from './DropdownSizing'

export default function DropdownContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={DropdownTitle} parent={UiKits} title={DropdownTitle} />
            <Container fluid className='ui-dropdown'>
                <Row>
                    <BasicDropdown />
                    <RoundedDropdown />
                    <SplitDropdown />
                    <HeadingDropdown />
                    <DropdownWithInput />
                    <DarkDropdown />
                    <UniqueDropdown />
                    <JustifyContent />
                    <Alignments />
                    <HelperCard />
                    <DividerDropdown />
                    <DropdownSizing />
                </Row>
            </Container>
        </>
    )
}
