/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Card, CardBody } from 'reactstrap';
import Masonry from 'react-masonry-css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { Link } from 'react-router-dom';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { Href, MasonryGalleryTitle } from '../../../../Utils/Constants';
import { dynamicImage, dynamicNumber } from '../../../../Utils';

export default function MasonryGallery() {
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        700: 2,
        500: 1,
    };
    return (
        <Card>
            <CommonCardHeader title={MasonryGalleryTitle} />
            <CardBody className="photoswipe-pb-responsive">
                <Gallery>
                    <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery" columnClassName="col-md-3 col-sm-6 grid-item">
                        {dynamicNumber(15).map((item, index) => (
                            <figure key={index}>
                                <Item original={dynamicImage(`big-masonry/${item}.jpg`)} width="700" height="850">
                                    {({ ref, open }) => (
                                        <Link to={Href} onClick={open}>
                                            <img ref={ref} src={dynamicImage(`masonry/${item}.jpg`)} className="img-thumbnail" alt="Image description" />
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