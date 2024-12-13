import React from 'react'
import { Container, Row } from 'reactstrap'
import CustomSwitch from './CustomSwitch'
import IconUncheckedBorderSwitch from './IconUncheckedBorderSwitch'
import DisabledOutlineSwitch from './DisabledOutlineSwitch'
import VariationOfSwitches from './VariationOfSwitches'
import SwitchSizingIcons from './SwitchSizingIcons'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { FormWidgetsTitle, SwitchTitle } from '../../../../Utils/Constants'

export default function SwitchContainer() {
  return (
    <>
      <Breadcrumbs pageTitle={SwitchTitle} parent={FormWidgetsTitle} title={SwitchTitle} />
      <Container fluid>
        <Row>
          <CustomSwitch />
          <IconUncheckedBorderSwitch />
          <DisabledOutlineSwitch />
          <VariationOfSwitches />
          <SwitchSizingIcons />
        </Row>
      </Container>
    </>
  )
}