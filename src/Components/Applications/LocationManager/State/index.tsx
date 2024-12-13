import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { Btn } from '../../../../AbstractElements';
import StateList from '../StateList';
import { addState, getCountry } from '../../../../api-service/Location/Index';
import { useNavigate } from 'react-router-dom';

export default function AddState() {
    const [selectedState, setSelectedState] = useState<any>(null);
    const [countryList, setCountryList] = useState([]);
    const { register, handleSubmit, formState: { errors }, setValue, clearErrors } = useForm();
    const [stateList,setStateList]= useState([])
    const navigate = useNavigate();
    // Fetch country list
    const fetchCountryList = async () => {
        try {
            const response = await getCountry(navigate);
            setCountryList(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Failed to fetch countries:', error);
        }
    };

    useEffect(() => {
        fetchCountryList();
    },[])
    // Populate form fields when a state is selected
    useEffect(() => {
        if (selectedState) {
            setValue('StateID', selectedState.id || '');
            setValue('StateName', selectedState.StateName || '');
            setValue('CountryID', selectedState.CountryID || '');
        }
    }, [selectedState, setValue]);

    // Clear form values
    const clearForm = () => {
        setValue('StateId', '');
        setValue('CountryID', '');
        setValue('StateName', '');

        clearErrors();
        setSelectedState(null);
    };

    // Submit handler for adding/updating a state
    const onSubmit = async (data: any) => {
        try {
            const request = {
                CountryID: data.CountryID,
                StateName: data.StateName,
            };
            await addState(request,navigate);
            clearForm(); // Clear form after successful submission
        } catch (error) {
            console.error('Failed to add/update state:', error);
        }
    };

    return (
        <Col xl={12}>
            <Card>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <CommonCardHeader titleClass="card-title" title="State" />
                    <CardBody>
                        <Row>
                            {/* Hidden Fields */}
                            <input type="hidden" {...register('StateId')} />
                            <input type="hidden" {...register('CountryID')} />
                            {/* Country Selector */}
                            <Col sm={4} md={4}>
                                <FormGroup>
                                    <Label>Country</Label>
                                    <Input
                                        type="select"
                                        className="btn-square"
                                        {...register('CountryID', { required: true })}
                                        onChange={(e) => {setValue('CountryID', e.target.value)}}
                                    >
                                        <option value="">Select Country</option>
                                        {countryList.map((country:any, index) => (
                                            <option key={index} value={country._id}>
                                                {country.CountryName}
                                            </option>
                                        ))}
                                    </Input>
                                    {errors.CountryID && (
                                        <span style={{ color: 'red' }}>Country selection is required.</span>
                                    )}
                                </FormGroup>
                            </Col>

                            {/* State Name Input */}
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>State Name</Label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="State Name"
                                        {...register('StateName', { required: true })}
                                    />
                                    {errors.StateName && (
                                        <span style={{ color: 'red' }}>State Name is required.</span>
                                    )}
                                </FormGroup>
                            </Col>

                            {/* Action Buttons */}
                            <Col sm={2} md={2} className="my-auto d-flex justify-content-between">
                                <Btn color="primary" className="mt-2" type="submit">
                                    Add/Update
                                </Btn>
                                <Btn color="danger" className="mt-2" onClick={clearForm} type="button">
                                    Clear
                                </Btn>
                            </Col>
                        </Row>
                    </CardBody>
                </Form>
            </Card>

            {/* State List */}
            <StateList onEditState={setSelectedState} />
        </Col>
    );
}
