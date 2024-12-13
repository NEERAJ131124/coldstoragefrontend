//@ts-nocheck
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Rating from 'react-rating';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { HalfStarRatingTitle } from '../../../../Utils/Constants';
import { starRatingData } from '../../../../Data/BonusUi/Rating';

export default function HalfStarRating() {
    const [rating, setRating] = useState(1.5);

    return (
        <Col xl={4}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={HalfStarRatingTitle} subTitle={starRatingData} />
                <CardBody>
                    <div className="rating">
                        <Rating initialRating={rating} fractions={2} emptySymbol="text-primary fa-regular fa-star fa-2x" fullSymbol="text-primary fa-solid fa-star fa-2x" onChange={(rate) => setRating(rate)} />
                        <span className="current-rating">{rating}</span>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
