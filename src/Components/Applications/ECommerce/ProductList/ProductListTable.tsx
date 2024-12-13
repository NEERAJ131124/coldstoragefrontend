import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import FilterComponent from '../Common/FilterComponent';
import { ProductListType } from '../../../../Types/ECommerce.type';
import { productListColumns, productListTableData } from '../../../../Data/Applications/ECommerce/ProductList';

export default function ProductListTable() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: ProductListType[] = productListTableData.filter(
        (item: ProductListType) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <div className="list-product product-list-page">
            <FilterComponent
                onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                filterText={filterText}
            />
            <DataTable data={filteredItems} columns={productListColumns} pagination />
        </div>
    )
}