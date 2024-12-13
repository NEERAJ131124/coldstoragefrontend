import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Btn, H4, H5, Image, LI, P, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { Apply, Href, JobDescription, ProductDesignerTitle, SaveThisJob, Share } from '../../../../../Utils/Constants'
import { jobDescriptionData } from '../../../../../Data/Miscellaneous/JobSearch'

export default function ProductDesignerCard() {
    return (
        <Card>
            <div className="job-search">
                <CardBody>
                    <div className="d-flex"><Image className="img-40 img-fluid m-r-20" src={dynamicImage(`job-search/1.jpg`)} alt="" />
                        <div className="flex-grow-1 w-100">
                            <div>
                                <H5>
                                    <a className="f-w-700" href={Href}>{ProductDesignerTitle}</a>
                                    <span className="pull-right">
                                        <Link to={`${process.env.PUBLIC_URL}/job_search/apply`}>
                                            <Btn color='primary'>{Apply}</Btn>
                                        </Link>
                                    </span>
                                </H5>
                            </div>
                            <P>{'Endless - United States'}
                                <span><i className="fa-solid fa-star font-secondary" /><i className="fa-solid fa-star font-secondary" /><i className="fa-solid fa-star font-secondary" /><i className="fa-solid fa-star font-secondary" /><i className="fa-solid fa-star font-secondary" /></span>
                            </P>
                        </div>
                    </div>
                    <div className="job-description">
                        <H4>{JobDescription}</H4>
                        <P>{'Endless is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. Our designers contribute to clients’ projects at all stages of development. We might start from scratch, conducting user and stakeholder interviews, making personas and journey maps, and continue on to iterating on designs and prototypes through delivering final assets for launch. We might come into the middle of an in-flight program-size project and conduct analysis and usability correction or feature enhancement. We might provide research and vision for handoff to an internal development team.'}</P>
                    </div>
                    {jobDescriptionData.map((data) => (
                        <div className="job-description" key={data.id}>
                            <H4 className="mb-2">{data.title}</H4>
                            <UL className='simple-list'>
                                {data.child.map((item) => (
                                    <LI key={item.id}>{item.list}</LI>
                                ))}
                            </UL>
                        </div>
                    ))}
                    <div className="job-description">
                        <Btn color='primary' className='me-2'><span><i className="fa-solid fa-check" /></span> {SaveThisJob}</Btn>
                        <Btn color='primary'><span><i className="fa-solid fa-share-nodes" /></span> {Share}</Btn>
                    </div>
                </CardBody>
            </div>
        </Card>
    )
}