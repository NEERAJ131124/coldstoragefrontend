import React from 'react'
import { Container, Row } from 'reactstrap'
import DefaultCheckbox from './DefaultCheckbox'
import CustomCheckbox from './CustomCheckbox'
import DefaultRadio from './DefaultRadio'
import ImagesWithCheckbox from './ImagesWithCheckbox'
import ImagesWithRadio from './ImagesWithRadio'
import CustomRadio from './CustomRadio'
import DefaultSwitches from './DefaultSwitches'
import InlineInputTypes from './InlineInputTypes'
import AnimatedButtons from './AnimatedButtons'
import BasicRadioAndCheckbox from './BasicRadioAndCheckbox'
import RadioToggleButtons from './RadioToggleButtons'
import OutlinedCheckboxStyles from './OutlinedCheckboxStyles'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { CheckboxAndRadioTitle, FormControlsTitle } from '../../../../Utils/Constants'

export default function CheckboxAndRadioContainer() {
  return (
    <>
      <Breadcrumbs pageTitle={CheckboxAndRadioTitle} parent={FormControlsTitle} title={CheckboxAndRadioTitle} />
      <Container fluid className='radio-checkbox-page'>
        <Row>
          <DefaultCheckbox />
          <CustomCheckbox />
          <DefaultRadio />
          <ImagesWithCheckbox />
          <ImagesWithRadio />
          <CustomRadio />
          <DefaultSwitches />
          <InlineInputTypes />
          <AnimatedButtons />
          <BasicRadioAndCheckbox />
          <RadioToggleButtons />
          <OutlinedCheckboxStyles />
        </Row>
      </Container>
    </>
  )
}