import React, { useState } from 'react'
import { Col, Form, FormGroup, Input, InputGroup, Label, Row } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import ReactDatePicker from 'react-datepicker';
import { H6 } from '../../../../../AbstractElements';
import { CollegeName, DegreeLevel, Period, Specialization, YourEducationTitle } from '../../../../../Utils/Constants';
import { degreeLevel } from '../../../../../Data/Miscellaneous/JobSearch';

export default function YourEducation() {
    const [selectedDates, setSelectedDates] = useState<Date[]>([]);
    const handleDateChange = (date: Date, index: number) => {
        const updatedDates = [...selectedDates]; updatedDates[index] = date;
        setSelectedDates(updatedDates);
    };
    return (
        <>
            <H6 className="mb-0">{YourEducationTitle}</H6>
            <Form className='theme-form'>
                <Row className='select-date'>
                    <Col xl={6} className='xl-100'>
                        <FormGroup>
                            <Label htmlFor='exampleFormControlInput5'>{CollegeName}:<span className='font-danger'>{'*'}</span></Label>
                            <Input id='exampleFormControlInput5' type='text' placeholder='Enter college name' />
                        </FormGroup>
                    </Col>
                    <Col xl={6} className="xl-100 xl-mt-job">
                        <Col><Label className='text-end pt-0'>{Period}:<span className='font-danger'>{'*'}</span></Label></Col>
                        <Row>
                            <Col sm={6}>
                                <InputGroup>
                                    <ReactDatePicker className="form-control digits" placeholderText="Start Date" selected={selectedDates[0]} onChange={(date) => handleDateChange(date as Date, 0)} />
                                </InputGroup>
                            </Col>
                            <Col sm={6} className="xs-mt-period">
                                <InputGroup>
                                    <ReactDatePicker className='form-control digits' placeholderText="End Date" selected={selectedDates[1]} onChange={(date) => handleDateChange(date as Date, 1)} />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={6} className="xl-100">
                        <FormGroup>
                            <Col><Label className='pt-0'>{DegreeLevel}:<span className='font-danger'>{'*'}</span></Label></Col>
                            <Typeahead id='basic-typeahead' labelKey='name' options={degreeLevel} placeholder='Degree' />
                        </FormGroup>
                    </Col>
                    <Col xl={6} className="xl-100">
                        <FormGroup>
                            <Label htmlFor='exampleFormControlInput6'>{Specialization}:<span className='font-danger'>{'*'}</span></Label>
                            <Input id='exampleFormControlInput6' type='text' placeholder='Enter specialization' />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </>
    )
}