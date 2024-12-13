import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import FilterComponent from '../Common/FilterComponent'
import { categoryColumns, categoryTableData } from '../../../../Data/Applications/ECommerce/CategoryPage';
import { CategoryTableTypes } from '../../../../Types/ECommerce.type';

export default function CategoryListTable() {
  const [filterText, setFilterText] = useState('');
  const filteredItems: CategoryTableTypes[] = categoryTableData.filter(
    (item: CategoryTableTypes) => {
      return Object.values(item).some((value) =>
        value && value.toString().toLowerCase().includes(filterText.toLowerCase())
      );
    }
  );
  return (
    <div className="list-product list-category category-table">
      <FilterComponent
        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
        filterText={filterText}
      />
      <DataTable data={filteredItems} columns={categoryColumns} pagination/>
    </div>
  )
}