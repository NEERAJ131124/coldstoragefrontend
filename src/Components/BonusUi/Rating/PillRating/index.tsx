//@ts-nocheck
import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Rating from 'react-rating';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { PillRatingTitle } from '../../../../Utils/Constants';
import { pillRatingData } from '../../../../Data/BonusUi/Rating';

export default function PillRating() {
    const [rating, setRating] = useState(1);
    const pillData = ["A", "B", "C", "D", "E"];

    return (
        <Col xl={4}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={PillRatingTitle} subTitle={pillRatingData} />
                <CardBody>
                    <div className="rating pill-rating-list">
                        <Rating initialRating={rating} emptySymbol={pillData.map((n: string) => (<span className="pill-rating" key={n}>{n}</span>))}
                            fullSymbol={pillData.map((n: string) => (<span className="pill-rating br-current" key={n}>{n}</span>))}
                            onClick={(rate) => setRating(rate)}
                        />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
