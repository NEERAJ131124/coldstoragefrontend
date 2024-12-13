import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { StockResultColumnType } from '../../../../Types/Tables.type';
import { stockResultSubTitle, stockResultTableColumns, stockResultTableData } from '../../../../Data/Tables/DataTables/AdvanceInit';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { StockResultTitle } from '../../../../Utils/Constants';
import FilterComponent from '../Common/FilterComponent';

export default function StockResult() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: StockResultColumnType[] = stockResultTableData.filter(
        (item: StockResultColumnType) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0 card-no-border" title={StockResultTitle} subTitle={stockResultSubTitle} />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive theme-scrollbar">
                        <DataTable data={filteredItems} columns={stockResultTableColumns} striped={true} className="display nowrap" />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}