import React from 'react'
import { currentCartTableBodyData } from '../../../../../../Data/Forms/FormLayout';
import { H5, Image, P } from '../../../../../../AbstractElements';
import { dynamicImage } from '../../../../../../Utils';

export default function CurrentCartTableBody() {
    return (
        <tbody>
            {currentCartTableBodyData.map((data, index) => (
                <tr key={index}>
                    <td>
                        <Image src={dynamicImage(data.imagePath)} alt="t-shirt" />
                    </td>
                    <td>
                        <div>
                            <H5 className="f-w-600">{data.productName}</H5>
                            <span>{data.productSum}</span>
                        </div>
                    </td>
                    <td>
                        <P>{data.price}</P>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}