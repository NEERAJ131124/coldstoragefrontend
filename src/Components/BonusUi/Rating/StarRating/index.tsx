//@ts-nocheck
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Rating from 'react-rating';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { starRatingData } from '../../../../Data/BonusUi/Rating';
import { StarRatingTitle } from '../../../../Utils/Constants';

export default function StarRating() {
    const [rating, setRating] = useState(0);

    return (
        <Col xl={4}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={StarRatingTitle} subTitle={starRatingData} />
                <CardBody>
                    <div className="rating">
                        <Rating initialRating={rating} emptySymbol="text-warning fa-regular fa-star fa-2x" fullSymbol="text-warning fa-solid fa-star fa-2x" onChange={(rate) => setRating(rate)} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
}
