import React, { useState } from 'react'
import { Card, CardBody, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Filter } from 'react-feather';
import { Href } from '../../../../../Utils/Constants';
import { ProductListHeaderProp } from '../../../../../Types/ECommerce.type';
import ProductListBody from './ProductListBody';

export default function ProductListHeader({ linkTitle }: ProductListHeaderProp) {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const handleFilterToggle = () => {
        setIsFilterOpen((prevState) => !prevState);
    };
    return (
        <div className="list-product-header">
            <div>
                <div className="light-box">
                    <a href={Href} onClick={handleFilterToggle}>
                        {isFilterOpen ? <i className='icon-close filter-close' /> : <Filter className='filter-icon' />}
                    </a>
                </div>
                <Link className="btn btn-primary" to={`${process.env.PUBLIC_URL}/ecommerce/add_product`}>
                    <i className="fa-solid fa-plus" /> {linkTitle}</Link>
            </div>
            <Collapse isOpen={isFilterOpen}>
                <Card className="list-product-body">
                    <CardBody>
                        <ProductListBody />
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}