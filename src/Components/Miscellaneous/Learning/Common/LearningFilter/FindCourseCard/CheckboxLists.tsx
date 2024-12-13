import React from 'react'
import { Input, Label } from 'reactstrap'
import { InputType } from 'reactstrap/types/lib/Input'
import { findCourseCheckbox } from '../../../../../../Data/Miscellaneous/Learning'

export default function CheckboxLists() {
    return (
        <>
            {findCourseCheckbox.map((data) => (
                <div className={`checkbox-animated ${data.divClass}`} key={data.id}>
                    <div className="learning-header"><span className="f-w-600">{data.title}</span></div>
                    {data.child.map((item) => (
                        <Label className="d-block" htmlFor={`ani${item.id}`} key={item.id}>
                            <Input className={data.id === 3 ? "radio_animated" : "checkbox_animated"} id={`ani${item.id}`} 
                                type={item.type as InputType} name={item.name ? item.name : ''} defaultChecked={item.check ? true : false}
                            />
                            {item.text}
                        </Label>
                    ))}
                </div>
            ))}
        </>
    )
}