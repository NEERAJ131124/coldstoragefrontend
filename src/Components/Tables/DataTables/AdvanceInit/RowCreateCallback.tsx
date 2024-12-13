import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { rowCreateCallBackSubTitle, rowCreateCallBackTableColumns, rowCreateCallBackTableData } from '../../../../Data/Tables/DataTables/AdvanceInit';
import { RowCreateCallBackData } from '../../../../Types/Tables.type';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { RowCreateCallbackTitle } from '../../../../Utils/Constants';
import FilterComponent from '../Common/FilterComponent';

export default function RowCreateCallback() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: RowCreateCallBackData[] = rowCreateCallBackTableData.filter(
        (item: RowCreateCallBackData) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0 card-no-border" title={RowCreateCallbackTitle} subTitle={rowCreateCallBackSubTitle} />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive theme-scrollbar">
                        <DataTable data={filteredItems} columns={rowCreateCallBackTableColumns} striped={true} pagination className="display" />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}