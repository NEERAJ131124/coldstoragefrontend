import React, { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';
import { X } from 'react-feather';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { Btn, H6, Image } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import { Dollar, Href } from '../../../../../Utils/Constants';
import { orderHistoryData } from '../../../../../Data/Applications/ECommerce/OrderHistory';

export default function OrderCards() {
    const [closedCards, setClosedCards] = useState<number[]>([]);
    const toggleCard = (index: number) => {
        setClosedCards((prevClosedCards) =>
            prevClosedCards.includes(index)
                ? prevClosedCards.filter((item) => item !== index)
                : [...prevClosedCards, index]
        );
    };
    const isCardClosed = (index: number) => closedCards.includes(index);
    return (
        <Col sm={12}>
            {orderHistoryData.map((item) => (
                <Card key={item.id}>
                    <CommonCardHeader title={item.heading} />
                    <CardBody>
                        <Row className="g-sm-4 g-3">
                            {item.details.map((product) => (
                                <Col xxl={4} md={6} key={product.id}>
                                    {!isCardClosed(product.id) && (
                                        <div className="prooduct-details-box">
                                            <div className="d-flex">
                                                <Image className="align-self-center img-fluid img-60" src={dynamicImage(`ecommerce/product-table-${product.image}`)} alt="#" />
                                                <div className="flex-grow-1">
                                                    <div className="product-name">
                                                        <H6><a href={Href}>{product.name}</a></H6>
                                                    </div>
                                                    <div className="rating"><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /></div>
                                                    <div className="price d-flex p-0 border-0">
                                                        <div className="text-muted me-2">{'Price'}</div>: {Dollar}{product.price}
                                                    </div>
                                                    <div className="avaiabilty">
                                                        <div className="text-success">{'In stock'}</div>
                                                    </div>
                                                    <Btn color={product.color} size='xs'>{product.avaiabilty}</Btn>
                                                    <X className='close' onClick={() => toggleCard(product.id)} />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Col>
                            ))}
                        </Row>
                    </CardBody>
                </Card>
            ))}
        </Col>
    )
}