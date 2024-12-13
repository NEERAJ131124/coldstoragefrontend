import React from 'react'
import { Card, CardBody, Row, TabContent, TabPane } from 'reactstrap';
import { useSelector } from 'react-redux';
import CommonProjectList from '../Common/CommonProjectList';
import { RootState } from '../../../../../ReduxToolkit/Store';
import { ProjectListTabProp } from '../../../../../Types/Project.type';

export default function ProjectListTabContent({ activeTab }: ProjectListTabProp) {
    const projectListData = useSelector((state: RootState) => state.project.items);

    return (
        <Card>
            <CardBody>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId={1}>
                        <Row>
                            {projectListData.map((item, index) => (<CommonProjectList item={item} key={index} />))}
                        </Row>
                    </TabPane>
                    <TabPane tabId={2}>
                        <Row>
                            {projectListData.map((item, index) =>
                                item.badge === "Doing" && (<CommonProjectList item={item} key={index} />)
                            )}
                        </Row>
                    </TabPane>
                    <TabPane tabId={3}>
                        <Row>
                            {projectListData.map((item, index) =>
                                item.badge === "Done" && (<CommonProjectList item={item} key={index} />)
                            )}
                        </Row>
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
    )
}