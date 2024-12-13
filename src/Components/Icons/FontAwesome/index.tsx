import React, { useCallback, useState } from 'react'
import { Container, Row } from 'reactstrap';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { FontAwesomeTitle, IconsTitle } from '../../../Utils/Constants'
import IconMarkUp from '../Common/IconMarkUp'
import FontAwesomeBody from './FontAwesomeBody';

export default function FontAwesomeContainer() {
    const [iconTag, setIconTag] = useState({ iconTag: '' });
    const [icon, setIcon] = useState({ icon: '' });
    const [iconFClass, setIconFClass] = useState({ iconFClass: '' });
    const callback = useCallback((tag: string) => {
        setIconTag({
            iconTag: '<i className="' + tag + '"></i>',
        });
        setIcon({
            icon: tag,
        });
        setIconFClass({
            iconFClass: tag,
        });
    }, []);
    return (
        <>
            <Breadcrumbs pageTitle={FontAwesomeTitle} parent={IconsTitle} title={FontAwesomeTitle} />
            <Container fluid>
                <Row className='icon-main'>
                    <FontAwesomeBody parentCallback={callback} />
                </Row>
            </Container>
            <IconMarkUp iconTag={iconTag} icon={icon} iconFClass={iconFClass} />
        </>
    )
}