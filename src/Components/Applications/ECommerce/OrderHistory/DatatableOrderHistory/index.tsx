import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component';
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader';
import { DatatableOrderHistoryTitle } from '../../../../../Utils/Constants';
import FilterComponent from '../../Common/FilterComponent';
import { orderHistoryColumns, orderHistoryDataTable } from '../../../../../Data/Applications/ECommerce/OrderHistory';
import { OrderHistoryDataTableProps } from '../../../../../Types/ECommerce.type';

export default function DatatableOrderHistory() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: OrderHistoryDataTableProps[] = orderHistoryDataTable.filter(
        (item: OrderHistoryDataTableProps) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader title={DatatableOrderHistoryTitle} />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="order-history table-responsive order-history-table">
                        <DataTable className='display' data={filteredItems} columns={orderHistoryColumns} pagination highlightOnHover striped />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}