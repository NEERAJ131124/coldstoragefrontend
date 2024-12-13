import React, { Fragment, useState } from 'react'
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { DropdownCommonProp } from '../../../../Types/UiKits.type';
import { Href } from '../../../../Utils/Constants';

export default function DividerBody({ item }: DropdownCommonProp) {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <ButtonGroup>
            <Dropdown isOpen={open} toggle={toggle} direction='down'>
                <DropdownToggle caret className='rounded-pill' color={item.class}>{item.text}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                    {item.menulist && item.menulist.map((item, index) => (
                        <Fragment key={index}>
                            {item !== '' ?
                                (<DropdownItem href={Href}>{item}</DropdownItem>) :
                                (<DropdownItem href={Href} divider />)
                            }
                        </Fragment>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    )
}
