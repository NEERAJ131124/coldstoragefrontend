import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { CollapseStateProp } from '../../../../Types/UiKits.type';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { MultipleCollapseTitle } from '../../../../Utils/Constants';
import { multipleCollapseSubTitle } from '../../../../Data/UiKits/Accordion';
import { Btn } from '../../../../AbstractElements';
import CollapseBody from './CollapseBody';

export default function MultipleCollapse() {
    const [collapseId, setCollapesId] = useState({ collapse1: false, collapse2: false });
    const toggleCollapse = (collapseIdKey: keyof CollapseStateProp) => {
        setCollapesId(prevState => ({ ...prevState, [collapseIdKey]: !prevState[collapseIdKey] }));
    };
    const handleToggleBothClick = () => {
        setCollapesId(prevState => ({ collapse1: !prevState.collapse1, collapse2: !prevState.collapse2 }));
    };
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={MultipleCollapseTitle} subTitle={multipleCollapseSubTitle} />
                <CardBody>
                    <div className="common-flex">
                        <Btn color='primary' className='me-2' onClick={() => toggleCollapse("collapse1")}>{'Toggle first element'}</Btn>
                        <Btn color='warning' className='me-2 text-white' onClick={() => toggleCollapse("collapse2")}>{'Toggle second element'}</Btn>
                        <Btn color='success' onClick={handleToggleBothClick}>{'Toggle both elements'}</Btn>
                    </div>
                    <CollapseBody collapseId={collapseId} />
                </CardBody>
            </Card>
        </Col>
    )
}
