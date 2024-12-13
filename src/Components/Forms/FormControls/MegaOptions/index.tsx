import React from 'react'
import { Container, Row } from 'reactstrap'
import VariationRadio from './VariationRadio'
import VariationCheckbox from './VariationCheckbox'
import DefaultStyle from './DefaultStyle'
import WithoutBordersStyle from './WithoutBordersStyle'
import SolidBorderStyle from './SolidBorderStyle'
import OfferStyleBorder from './OfferStyleBorder'
import InlineStyle from './InlineStyle'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'
import { FormControlsTitle, MegaOptionsTitle } from '../../../../Utils/Constants'
import VerticalStyle from './VerticalStyle'
import HorizontalStyle from './HorizontalStyle'

export default function MegaOptionsContainer() {
  return (
    <>
      <Breadcrumbs pageTitle={MegaOptionsTitle} parent={FormControlsTitle} title={MegaOptionsTitle} />
      <Container fluid className='mega-option'>
        <Row>
          <VariationRadio />
          <VariationCheckbox />
          <DefaultStyle />
          <WithoutBordersStyle />
          <SolidBorderStyle />
          <OfferStyleBorder />
          <InlineStyle />
          <VerticalStyle />
          <HorizontalStyle />
        </Row>
      </Container>
    </>
  )
}