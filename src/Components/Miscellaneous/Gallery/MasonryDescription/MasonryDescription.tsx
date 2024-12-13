/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Card, CardBody } from 'reactstrap';
import Masonry from 'react-masonry-css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { Href, MasonryDescriptionTitle } from '../../../../Utils/Constants';
import { H4, P } from '../../../../AbstractElements';
import { dynamicImage, dynamicNumber } from '../../../../Utils';
import { Link } from 'react-router-dom';

export default function MasonryDescription() {
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        700: 2,
        500: 1,
    };
    return (
        <Card>
            <CommonCardHeader title={MasonryDescriptionTitle} />
            <CardBody className='photoswipe-pb-responsive'>
                <Gallery withCaption>
                    <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery-with-description" columnClassName="col-xl-3 col-sm-6 grid-item">
                        {dynamicNumber(15).map((item, i) => (
                            <figure key={i}>
                                <Item original={dynamicImage(`big-masonry/${item}.jpg`)} caption="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy." width="700" height="850">
                                    {({ ref, open }) => (
                                        <Link to={Href} onClick={open}>
                                            <img ref={ref} className="img-thumbnail" src={dynamicImage(`masonry/${item}.jpg`)} alt="Image description" />
                                            <div className="caption border-top-0">
                                                <H4 className='mt-0'>{'Portfolio Title'}</H4>
                                                <P>{"Here is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</P>
                                            </div>
                                        </Link>
                                    )}
                                </Item>
                            </figure>
                        ))}
                    </Masonry>
                </Gallery>
            </CardBody>
        </Card>
    )
}