import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { H6, Image } from '../../../../../../AbstractElements';
import { toggleSidebar } from '../../../../../../ReduxToolkit/Reducers/ECommerce/FilterReducer';
import { dynamicImage } from '../../../../../../Utils';
import ProductCategory from './ProductCategory';
import NewProductSlides from './NewProductSlides';
import ProductSearch from './ProductSearch';
import { RootState } from '../../../../../../ReduxToolkit/Store';

export default function ProductSidebar() {
    const dispatch = useDispatch();
    const { sidebarOpen } = useSelector((state: RootState) => state.filter);

    return (
        <Row>
            <Col sm={3}>
                <div className={`product-sidebar ${sidebarOpen ? "open" : ""}`}>
                    <div className="filter-section">
                        <Card>
                            <CardHeader>
                                <H6 className="mb-0 f-w-600">{'Filters'}
                                    <span className="pull-right">
                                        <i className="fa-solid fa-angle-down toggle-data" onClick={() => { dispatch(toggleSidebar()) }} />
                                    </span>
                                </H6>
                            </CardHeader>
                            <div className="left-filter">
                                <CardBody className="filter-cards-view animate-chk">
                                    <ProductCategory />
                                    <NewProductSlides />
                                    <div className="product-filter text-center">
                                        <Image className='img-fluid banner-product' src={dynamicImage(`ecommerce/banner.jpg`)} alt='' />
                                    </div>
                                </CardBody>
                            </div>
                        </Card>
                    </div>
                </div>
            </Col>
            <ProductSearch />
        </Row>
    )
}