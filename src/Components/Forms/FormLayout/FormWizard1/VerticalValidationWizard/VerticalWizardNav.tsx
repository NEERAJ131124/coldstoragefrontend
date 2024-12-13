import React from 'react'
import { Nav, NavLink } from 'reactstrap'
import { VerticalWizardNavProps } from '../../../../../Types/Forms.type'
import { verticalWizardNav } from '../../../../../Data/Forms/FormLayout'
import { H5, P } from '../../../../../AbstractElements'

export default function VerticalWizardNav({ steps, activeCallBack }: VerticalWizardNavProps) {
    return (
        <Nav className="flex-column header-vertical-wizard" id="wizard-tab">
            {verticalWizardNav.map((data) => (
                <NavLink key={data.id} className={steps === data.id ? "active" : ''} onClick={() => activeCallBack(data.id)}>
                    <div className="vertical-wizard">
                        <div className="stroke-icon-wizard">
                            <i className={`fa-solid fa-${data.icon}`}/>
                        </div>
                        <div className="vertical-wizard-content">
                            <H5 className="f-w-600">{data.title}</H5>
                            <P>{data.subTitle}</P>
                        </div>
                    </div>
                </NavLink>
            ))}
        </Nav>
    )
}