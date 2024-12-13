import React, { ChangeEvent } from 'react'
import { Col, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { sortBy } from '../../../../../../ReduxToolkit/Reducers/ECommerce/ProductReducer';

export default function Sorting() {
    const dispatch = useDispatch();
    const filterSort = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(sortBy(event.target.value));
    };

    return (
        <Col md={6} className="text-sm-end">
            <span className="f-w-600 m-r-5"> {'Showing Products 1 - 24 Of 200 Results'}</span>
            <div className="select2-drpdwn-product select-options d-inline-block">
                <Input className="btn-square form-control ms-1" name="select" type='select' onClick={() => filterSort}>
                    <option value="opt1">{'Featured'}</option>
                    <option value="opt2">{'Lowest Prices'}</option>
                    <option value="opt3">{'Highest Prices'}</option>
                </Input>
            </div>
        </Col>
    )
}