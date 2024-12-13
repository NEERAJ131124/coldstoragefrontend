import React from 'react'
import { Col, Row } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { ChevronDown, Grid, List } from 'react-feather';
import { Href } from '../../../../../../Utils/Constants';
import { toggleColumnGrid, toggleRowGrid, toggleSidebar } from '../../../../../../ReduxToolkit/Reducers/ECommerce/FilterReducer';
import GridOptions from './GridOptions';
import Sorting from './Sorting';

export default function TotalProducts() {
    const dispatch = useDispatch();
    return (
        <Row className='mb-2'>
            <Col md={6} className="products-total">
                <div className="square-product-setting d-inline-block">
                    <a className="icon-grid grid-layout-view" href={Href} onClick={() => { dispatch(toggleColumnGrid()); }}><Grid /></a>
                </div>
                <div className="square-product-setting d-inline-block">
                    <a className="icon-grid m-0 list-layout-view" href={Href} onClick={() => { dispatch(toggleRowGrid()); }}> <List /></a>
                </div>
                <span className="d-none-productlist filter-toggle">{'Filters'}
                    <span className="ms-2" onClick={() => { dispatch(toggleSidebar()) }}><ChevronDown className="toggle-data" /></span>
                </span>
                <GridOptions />
            </Col>
            <Sorting />
        </Row>
    )
}