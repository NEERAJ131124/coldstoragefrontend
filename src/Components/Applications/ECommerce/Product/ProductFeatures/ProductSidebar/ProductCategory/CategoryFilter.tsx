/* eslint-disable array-callback-return */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Input, Label } from 'reactstrap';
import { RootState } from '../../../../../../../ReduxToolkit/Store';
import { deleteCategoryState, filterCategoryState } from '../../../../../../../ReduxToolkit/Reducers/ECommerce/ProductReducer';

export default function CategoryFilter() {
    const { productItem, filterValue } = useSelector((state: RootState) => state.product);
    const dispatch = useDispatch();
    const category = () => {
        let categoryData: string[] = [];
        productItem.map((element) => {
            if (element.name) {
                if (categoryData.indexOf(element.name) === -1) {
                    categoryData.push(element.name);
                }
            }
        });
        return categoryData;
    };
    const filterCategory = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.checked) {
            dispatch(filterCategoryState({ categoryChecked: e.target.value }));
        } else {
            dispatch(deleteCategoryState({ categoryUnChecked: e.target.value }));
        }
    };
    return (
        <div className="checkbox-animated mt-0">
            {category().map((item, i) => (
                <Label className="d-block" key={i}>
                    <Input className="checkbox_animated" defaultChecked={filterValue.category.includes(item) ? true : false} type="checkbox" value={item} onChange={filterCategory} />
                    {item}
                </Label>
            ))}
        </div>
    )
}