import React, { MouseEvent, useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupText } from 'reactstrap';

export default function DropdownInputs() {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    const stopPropagation = (e: MouseEvent<HTMLInputElement>) => {
        e.stopPropagation();
    };
    return (
        <Dropdown isOpen={open} toggle={toggle} direction='down'>
            <DropdownToggle color='warning'>{'Inputs'}</DropdownToggle>
            <DropdownMenu className="dropdown-block dropdown-wrapper dark-input-type">
                <DropdownItem>
                    <InputGroup className='rounded-0 border-0 shadow-none'>
                        <InputGroupText>
                            <Input className='mt-0 me-2' type='checkbox' onClick={stopPropagation} />
                            <span>{'Default checkbox'}</span>
                        </InputGroupText>
                    </InputGroup>
                    <InputGroup className='rounded-0 border-0 shadow-none'>
                        <InputGroupText>
                            <Input className='mt-0 me-2' type='radio' onClick={stopPropagation} />
                            <span>{'Default radio'}</span>
                        </InputGroupText>
                    </InputGroup>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}