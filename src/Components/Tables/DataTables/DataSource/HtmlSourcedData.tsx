import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { HtmlColumnsInterface } from '../../../../Types/Tables.type';
import { htmlColumns, htmlColumnsTableData, htmlTableSubTitle } from '../../../../Data/Tables/DataTables/DataSource';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { HtmlTableTitle } from '../../../../Utils/Constants';
import FilterComponent from '../Common/FilterComponent';

export default function HtmlSourcedData() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: HtmlColumnsInterface[] = htmlColumnsTableData.filter(
        (item: HtmlColumnsInterface) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0 card-no-border" title={HtmlTableTitle} subTitle={htmlTableSubTitle} titleClass="mb-3" />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive">
                        <DataTable data={filteredItems} columns={htmlColumns} striped={true} pagination className="display" />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}