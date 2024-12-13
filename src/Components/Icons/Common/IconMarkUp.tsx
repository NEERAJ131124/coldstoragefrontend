import React, { useEffect, useState } from 'react'
import { Container, FormGroup, Input, Label, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IconMarkUpProps } from '../../../Types/Icons.type';
import { Btn } from '../../../AbstractElements';

export default function IconMarkUp({ icon, iconTag, iconFClass }: IconMarkUpProps) {
    const featherIcons = require('feather-icons');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (iconTag.iconTag !== '' && icon.icon !== '') {
            setOpen(true);
        }
    }, [iconTag.iconTag, icon.icon]);

    const buttonClick = () => {
        toast.success('Code Copied to clipboard !', {
            position: 'bottom-right',
        });
    }
    return (
        <div className={`icon-hover-bottom position-fixed fa-fa-icon-show-div opecity-0 ${open ? 'd-block' : 'd-none'}`}>
            <Container fluid>
                <Row>
                    <div className='icon-popup'>
                        <div className='close-icon' onClick={() => setOpen(false)}>
                            <i className='fa-solid fa-xmark'></i>
                        </div>
                        <div className='icon-first'>
                            {icon.feathericon ? <div dangerouslySetInnerHTML={{ __html: featherIcons.icons[icon.feathericon].toSvg(icon.feathericon) }} /> : <i id='icon_main' className={`${icon.icon} fa-2x`}></i>}
                        </div>
                        <div className='icon-class'>
                            <Label className='icon-title'>{'Class'}</Label>
                            <span id='fclass1'>{iconFClass.iconFClass}</span>
                        </div>
                        <div className='icon-last icon-last'>
                            <Label className='icon-title'>{'Markup'}</Label>
                            <div className='form-inline'>
                                <FormGroup>
                                    <Input type='text' className='inp-val m-r-10' defaultValue={iconTag.iconTag} id='input_copy' />
                                    <CopyToClipboard text={iconTag.iconTag}>
                                        <Btn color='primary' className='notification' onClick={buttonClick}>{'Copy text'}</Btn>
                                    </CopyToClipboard>
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}