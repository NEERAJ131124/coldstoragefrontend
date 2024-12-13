import React, { useState } from 'react'
import { ButtonGroup, Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { P } from '../../../../AbstractElements';

export default function DropdownText() {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <ButtonGroup>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle caret color='dark'>{'Text'}</DropdownToggle>
                <DropdownMenu className='p-3 text-muted form-wrapper'>
                    <P className="mb-2">{"Some example text that's free-flowing within the dropdown menu."}</P>
                    <P className="mb-0">{'And this is more example text.'}</P>
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    )
}
