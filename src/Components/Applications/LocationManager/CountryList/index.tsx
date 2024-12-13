import React, { useEffect, useState } from 'react'
import { Card, Col, Table } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import {  Href } from '../../../../Utils/Constants'
import TableHead from '../../../../Utils/CommonComponents/TableHead'
import { addCountryTableHead } from '../../../../Data/Applications/Users'
import { Btn } from '../../../../AbstractElements'
import { deleteCountry, getCountry } from '../../../../api-service/Location/Index'
import { formatDate } from '../../../../Common/methods'
import { useNavigate } from 'react-router-dom'

export default function CountryList({ onEditCountry }: { onEditCountry: (country: any) => void }) {
    const [countryList,setCountryList]= useState([])
    const navigate = useNavigate()
    const getCountryList=async ()=>{
       const response= await getCountry(navigate);
       setCountryList(response.data)
    }

    useEffect(()=>{
        getCountryList();
    },[])

    const deleteData=(id:any)=>{
        console.log(id)
        deleteCountry(id,navigate)
        getCountryList();
    }

    return (
        <Col md={12}>
            <Card>
                <CommonCardHeader title="Country List" titleClass='card-title' />
                <div className="table-responsive theme-scrollbar add-project">
                    <Table className="card-table table-vcenter text-nowrap">
                        <TableHead headeData={addCountryTableHead} />
                        <tbody>
                            {countryList.map((item:any, i) => (
                                <tr key={i}>
                                     <td>
                                        <a className="text-inherit" href={Href} >{item.ISOCode}</a>
                                    </td>
                                    <td>
                                        <a className="text-inherit" href={Href} >{item.CountryName}</a>
                                    </td>
                                   
                                    {/* <td><span className="status-icon">{item.status}</span></td> */}
                                    <td>{item.IsActive?"Yes":"No"}</td>
                                    <td>{formatDate(item.CreatedOn)}</td>
                                    <td className="text-end">
                                        <a className="icon" href={Href} >
                                            <Btn color='primary' size='sm' className='mx-1' onClick={()=>onEditCountry(item)}>
                                                <i className="fa-solid fa-pencil me-1"></i>{'Edit'}
                                            </Btn>
                                        </a>
                                        {/* <a className="icon" href={Href} ><Btn color='transparent' size='sm'><i className="fa-solid fa-link me-1"></i>{'Update'}</Btn></a> */}
                                        <a className="icon" href={Href} ><Btn color='danger' size='sm' onClick={()=>{deleteData(item._id)}}><i className="fa-solid fa-trash me-1"></i>{'Delete'}</Btn></a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Card>
        </Col>
    )
}