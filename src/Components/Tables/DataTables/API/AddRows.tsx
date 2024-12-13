import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { addRowsSubTitle, addRowsTableColumns, addRowsTableData } from '../../../../Data/Tables/DataTables/API';
import { AddRowsTableProp } from '../../../../Types/Tables.type';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { AddNewRow, AddRowsTitle } from '../../../../Utils/Constants';
import { Btn } from '../../../../AbstractElements';
import FilterComponent from '../Common/FilterComponent';

export default function AddRows() {
    const [filterText, setFilterText] = useState('');
    const [tableData, setTableData] = useState(addRowsTableData);
    const getRandomFloat = (min: number, max: number) => {
        const genrateRandom = Math.random() * (max - min) + min;
        return parseFloat(genrateRandom.toFixed(2));
    };
    const addNewRow = () => {
        const minimumValue = 10;
        const maximumValue = 100;
        const tempData = {
            column1: tableData[tableData.length - 1].column1 + 10,
            column2: getRandomFloat(minimumValue, maximumValue),
            column3: getRandomFloat(minimumValue, maximumValue),
            column4: getRandomFloat(minimumValue, maximumValue),
            column5: getRandomFloat(minimumValue, maximumValue),
        };
        setTableData([...tableData, tempData]);
    };
    const filteredItems: AddRowsTableProp[] = tableData.filter(
        (item: AddRowsTableProp) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0 card-no-border' titleClass='mb-3' title={AddRowsTitle} subTitle={addRowsSubTitle} />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <Btn color='primary' className="mb-3" onClick={addNewRow}>{AddNewRow}</Btn>
                    <div className="table-responsive">
                        <DataTable data={filteredItems} columns={addRowsTableColumns} pagination highlightOnHover striped className="display" />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}