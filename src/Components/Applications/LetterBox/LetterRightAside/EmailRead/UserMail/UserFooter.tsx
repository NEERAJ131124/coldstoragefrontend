import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import DownloadLink from 'react-download-link';
import { Image, P } from '../../../../../../AbstractElements';
import { dynamicImage } from '../../../../../../Utils';
import DashboardSvgIcon from '../../../../../../Utils/CommonComponents/DashboardSvgIcon';

export default function UserFooter() {
    const [value, setValue] = useState('Enter Your Messages..');
    
    return (
        <div className="user-footer">
            <div>
                <DashboardSvgIcon iconId='attchment' />
                <span className="f-light">{'Attachments'}</span>
            </div>
            <div className="d-inline-block">
                <div className="attchment-file common-flex">
                    <div className="common-flex align-items-center">
                        <Image src={dynamicImage(`email-template/pdfs.png`)} alt="pdf" />
                        <div className="d-block">
                            <P>{'Offer_Letter.pdf'}</P>
                            <P>{'200KB'}</P>
                        </div>
                    </div>
                    <DownloadLink filename="myfile.txt" label={<i className="fa-solid fa-download"></i>} />
                </div>
            </div>
            <div className="toolbar-box">
                <ReactQuill value={value} onChange={setValue} />
            </div>
        </div>
    );
}