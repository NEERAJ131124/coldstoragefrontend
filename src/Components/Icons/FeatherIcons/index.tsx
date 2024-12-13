import React, { useCallback, useState } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { FeatherTitle, IconsTitle } from '../../../Utils/Constants'
import { Container, Row } from 'reactstrap'
import FeatherIconsBody from './FeatherIconsBody'
import IconMarkUp from '../Common/IconMarkUp'

export default function FeatherIconsContainer() {
    const [iconTag, setIconTag] = useState({ iconTag: '' });
    const [icon, setIcon] = useState({ feathericon: '' });
    const [iconFClass, setIconFClass] = useState({ iconFClass: '' });

    const getIconTag = useCallback((tag: string) => {
        setIconTag({
            iconTag: '<i data-feather="' + tag + '"></i>',
        });
        setIcon({
            feathericon: tag,
        });
        setIconFClass({
            iconFClass: tag,
        });
    }, [])
    return (
        <>
            <Breadcrumbs pageTitle={FeatherTitle} parent={IconsTitle} title={FeatherTitle} />
            <Container fluid>
                <Row className='icon-main'>
                    <FeatherIconsBody getIconTag={getIconTag} />
                </Row>
            </Container>
            <IconMarkUp iconTag={iconTag} icon={icon} iconFClass={iconFClass} />
        </>
    )
}
