import React, { useEffect, useState } from 'react'
import { Card, Col, Table } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import {  Href } from '../../../../Utils/Constants'
import TableHead from '../../../../Utils/CommonComponents/TableHead'
import {  addStateTableHead } from '../../../../Data/Applications/Users'
import { Btn } from '../../../../AbstractElements'
import {  deleteState, getState } from '../../../../api-service/Location/Index'
import { formatDate } from '../../../../Common/methods'
import { useNavigate } from 'react-router-dom'

export default function StateList({ onEditState, }: { onEditState: (state: any) => void }) {
    const [stateList,setStateList]= useState([])
const navigate = useNavigate()
    const getStateList=async ()=>{
       const response= await getState(navigate);
       setStateList(response.data)
    }

    useEffect(()=>{
        getStateList();
    },[])

    const deleteData=(id:any)=>{
        console.log(id)
        deleteState(id,navigate)
        getStateList();
    }

    return (
        <Col md={12}>
            <Card>
                <CommonCardHeader title="State List" titleClass='card-title' />
                <div className="table-responsive theme-scrollbar add-project">
                    <Table className="card-table table-vcenter text-nowrap">
                        <TableHead headeData={addStateTableHead} />
                        <tbody>
                            {stateList.length>0? stateList.map((item:any, i) => (
                                <tr key={i}>
                                    <td>
                                        <a className="text-inherit" href={Href} >{item.StateName}</a>
                                    </td>
                                    <td><span className="status-icon">{item.IsActive?"Yes":"No"}</span></td>
                                    <td>{formatDate(item.CreatedOn)}</td>
                                    <td className="text-end">
                                        <a className="icon" href={Href}><Btn color='primary' className='mx-1' onClick={()=>onEditState(item)} size='sm'><i className="fa-solid fa-pencil me-1"></i>{'Edit'}</Btn></a>
                                        {/* <a className="icon" href={Href} ><Btn color='transparent' size='sm'><i className="fa-solid fa-link me-1"></i>{'Update'}</Btn></a> */}
                                        <a className="icon" href={Href} ><Btn color='danger' size='sm' onClick={()=>deleteData(item._id)}><i className="fa-solid fa-trash me-1"></i>{'Delete'}</Btn></a>
                                    </td>
                                </tr>)):
                                <tr>
                                    <td colSpan={6} className="text-center">No Data Found</td>
                                </tr>
                            }
                        </tbody>
                    </Table>
                </div>
            </Card>
        </Col>
    )
}