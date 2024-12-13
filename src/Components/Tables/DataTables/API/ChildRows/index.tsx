import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { childRowsTableColumns, stateSavingTableData } from '../../../../../Data/Tables/DataTables/BasicInit';
import { StateSavingTableType } from '../../../../../Types/Tables.type';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { ChildRowsTitle } from '../../../../../Utils/Constants';
import FilterComponent from '../../Common/FilterComponent';
import CustomExpandableComponent from './CustomExpandableComponent';
import { childrenRowsSubTitle } from '../../../../../Data/Tables/DataTables/API';

export default function ChildRows() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: StateSavingTableType[] = stateSavingTableData.filter(
        (item: StateSavingTableType) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0 card-no-border' titleClass='mb-3' title={ChildRowsTitle} subTitle={childrenRowsSubTitle} />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive">
                        <DataTable data={filteredItems} columns={childRowsTableColumns} pagination expandableRows={true}
                            expandableRowsComponent={CustomExpandableComponent} striped className="display"
                        />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

