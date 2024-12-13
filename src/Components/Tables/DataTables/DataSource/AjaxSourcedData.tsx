import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { ajaxSourcedColumns, ajaxSourcedData, ajaxTableSubTitle } from '../../../../Data/Tables/DataTables/DataSource';
import { AjaxSourcedColumnsInterface } from '../../../../Types/Tables.type';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { AjaxSourcedDataTitle } from '../../../../Utils/Constants';
import FilterComponent from '../Common/FilterComponent';

export default function AjaxSourcedData() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: AjaxSourcedColumnsInterface[] = ajaxSourcedData.filter(
        (item: AjaxSourcedColumnsInterface) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0 card-no-border" title={AjaxSourcedDataTitle} subTitle={ajaxTableSubTitle} titleClass="mb-3" />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive">
                        <DataTable data={filteredItems} columns={ajaxSourcedColumns} pagination striped className="display" />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}