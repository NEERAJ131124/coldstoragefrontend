import React from 'react'
import { TableHeaderProp } from '../../Types/CommonComponent.type'

export default function TableHead({ headeData }: TableHeaderProp) {
    return (
        <thead>
            <tr>
                {headeData && headeData.map((item, index) => (
                    item.class
                        ? <th key={index} className={item.class}>{item.name}</th>
                        : <th key={index}>{item.name}</th>
                ))}
            </tr>
        </thead>
    )
}
