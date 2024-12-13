import React from 'react'
import { basicTreeSubTitle, simpleTreeviewData } from '../../../../Data/BonusUi/TreeView';
import TreeView, { flattenTree } from 'react-accessible-treeview';
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { DisabledTreeTitle } from '../../../../Utils/Constants';
import { ArrowIcon, CheckBoxIcon } from '../Common/ArrowIcon';

const data = flattenTree(simpleTreeviewData);

export default function DisabledTree() {
    return (
        <Col md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={DisabledTreeTitle} subTitle={basicTreeSubTitle} />
                <CardBody>
                    <TreeView
                        data={data}
                        aria-label="Checkbox tree"
                        multiSelect
                        propagateSelect
                        propagateSelectUpwards
                        defaultDisabledIds={[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
                        togglableSelect
                        nodeRenderer={({
                            element,
                            isBranch,
                            isExpanded,
                            isSelected,
                            isDisabled,
                            isHalfSelected,
                            getNodeProps,
                            level,
                            handleSelect,
                            handleExpand,
                            dispatch,
                        }) => {
                            return (
                                <div
                                    {...getNodeProps({ onClick: handleExpand })}
                                    style={{
                                        marginLeft: 40 * (level - 1),
                                        opacity: isDisabled ? 0.5 : 1,
                                    }}
                                >
                                    {isBranch && <ArrowIcon isOpen={isExpanded} />}
                                    <CheckBoxIcon
                                        className="checkbox-icon"
                                        onClick={(e: React.MouseEvent<HTMLElement>) => {
                                            handleSelect(e);
                                            e.stopPropagation();
                                        }}
                                        variant={
                                            isHalfSelected ? "some" : isSelected ? "all" : "none"
                                        }
                                    />
                                    <span className="name">{element.name}</span>
                                </div>
                            );
                        }}
                    />
                </CardBody>
            </Card>
        </Col>
    )
}

