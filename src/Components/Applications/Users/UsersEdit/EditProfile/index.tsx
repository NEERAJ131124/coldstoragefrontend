import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Card, CardBody, CardFooter, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { Address, Back, City, EditProfileTitle, EmailAddress, FirstName, LastName, PostalCode, UpdateProfile } from '../../../../../Utils/Constants';
import { Btn } from '../../../../../AbstractElements';
import { getUserProfile, updateUserProfile } from '../../../../../api-service/Users/Index';
import { getCurrentLocation } from '../../../../../Common/methods';
import { getCountry, getStateByCountryId } from '../../../../../api-service/Location/Index';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors },setValue} = useForm();
    const [countryList, setCountryList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [countryId, setCountryId] = useState("");
    const [stateId, setStateId] = useState("");

    const getUser= async()=>{
        const response= await getUserProfile(navigate)
        debugger;
        console.log("edit user: " + response)
        if(response!=null){
            console.log("response: ",response.data)
            setValue('emailAddress',response.data.Email)
            setValue('phoneNumber',response.data.PhoneNumber)
            setValue('firstName',response.data.FirstName)
            setValue('lastName',response.data.LastName)
            setValue('city',response.data.GeoLocationId.City)
            setValue('address',response.data.GeoLocationId.StreetAddress)
            setValue('postalCode',response.data.GeoLocationId.Pincode)
            setValue('countryname',response.data.GeoLocationId.Country._id)
            setValue('state',response.data.GeoLocationId.State._id)
            setCountryId(response.data.GeoLocationId.Country._id)
            getStateList(response.data.GeoLocationId.Country._id);
            setStateId(response.data.GeoLocationId.State._id)
        }
    }

    const getCountryList = async () => {
        const response = await getCountry(navigate);
        if(response!=null){
        setCountryList(response.data);

        }
    }
    const getStateList = async (id:any) => {
        const response = await getStateByCountryId(id,navigate);
        if(response!=null){
            setStateList(response.data);
        }
        else {
            setStateList([]);
        }
    }

    useEffect(() => {
        getCountryList();
        getUser();
    },[])

   const handleCountryChange=(countryId:string)=>{
      setCountryId(countryId);
      getStateList(countryId)
    }

    const onEditSubmit =async (data:any) => {
       const location = await getCurrentLocation();
        const request ={
            PhoneNumber: data.phoneNumber,
            FirstName: data.firstName,
            LastName: data.lastName,
            GeoLocationData: {
                StreetAddress: data.address,
                District: data.city,
                City: data.city,
                State: data.state,
                Country: data.countryname,
                Pincode:data.postalCode,
                Latitude: location.latitude,
                Longitude: location.longitude,
            },
            IsActive: true,
            IsDeleted: false
        }
        console.log("data: ",request)
        await updateUserProfile(request,navigate);
    };

    return (
        <Col xl={12}>
            <Card>
                <Form onSubmit={handleSubmit(onEditSubmit)}>
                    <CommonCardHeader titleClass='card-title' title={EditProfileTitle} />
                    <CardBody>
                        <Row>
                        <input type="hidden" {...register('state')} />
                        <input type="hidden" {...register('country')} />
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>{EmailAddress}</Label>
                                    <input className="form-control" type="email" placeholder="Email" {...register('emailAddress', { required: true })} />
                                    {errors.emailAddress && <span style={{ color: 'red' }}>{'EmailAddress is required'} </span>}
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>Phone Number</Label>
                                    <input className="form-control" type="text" placeholder="Phone Number" {...register('phoneNumber', { required: true })} />
                                    {errors.phoneNumber && <span style={{ color: 'red' }}>{'Phone number is required'} </span>}
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>{FirstName}</Label>
                                    <input className="form-control" type="text" placeholder="First name" {...register('firstName', { required: true })} />
                                    {errors.firstName && <span style={{ color: 'red' }}>{'FirstName is required'} </span>}
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>{LastName}</Label>
                                    <input className="form-control" type="text" placeholder="Last name" {...register('lastName', { required: true })} />
                                    {errors.lastName && <span style={{ color: 'red' }}>{'LastName is required'} </span>}
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label>{Address}</Label>
                                    <input className="form-control" type="text" placeholder="Local Address" {...register('address', { required: true })} />
                                    {errors.address && <span style={{ color: 'red' }}>{'Address is required'} </span>}
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>Country</Label>
                                    <Input
                                        type="select"
                                        className="btn-square"
                                        {...register('countryname', { required: true })}
                                        value={countryId}
                                        onChange={(e) => {setValue('countryname', e.target.value);handleCountryChange(e.target.value)}}
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
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>State</Label>
                                    <Input
                                        type="select"
                                        className="btn-square"
                                        {...register('state', { required: true })}
                                        onChange={(e) => {setValue('state', e.target.value);setStateId(e.target.value)}}
                                        value={stateId}
                                    >
                                        <option value="">Select State</option>
                                        {stateList && stateList.map((state:any, index) => (
                                            <option key={index} value={state._id}>
                                                {state.StateName}
                                            </option>
                                        ))}
                                    </Input>
                                    {errors.state && (
                                        <span style={{ color: 'red' }}>State selection is required.</span>
                                    )}
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>{City}</Label>
                                    <input className="form-control" type="text" placeholder="City" {...register('city', { required: true })} />
                                    {errors.city && <span style={{ color: 'red' }}>{'City is required'} </span>}
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>{PostalCode}</Label>
                                    <input className="form-control" type="number" placeholder="ZIP Code" {...register('postalCode', { required: true })} />
                                    {errors.postalCode && <span style={{ color: 'red' }}>{'Zip code is required'} </span>}
                                </FormGroup>
                            </Col>
                     
                            {/* <Col md={12}>
                                <div>
                                    <Label>{AboutMe}</Label>
                                    <Input type="textarea" rows="4" placeholder="Enter About your description" />
                                </div>
                            </Col> */}
                        </Row>
                    </CardBody>
                    <CardFooter className="text-end mb-3"> 
                        <Btn color='primary' className='mx-2' type='submit'>{UpdateProfile}</Btn>
                        <Btn color='primary' type='button' onClick={()=>navigate('/users/user_profile')}>{Back}</Btn>
                    </CardFooter>
                </Form>
            </Card>
        </Col>
    )
}