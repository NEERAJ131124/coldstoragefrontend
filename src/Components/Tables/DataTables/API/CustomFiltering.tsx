import React, { ChangeEvent, useEffect, useState } from 'react'
import { Card, CardBody, Col, Input, Table } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { FilterDataTableProp } from '../../../../Types/Tables.type';
import { customFilteringSearchSubTitle, filterDataTableColumns, filterDataTableData } from '../../../../Data/Tables/DataTables/API';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { CustomFilteringTitle } from '../../../../Utils/Constants';
import FilterComponent from '../Common/FilterComponent';

export default function CustomFiltering() {
    const [filterText, setFilterText] = useState('');
    const [data, setData] = useState<FilterDataTableProp[]>(filterDataTableData);
    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(100);

    useEffect(() => {
        const filteredData = filterDataTableData.filter((item) => {
            const age = item.age;
            if (minAge && maxAge) {
                return age >= minAge && age <= maxAge;
            } else {
                return filterDataTableData
            }
        });
        setData(filteredData);
    }, [minAge, maxAge]);
    const handleMinAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMinAge(parseInt(event.target.value, 10));
    };
    const handleMaxAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxAge(parseInt(event.target.value, 10));
    };
    const filteredItems: FilterDataTableProp[] = data.filter(
        (item: FilterDataTableProp) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0 card-no-border' title={CustomFilteringTitle} subTitle={customFilteringSearchSubTitle} />
                <CardBody>
                    <div className="table-responsive dataTables_wrapper me-0">
                        <Table>
                            <tbody className="dataTables_filter">
                                <tr><td>{'Minimum age:'}</td>
                                    <td><Input type="search" name="minValue" onChange={handleMinAgeChange} /></td>
                                </tr>
                                <tr><td>{'Maximum age:'}</td>
                                    <td><Input type="search" name="maxValue" onChange={handleMaxAgeChange} /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive user-datatable">
                        <DataTable columns={filterDataTableColumns} data={filteredItems} pagination striped />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}