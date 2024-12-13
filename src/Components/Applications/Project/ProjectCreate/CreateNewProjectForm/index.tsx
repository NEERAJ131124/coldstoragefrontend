import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Col, Form, FormGroup, Input, Row } from 'reactstrap'
import { RegisterType } from '../../../../../Types/Project.type';
import { Btn, H5 } from '../../../../../AbstractElements';
import { Add, Big, Cancel, ClientName, EnterSomeDetails, Medium, ProjectRate, ProjectSize, ProjectTitleLabel, Small } from '../../../../../Utils/Constants';
import DropItems from './DropItems';
import StartEndDate from './StartEndDate';
import UploadFile from './UploadFile';
import { setProjects } from '../../../../../ReduxToolkit/Reducers/ProjectReducer';

export default function CreateNewProjectForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm<RegisterType>();
    const addProject: SubmitHandler<RegisterType> = (data) => {
        const projectData = { ...data, customer1: "3.jpg", like: "5", progress: "100", badge: "Done", customer2: "5.jpg", customer3: "1.jpg", image: "3.jpg", sites: "Themeforest, australia", issue: "40", resolved: "40", comment: "20", };
        dispatch(setProjects(projectData));
        navigate(`${process.env.PUBLIC_URL}/project/project_list`);
    };
    return (
        <Form className="theme-form basic-form" onSubmit={handleSubmit(addProject)}>
            <Row>
                <Col>
                    <FormGroup>
                        <H5 className="f-w-600 mb-2">{ProjectTitleLabel}</H5>
                        <input className="form-control" type="text" placeholder="Project name *" {...register("title", { required: true })} />
                        {errors.title && <span style={{ color: "red" }}>{"Title is required"}</span>}
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <H5 className="f-w-600 mb-2">{ClientName}</H5>
                        <input className="form-control" type="text" placeholder="Name client or company name" {...register("client_name", { required: true })} />
                        {errors.client_name && <span style={{ color: "red" }}>{"Client Name is required"}</span>}
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <FormGroup>
                        <H5 className="f-w-600 mb-2">{ProjectRate}</H5>
                        <input className="form-control" type="number" defaultValue="10" placeholder="Enter project Rate" {...register("rate", { required: true })} />
                    </FormGroup>
                </Col>
                <DropItems />
            </Row>
            <Row>
                <Col sm={4}>
                    <FormGroup>
                        <H5 className="f-w-600 mb-2">{ProjectSize}</H5>
                        <Input type="select">
                            <option>{Small}</option>
                            <option>{Medium}</option>
                            <option>{Big}</option>
                        </Input>
                    </FormGroup>
                </Col>
                <StartEndDate />
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <H5 className="f-w-600 mb-2">{EnterSomeDetails}</H5>
                        <textarea className="form-control" rows={3} {...register("description", { required: true })} />
                        {errors.description && <span style={{ color: "red" }}>{"Some Details is required"}</span>}
                    </FormGroup>
                </Col>
            </Row>
            <UploadFile />
            <Row>
                <Col>
                    <div className="text-end">
                        <Btn color="success" className="me-3">{Add}</Btn>
                        <Btn color="danger">{Cancel}</Btn>
                    </div>
                </Col>
            </Row>
        </Form>
    )
}