import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { ServerSideProcessingInterface } from '../../../../Types/Tables.type';
import { serverSideData, serverSideProcessingColumns, serverSideProcessingSubTitle } from '../../../../Data/Tables/DataTables/DataSource';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { ServerSideProcessingTitle } from '../../../../Utils/Constants';
import FilterComponent from '../Common/FilterComponent';

export default function ServerSideProcessing() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: ServerSideProcessingInterface[] = serverSideData.filter(
        (item: ServerSideProcessingInterface) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0 card-no-border" title={ServerSideProcessingTitle} subTitle={serverSideProcessingSubTitle} titleClass="mb-3" />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive">
                        <DataTable data={filteredItems} columns={serverSideProcessingColumns} pagination striped className="display"/>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}