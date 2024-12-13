import React, { useState } from 'react'
import { Col, Row } from 'reactstrap';
import { Rating } from 'react-simple-star-rating';
import { H5 } from '../../../../../AbstractElements';

export default function StarRating() {
    const [rating, setRating] = useState(1);
    const handleRatingChange = (newRating: number) => {
        setRating(newRating);
    };

    return (
        <Row>
            <Col md={4}>
                <H5 className="f-w-700 product-title">{'Rate Now'}</H5>
            </Col>
            <Col md={8}>
                <div className='d-flex product-rating'>
                    <Rating
                        initialValue={rating}
                        size={20}
                        transition
                        fillColor="gold"
                        emptyColor="gray"
                        onClick={handleRatingChange}
                    />
                    <span>{' (250 review)'}</span>
                </div>
            </Col>
        </Row>
    )
}