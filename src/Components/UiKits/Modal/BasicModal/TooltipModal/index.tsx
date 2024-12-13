import React, { useState } from 'react'
import { Btn, H5, P, ToolTip } from '../../../../../AbstractElements';
import CommonModal from '../../Common/CommonModal';
import TooltipLink from './TooltipLink';

export default function TooltipModal() {
    const [state, setState] = useState({ modalOpen: false, tooltipOpen: false });
    const handleModalToggle = () => {
        setState(prevState => ({
            ...prevState,
            modalOpen: !prevState.modalOpen
        }));
    };
    const handleTooltipToggle = () => {
        setState(prevState => ({
            ...prevState,
            tooltipOpen: !prevState.tooltipOpen
        }));
    };
    const data = {
        isOpen: state.modalOpen,
        header: true,
        footer: true,
        toggler: handleModalToggle,
        center: true,
        title: 'Tooltip and popover modal',
    };
    return (
        <>
            <Btn color='info' className='px-xl-2 px-xxl-3' onClick={handleModalToggle}>{'Tooltips and popovers'}</Btn>
            <CommonModal modalData={data}>
                <H5>{'Popover in a modal'}</H5>
                <P className="mt-2">{'This '}
                    <Btn className="popover-test" size='sm' color='success' id="TooltipExample">{'button'}</Btn>{' triggers a popover on click.'}
                    <ToolTip autohide={true} isOpen={state.tooltipOpen} target="TooltipExample" toggle={handleTooltipToggle}>{'this is amazing content'}</ToolTip>
                </P><hr />
                <TooltipLink />
            </CommonModal>
        </>
    )
}
