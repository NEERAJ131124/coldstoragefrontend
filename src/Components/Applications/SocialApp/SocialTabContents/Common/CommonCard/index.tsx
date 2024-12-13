import React, { useState } from 'react'
import { Card, CardHeader, Collapse } from 'reactstrap';
import { ChevronDown, ChevronUp } from 'react-feather';
import { CommonCardProps } from '../../../../../../Types/SocialApp.type';
import { Btn, H2 } from '../../../../../../AbstractElements';

export default function CommonCard({ title, children,cardClass }: CommonCardProps) {
    const [collapsed, setCollapsed] = useState(true);
    const toggle = () => {
        setCollapsed(!collapsed)
    }
    return (
        <Card className={cardClass ? cardClass : ''}>
            <CardHeader>
                <H2 className="mb-0">
                    <Btn color='transparent' block className='btn-link d-flex justify-content-between text-start' onClick={toggle}>{title}
                        {collapsed ? <ChevronDown className='m-0' /> : <ChevronUp className='m-0' />}
                    </Btn>
                </H2>
            </CardHeader>
            <Collapse isOpen={collapsed}>
                {children}
            </Collapse>
        </Card>
    )
}