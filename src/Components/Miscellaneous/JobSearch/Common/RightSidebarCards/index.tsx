import React, { useEffect } from 'react'
import { Card, CardBody } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { JobSearchItems, RightSidebarCardProps } from '../../../../../Types/Miscellaneous.type'
import { AppDispatch, RootState } from '../../../../../ReduxToolkit/Store';
import { fetchJobSearchData } from '../../../../../ReduxToolkit/Reducers/JobSearchReducer';
import { Badges, H5, Image, P, Ribbon } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import { Href } from '../../../../../Utils/Constants';
import PaginationCard from './PaginationCard';

export default function RightSidebarCards({ limit, colClass }: RightSidebarCardProps) {
    const { jobList } = useSelector((state: RootState) => state.jobSearch);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => { dispatch(fetchJobSearchData()); }, [dispatch]);
    return (
        <>
            {jobList.slice(0, limit).map((item: JobSearchItems, i: number) => (
                <div className={colClass} key={i}>
                    <Card className={item.ribbon ? "ribbon-vertical-left-wrapper" : ""}>
                        {item.ribbon && (
                            <Ribbon className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary">
                                <i className="fa-regular fa-heart" />
                            </Ribbon>
                        )}
                        <div className="job-search">
                            <CardBody>
                                <div className="d-flex">
                                    <Image className="img-40 img-fluid m-r-20" src={dynamicImage(`job-search/${item.logo}`)} alt="" />
                                    <div className="flex-grow-1 w-100">
                                        <H5 className="f-w-700">
                                            <a className="text-primary" href={Href}>{item.job_name}</a>
                                            {item.badgeValue ?
                                                (
                                                    <Badges color="primary" className="pull-right">{item.type}</Badges>
                                                ) :
                                                (<span className="pull-right">{item.type}</span>)
                                            }
                                        </H5>
                                        <P>
                                            {item.job_area} <span>{item.job_city}</span>
                                            <span><i className="fa-solid fa-star font-secondary"></i><i className="fa-solid fa-star font-secondary"></i><i className="fa-solid fa-star font-secondary"></i><i className="fa-solid fa-star font-secondary"></i><i className="fa-solid fa-star font-secondary"></i></span>
                                        </P>
                                    </div>
                                </div>
                                <P>{item.Job_description}</P>
                            </CardBody>
                        </div>
                    </Card>
                </div>
            ))}
            <PaginationCard />
        </>
    )
}