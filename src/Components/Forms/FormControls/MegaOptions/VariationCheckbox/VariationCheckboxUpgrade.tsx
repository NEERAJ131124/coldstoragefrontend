import React from 'react'
import { Col, Input } from 'reactstrap'
import { H5, LI, P, UL } from '../../../../../AbstractElements'
import { upgradeVariationCheckbox } from '../../../../../Data/Forms/FormControls'

export default function VariationCheckboxUpgrade() {
    return (
        <Col xl={8} md={7}>
            <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
                <section className="main-upgrade">
                    <div> <i className="fa-solid fa-rocket" />
                        <H5 className="mb-2">{"It's time to "} <span className="text-primary">{'upgrade'}</span></H5>
                        <P className="text-muted mb-2">{"Select the theme that best suits your requirements, and you're ready to go!"}</P>
                    </div>
                    <div className="variation-box">
                        {upgradeVariationCheckbox.map((data) => (
                            <div className="selection-box" key={data.id}>
                                <Input id={`feature${data.id}`} type="checkbox" defaultChecked={data.check ? true : false} />
                                <div className="custom--mega-checkbox">
                                    <UL className="simple-list d-flex flex-column align-items-center">
                                        <LI>{data.text}</LI>
                                        <LI className="text-primary">{data.sales}</LI>
                                    </UL>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Col>
    )
}