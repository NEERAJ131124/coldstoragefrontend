import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleInterview } from '../../../../../ReduxToolkit/Reducers/LetterBoxReducer';
import { mailHeader } from '../../../../../Data/Applications/LetterBox';
import { ToolTip } from '../../../../../AbstractElements';
import DashboardSvgIcon from '../../../../../Utils/CommonComponents/DashboardSvgIcon';

export default function MailBody1() {
    const dispatch = useDispatch();
    const [tooltipOpen, setTooltipOpen] = useState<number | null>(null);
    const toggle = (index: number) => {
        setTooltipOpen(tooltipOpen !== index ? index : null);
    };

    return (
        <div className="mail-header-wrapper header-wrapper1">
            <div className="mail-header1">
                <div className="light-square" onClick={() => dispatch(handleInterview(false))}>
                    <DashboardSvgIcon className="btn-email" iconId="back-arrow" />
                </div>
                <span>{'Interview Mail'}</span>
            </div>
            <div className="mail-body1">
                {mailHeader.map((data, i) => (
                    <Fragment key={i}>
                        <div className="light-square" id={`light-${data.icon}`}>
                            <DashboardSvgIcon iconId={data.icon} className={data.className ? data.className : ""} />
                        </div>
                        <ToolTip placement="top" isOpen={tooltipOpen === i} target={`light-${data.icon}`} toggle={() => toggle(i)}>{data.tooltip}</ToolTip>
                    </Fragment>
                ))}
            </div>
        </div>
    );
};