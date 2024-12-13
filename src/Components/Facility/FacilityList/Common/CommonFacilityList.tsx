import React from 'react'
import { Col, Row } from 'reactstrap'
import { Badges, H5, Image, LI, P, ProgressBar, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'
import { CommonFacilityListProps } from '../../../../Types/Facility.type'
import { createNameProfileImage } from '../../../../Common/methods'

export default function CommonFacilityList({ item }: any) {
   const handlePayment=()=>{
      alert("please complete payment")
    }
    return (
        <Col xxl={4} md={6}>
            <div className={`project-box font-dark bg-light-${item.IsActive ? 'success' : 'danger'}`}>
                <Badges style={{cursor:'pointer'}} color={item.IsActive ? 'success' : 'danger'} onClick={()=>handlePayment()}>{item.IsActive? "Active":"Verification Pending"}</Badges>
                <H5 className={`f-w-500 mb-2 text-${item.IsActive? 'success' : 'danger'}`}> {item.Name}</H5>
                <div className="d-flex mb-2 align-items-center">
                    <Image className='img-20 me-1 rounded-circle' src={createNameProfileImage(item.Name,item.Name)} alt='' />
                    <P className="font-light">{item.Name}</P>
                </div>
                <Row className='details'>
                    <Col xs={4}>
                        <span>{'Email'} </span>
                    </Col>
                    <Col xs={8} className={`font-${item.IsActive ? 'success' : 'danger'}`}>
                        {item.ContactDetails[1]}
                    </Col>
                    <Col xs={4}>
                        <span>{'Phone'} </span>
                    </Col>
                    <Col xs={8} className={`font-${item.IsActive ? 'success' : 'danger'}`}>
                        {item.ContactDetails[0]}
                    </Col>
                    <Col xs={4}>
                        <span>{'City'} </span>
                    </Col>
                    <Col xs={8} className={`font-${item.IsActive ? 'success' : 'danger'}`}>
                        {item.GeoLocation.City}
                    </Col>
                    <Col xs={4}>
                        <span>{'State'} </span>
                    </Col>
                    <Col xs={8} className={`font-${item.IsActive ? 'success' : 'danger'}`}>
                        {item.GeoLocation.State.StateName}
                    </Col>
                    <Col xs={4}>
                        <span>{'Country'}</span>
                    </Col>
                    <Col xs={8} className={`font-${item.IsActive? 'success' : 'danger'}`}>
                        {item.GeoLocation.Country.CountryName}
                    </Col>
                    <Col xs={4}>
                        <span>{'Operating(hrs.)'}</span>
                    </Col>
                    <Col xs={8} className={`font-${item.IsActive ? 'success' : 'danger'}`}>
                        {item.OperatingHours}
                    </Col>
                </Row>
                <div className='customers'>
                    <UL className='simple-list flex-row'>
                        <LI className='d-inline-block' >
                            <Image className='img-30 rounded-circle' src={createNameProfileImage(item.Name,item.Name)} alt='' />
                        </LI>
                        <LI className='d-inline-block' >
                            <Image className='img-30 rounded-circle' src={createNameProfileImage(item.Name,item.Name)} alt='' />
                        </LI>
                        <LI className='d-inline-block' >
                            <Image className='img-30 rounded-circle' src={createNameProfileImage(item.Name,item.Name)} alt='' />
                        </LI>
                        <LI className='d-inline-block ms-2' >
                            <P className='f-12' >{`+ More`}</P>
                        </LI>
                    </UL>
                </div>
                <div className='project-status mt-4'>
                    {
                        item.StorageFacilityCapacities.map((item:any,index:any) =>(
                            <div key={item.StorageTypeId.TypeId} className="d-flex justify-content-between align-items-center gap-1 mb-2">
                                <P className="mb-0">{item.StorageTypeId.Type}</P>
                                <P className="mb-0">{item.StorageCapacity} {item.CapacityUnit}</P>

                                {/* <ProgressBar style={{ height: "5px" }} className={`bg-light-${item.IsActive? 'success' : 'danger'}`} color={item.IsActive? 'success' : 'danger'} value={item.Percentage} striped animated /> */}
                            </div>
                        ))
                    }
                    {/* <div className="d-flex align-items-center gap-1 mb-2">
                        <P className="mb-0">{item.StorageFacilityCapacities[0].StorageTypeId.Type}{'%'}</P>
                        <P className="mb-0">{item.StorageFacilityCapacities[0].StorageTypeId.Type}{'%'}</P>
                    </div> */}
                    <ProgressBar style={{ height: "5px" }} className={`bg-light-${item.IsActive? 'success' : 'danger'}`} striped animated />
                </div>
            </div>
        </Col>
    )
}