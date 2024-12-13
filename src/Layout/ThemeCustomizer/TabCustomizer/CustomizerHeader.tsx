import React, { useCallback, useState } from 'react'
import { Btn, H3, P } from '../../../AbstractElements'
import { TabCustomizerType } from '../../../Types/Layout.type'
import ConfigurationClass from '../ConfigurationClass'
import { Href } from '../../../Utils/Constants';

export default function CustomizerHeader({ toggle }: TabCustomizerType) {
    const [modal, setModal] = useState(false);
    const modalToggle = useCallback(() => {
        setModal(!modal);
    }, [modal]);
    return (
        <div className='customizer-header'>
            <div className="theme-title">
                <div>
                    <H3>{'Preview Settings'}</H3>
                    <P className="mb-0">{'Try It Real Time '}<i className="fa-solid fa-thumbs-up fa-fw" /></P>
                    <Btn color="light" className="text-dark plus-popup mt-2" onClick={modalToggle}>
                        {'Configuration'}
                    </Btn>
                    <ConfigurationClass modal={modal} modalToggle={modalToggle} />
                </div>
                <div className="flex-grow-1">
                    <a className="icon-btn btn-outline-light button-effect pull-right cog-close" href={Href} onClick={toggle} id="cog-close">
                        <i className="fa-solid fa-xmark fa-fw" />
                    </a>
                </div>
            </div>
        </div>
    )
}