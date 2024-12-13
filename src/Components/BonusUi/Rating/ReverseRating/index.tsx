//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Rating from 'react-rating';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { ReversedRatingTitle } from '../../../../Utils/Constants';
import { reverseRatingData } from '../../../../Data/BonusUi/Rating';
import { dynamicNumber } from '../../../../Utils';

export default function ReverseRating() {
    const [rating, setRating] = useState(3);
    const [status, setStatus] = useState("Disagree");

    useEffect(() => {
        switch (rating) {
            case 1:
                setStatus("Strongly Disagree");
                break;
            case 2:
                setStatus("Agree");
                break;
            case 3:
                setStatus("Neither Agree or Disagree");
                break;
            case 4:
                setStatus("Disagree");
                break;
            default:
                setStatus("Strongly Disagree");
                break;
        }
    }, [rating]);

    return (
        <Col xl={4}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={ReversedRatingTitle} subTitle={reverseRatingData} />
                <CardBody>
                    <div className="rating reverse">
                        <Rating initialRating={rating} emptySymbol={dynamicNumber(5).map((n) => (<span className="square-number active" key={n} />))}
                            fullSymbol={dynamicNumber(5).map((n) => (<span className="square-number bg-primary border-primary" key={n} />))}
                            direction="rtl"
                            onChange={(rate: number) => { setRating(rate); }} />
                        <span className="text-primary current-rating fs-6 ms-2">{status}</span>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}