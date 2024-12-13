import React, { useState } from 'react'
import { Col, Label, Row } from 'reactstrap';
import TagsInput from "react-tagsinput";
import { ProductTagProp } from '../../../../../../Types/ECommerce.type';
import { productTagItem } from '../../../../../../Data/Applications/ECommerce/Product';
import { P } from '../../../../../../AbstractElements';

export default function ProductTag({ title, subTitle }: ProductTagProp) {
    const [tags, setTags] = useState(productTagItem);
    const handleTagsChange = (newTags: string[]) => {
        setTags(newTags);
    };
    return (
        <Col sm={6}>
            <Row className="product-tag">
                <Col xs={12}>
                    <Label>{title}</Label>
                </Col>
                <Col xs={12}>
                    <TagsInput value={tags} onChange={handleTagsChange} />
                    {subTitle && <P>{"Products can be tagged"}</P>}
                </Col>
            </Row>
        </Col>
    )
}