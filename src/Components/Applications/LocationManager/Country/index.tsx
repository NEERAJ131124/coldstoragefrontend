import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardBody, Col, Form, FormGroup, Label, Row } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { Btn } from '../../../../AbstractElements';
import CountryList from '../CountryList';
import { addCountry } from '../../../../api-service/Location/Index';
import { useNavigate } from 'react-router-dom';

export default function AddCountry() {
  const [selectedCountry, setSelectedCountry] = useState<any>(null); // State to track selected country
  const { register, handleSubmit, formState: { errors }, setValue,clearErrors } = useForm();
const navigate = useNavigate()
  // Populate the form fields when a country is selected
  useEffect(() => {
    if (selectedCountry) {
      setValue('countryId', selectedCountry.id || ''); // Assuming `id` is the identifier
      setValue('countryCode', selectedCountry.ISOCode || '');
      setValue('countryName', selectedCountry.CountryName || '');
    }
  }, [selectedCountry, setValue]);

  const clearForm=()=>{
    setValue('countryId', '');
    setValue('countryCode', '');
    setValue('countryName', '');
    clearErrors();
  };

  // Handler to process form submission
  const onEditSubmit = async (data: any) => {
    const request = {
      ISOCode: data.countryCode,
      CountryName: data.countryName,
    };
    await addCountry(request,navigate);
  };

  return (
    <Col xl={12}>
      <Card>
        <Form onSubmit={handleSubmit(onEditSubmit)}>
          <CommonCardHeader titleClass='card-title' title="Country" />
          <CardBody>
            <Row>
              {/* Hidden field for countryId */}
              <input
                className="form-control"
                id='countryId'
                type="text"
                hidden
                {...register('countryId')}
              />

              {/* Country Code Input */}
              <Col sm={5} md={5}>
                <FormGroup>
                  <Label>Country Code</Label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Country Code"
                    {...register('countryCode', { required: true })}
                  />
                  {errors.countryCode && <span style={{ color: 'red' }}>{'Country code is required.'}</span>}
                </FormGroup>
              </Col>

              {/* Country Name Input */}
              <Col sm={5} md={5}>
                <FormGroup>
                  <Label>Country Name</Label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Country Name"
                    {...register('countryName', { required: true })}
                  />
                  {errors.countryName && <span style={{ color: 'red' }}>{'Country Name is required.'}</span>}
                </FormGroup>
              </Col>

              {/* Submit Button */}
              <Col sm={2} md={2} className='my-auto d-flex justify-content-between'>
                <Btn color='primary' className='mt-2 text-end' type="submit">Add/Update</Btn>
                <Btn color='danger' className='mt-2 text-end' onClick={clearForm} type="button">Clear</Btn>
              </Col>
            </Row>
          </CardBody>
        </Form>
      </Card>

      {/* Country List */}
      <CountryList onEditCountry={setSelectedCountry} /> {/* Pass handler */}
    </Col>
  );
}
