import React from 'react'
import { Card, Col } from 'reactstrap';
import { H6, Image, LI, UL } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Utils';
import { blogBoxGridData } from '../../../../Data/Miscellaneous/Blog';

export default function BlogBoxGrid() {
    return (
        <>
            {blogBoxGridData.map((item) => (
                    <Col 
                    md={6} 
                    xxl={3} 
                    className={`box-col-6 ${item.id === 2 || item.id === 3 ? "box-col-6" : ""}`} 
                    key={item.id}
                  >
                    <Card>
                        <div className="blog-box blog-grid text-center">
                            <Image className="img-fluid top-radius-blog" src={dynamicImage(`blog/blog-${item.image}`)} alt="" />
                            <div className="blog-details-main">
                                <UL className="simple-list flex-row blog-social">
                                    <LI>{'9 April 2024'}</LI>
                                    <LI>{'by: Admin'}</LI>
                                    <LI> {"0 Hits"}</LI>
                                </UL>
                                <hr />
                                <H6 className="blog-bottom-details">
                                    {'Perspiciatis unde omnis iste natus error sit. Dummy text'}
                                </H6>
                            </div>
                        </div>
                    </Card>
                </Col>
            ))}
        </>
    );
}