import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { Bio, EmailAddress, MyProfileTitle, Password, Save, UpdateProfile, Website } from '../../../../../Utils/Constants'
import { Btn, H3, H4, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { getUserProfile } from '../../../../../api-service/Users/Index'
import { useNavigate } from 'react-router-dom'
import { UserResponse } from '../../../../../Types/Users.type'
import { createNameProfileImage } from '../../../../../Common/methods'


export default function MyProfile() {
    const navigate = useNavigate()
    const [userProfile, setUserProfile] = useState<UserResponse | null>(null);
    const getUser= async()=>{
        const response= await getUserProfile(navigate)
        if(response!=null){
            console.log("response: ",response.data)
            setUserProfile(response.data)
        }
    }

    useEffect(()=>{
        getUser();
    },[])

    return (
        <Col xl={12}>
            <Card>
                <CommonCardHeader titleClass='card-title' title={MyProfileTitle} />
                <CardBody>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Row className="mb-2">
                            <div className="profile-title mb-2">
                                <div className="d-flex gap-3">
                                    {/* <Image className="img-70 rounded-circle" alt="" src={dynamicImage(`user/7.jpg`)} /> */}
                                    <Image className="img-70 rounded-circle" alt="" src={createNameProfileImage(userProfile?.FirstName??"U",userProfile?.LastName??"K")} />

                                    <div className="flex-grow-1">
                                        <H3 className="mb-1">{userProfile?.FirstName} {userProfile?.LastName}</H3>
                                        {/* <P>{'DESIGNER'}</P> */}
                                    </div>
                                    <div className="flex-grow-1 text-end">
                                    <Btn color='primary' type='button' onClick={()=>navigate('/users/user_edit')}>{UpdateProfile}</Btn>
                                    </div>
                                </div>
                            </div>
                            <Col sm={6} md={6}>
                            <FormGroup>
                                <Label>{EmailAddress}</Label>
                                <Input type="email" value={userProfile?.Email} disabled/>
                            </FormGroup>
                            </Col>
                            <Col sm={6} md={6}>
                            <FormGroup>
                                <Label>Phone Number</Label>
                                <Input type="text" value={userProfile?.PhoneNumber} disabled/>
                            </FormGroup>
                            </Col>
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>Street Address</Label>
                                    <Input type="text" value={userProfile?.GeoLocationId.StreetAddress} disabled/>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>City</Label>
                                    <Input type="text" value={userProfile?.GeoLocationId.City} disabled/>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>Pincode</Label>
                                    <Input type="text" value={userProfile?.GeoLocationId.Pincode} disabled/>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>Country</Label>
                                    <Input type="text" value={userProfile?.GeoLocationId.Country.CountryName} disabled/>
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6}>
                                <FormGroup>
                                    <Label>State</Label>
                                    <Input type="text" value={userProfile?.GeoLocationId.State.StateName} disabled/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}