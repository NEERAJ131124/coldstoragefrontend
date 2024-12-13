import React, { SetStateAction, useCallback, useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { deleteDataTableColumns, deleteRowData, rowsSelectionSubTitle } from '../../../../Data/Tables/DataTables/API';
import { DeleteRowData } from '../../../../Types/Tables.type';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { DeleteRow, RowsSelectionAndDeletionTitle } from '../../../../Utils/Constants';
import { Btn } from '../../../../AbstractElements';
import FilterComponent from '../Common/FilterComponent';

export default function RowSelectionAndDeletion() {
    const [filterText, setFilterText] = useState('');
    const [data, setData] = useState(deleteRowData);
    const [selectedRows, setSelectedRows] = useState<DeleteRowData[]>([]);
    const [toggleCleared, setToggleCleared] = useState(false);
    const handleRowSelected = useCallback((state: { selectedRows: SetStateAction<DeleteRowData[]> }) => {
        setSelectedRows(state.selectedRows);
    }, []);
    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map((r: DeleteRowData) => r.name)}?`)) {
            setToggleCleared(!toggleCleared);
            setData(data.filter((item) => (selectedRows.filter((elem: DeleteRowData) => elem.id === item.id).length > 0 ? false : true)));
            setSelectedRows([]);
        }
    };
    const filteredItems: DeleteRowData[] = data.filter(
        (item: DeleteRowData) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0 card-no-border' titleClass='mb-3' title={RowsSelectionAndDeletionTitle} subTitle={rowsSelectionSubTitle} />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive">
                        <Btn color='secondary' className="mb-3" onClick={handleDelete}>{DeleteRow}</Btn>
                        <DataTable columns={deleteDataTableColumns} data={filteredItems} pagination selectableRows
                            onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleCleared} striped
                        />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}