import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { zeroConfigurationSubTitle, zeroConfigurationTableColumns, zeroConfigurationTableData } from '../../../../Data/Tables/DataTables/BasicInit';
import { ZeroConfigurationTableType } from '../../../../Types/Tables.type';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { ZeroConfigurationTitle } from '../../../../Utils/Constants';
import FilterComponent from '../Common/FilterComponent';

export default function ZeroConfigurationTable() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: ZeroConfigurationTableType[] = zeroConfigurationTableData.filter(
        (item: ZeroConfigurationTableType) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0 card-no-border" title={ZeroConfigurationTitle} subTitle={zeroConfigurationSubTitle} />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive">
                        <DataTable data={filteredItems} className="display" columns={zeroConfigurationTableColumns} pagination highlightOnHover striped />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}