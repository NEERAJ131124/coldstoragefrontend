import React from 'react'
import { H4, LI, P, UL } from '../../../../AbstractElements'
import { RootState } from '../../../../ReduxToolkit/Store';
import { useSelector, useDispatch } from 'react-redux';
import { addSidebarTypes } from '../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducer';
import { Form, FormGroup, Input, Label } from 'reactstrap';

export default function SidebarType() {
    const { sidebar_types } = useSelector((state: RootState) => state.themeCustomizer)
    const dispatch = useDispatch();
    const handleSidebarType = (type: string) => {
        dispatch(addSidebarTypes(type));

    };
    return (
        <div className="mb-3 p-2 rounded-3 b-t-primary border-3">
            <div className="sidebar-type mb-2">
                <H4>Sidebar type:</H4>
                <P>Choose between 2 different sidebar types.</P>
            </div>
            <Form>
                <FormGroup className="sidebar-body radio ps-0" check>
                    <UL className="radio-wrapper simple-list flex-row">
                        <LI className={`vertical-setting ${sidebar_types === 'compact-wrapper' ? 'active' : ''}`} onClick={() => handleSidebarType('compact-wrapper')}>
                            <Input id="radio-icon" type="radio" name="radio2" value="option2" defaultChecked />
                            <Label htmlFor="radio-icon" check>
                                <span>Vertical</span>
                            </Label>
                        </LI>
                        <LI className={`horizontal-setting ${sidebar_types === 'horizontal-sidebar' ? 'active' : ''}`} onClick={() => handleSidebarType('horizontal-sidebar')}>
                            <Input id="radio-icon4" type="radio" name="radio2" value="option2" />
                            <Label htmlFor="radio-icon4" check>
                                <span>Horizontal</span>
                            </Label>
                        </LI>
                    </UL>
                </FormGroup>
            </Form>
        </div>
    )
}