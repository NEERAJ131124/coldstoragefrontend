import React from 'react'
import { useDispatch } from 'react-redux';
import { Col, Form, FormGroup, Input } from 'reactstrap';
import { setSearchInput } from '../../../../../../ReduxToolkit/Reducers/ECommerce/ProductReducer';

export default function ProductSearch() {
    const dispatch = useDispatch();
    const handleSearchKeyword = (e: { target: { value: string } }) => {
        dispatch(setSearchInput(e.target.value));
    };
    return (
        <Col md={9} sm={12}>
            <Form>
                <FormGroup className="m-0 form-group">
                    <Input
                        type="text"
                        placeholder="Search.."
                        onChange={(e) => handleSearchKeyword}
                    />
                    <i className="fa-solid fa-magnifying-glass" />
                </FormGroup>
            </Form>
        </Col>
    )
}