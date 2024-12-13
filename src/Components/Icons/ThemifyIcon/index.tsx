import React, { useCallback, useState } from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { IconsTitle, ThemifyIconTitle } from '../../../Utils/Constants'
import IconMarkUp from '../Common/IconMarkUp'
import ThemifyIconBody from './ThemifyIconBody'
import { themifyIconData } from '../../../Data/Icons/ThemifyIcon'

export default function ThemifyIconContainer() {
    const [iconTag, setIconTag] = useState({ iconTag: '' });
    const [icon, setIcon] = useState({ icon: '' });
    const [iconFClass, setIconFClass] = useState({ iconFClass: '' });
    const callback = useCallback((tag: string) => {
        setIconTag({
            iconTag: '<i className="' + tag + '"></i>',
        });
        setIcon({
            icon: '' + tag + ' fa-2x',
        });
        setIconFClass({
            iconFClass: tag,
        });
    }, []);
    return (
        <>
            <Breadcrumbs pageTitle={ThemifyIconTitle} parent={IconsTitle} title={ThemifyIconTitle} />
            <Container fluid>
                <Row className='icon-main'>
                    {themifyIconData.map((data, i) => (
                        <ThemifyIconBody key={i} iconType={data.data} title={data.title} parentCallback={callback} />
                    ))}
                </Row>
            </Container>
            <IconMarkUp iconTag={iconTag} icon={icon} iconFClass={iconFClass} />
        </>
    )
}
