import React, { useCallback, useState } from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { IconlyIconTitle, IconsTitle } from '../../../Utils/Constants'
import IconlyIconBody from './IconlyIconBody';
import IconMarkUp from '../Common/IconMarkUp';

export default function IconlyIconContainer() {
    const [iconTag, setIconTag] = useState({ iconTag: '' });
    const [icon, setIcon] = useState({ icon: '' });
    const [iconFClass, setIconFClass] = useState({ iconFClass: '' });
    const getIconTag = useCallback((tag: { data: string }) => {
        setIconTag({
            iconTag: '<i className="' + tag.data + '"></i>',
        });
        setIcon({
            icon: tag.data,
        });
        setIconFClass({
            iconFClass: tag.data,
        });
    }, [])
    return (
        <>
            <Breadcrumbs pageTitle={IconlyIconTitle} parent={IconsTitle} title={IconlyIconTitle} />
            <Container fluid>
                <Row className='icon-main'>
                    <IconlyIconBody getIconTag={getIconTag} />
                </Row>
            </Container>
            <IconMarkUp iconTag={iconTag} icon={icon} iconFClass={iconFClass} />
        </>
    )
}