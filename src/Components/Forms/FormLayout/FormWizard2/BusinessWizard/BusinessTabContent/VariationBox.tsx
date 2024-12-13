import React from 'react'
import { Input } from 'reactstrap'
import { LI, UL } from '../../../../../../AbstractElements'
import { variationBoxData } from '../../../../../../Data/Forms/FormLayout'

export default function VariationBox() {
    return (
        <div className="variation-box">
            {variationBoxData.map((data, index) => (
                <div className="selection-box" key={index}>
                    <Input type="checkbox" />
                    <div className="custom--mega-checkbox">
                        <UL className="d-flex flex-column align-items-center simple-list">
                            <LI>{data.title}</LI>
                            <LI className="text-primary">{data.details}</LI>
                        </UL>
                    </div>
                </div>
            ))}
        </div>
    )
}
