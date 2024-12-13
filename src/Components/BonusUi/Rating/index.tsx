import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { BonusUi, RatingTitle } from '../../../Utils/Constants'
import StarRating from './StarRating'
import RatingFeedback from './RatingFeedback'
import PillRating from './PillRating'
import ReverseRating from './ReverseRating'
import HalfStarRating from './HalfStarRating'
import ThumbUpDown from './ThumbUpDown'

export default function RatingContainer() {
  return (
    <>
      <Breadcrumbs pageTitle={RatingTitle} parent={BonusUi} title={RatingTitle} />
      <Container fluid>
        <Row>
          <StarRating />
          <RatingFeedback />
          <PillRating />
          <ReverseRating />
          <HalfStarRating />
          <ThumbUpDown />
        </Row>
      </Container>
    </>
  )
}