//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Rating from 'react-rating';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { RatingFeedbackTitle } from '../../../../Utils/Constants';
import { ratingFeedbackData } from '../../../../Data/BonusUi/Rating';

export default function RatingFeedback() {
    const [rating, setRating] = useState(1);
    const [status, setStatus] = useState("Not Bad");

    useEffect(() => {
        switch (rating) {
            case 1:
                setStatus("Not Bad");
                break;
            case 2:
                setStatus("Its Ok");
                break;
            case 3:
                setStatus("Good!");
                break;
            case 4:
                setStatus("Very Good!");
                break;
            default:
                setStatus("Awesome!!");
                break;
        }
    }, [rating]);

    return (
        <Col xl={4}>
            <Card>
                <CommonCardHeader headClass='pb-0' title={RatingFeedbackTitle} subTitle={ratingFeedbackData} />
                <CardBody>
                    <div className="rating">
                        <Rating stop={5} initialRating={rating} emptySymbol="fa-regular fa-heart text-primary fa-2x me-1" fullSymbol="text-primary fa-solid fa-heart fa-2x" onChange={(rate: number) => setRating(rate)} />
                        <span className="text">{status}</span>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
};