import React from 'react'
import { FileFolderItemProp } from '../../../../../Types/FileManager.type'
import { H5, LI, P } from '../../../../../AbstractElements'

export default function FileListItem({ item }: FileFolderItemProp) {
    return (
        <LI className='folder-box d-flex align-items-center'>
            <div className="d-flex align-items-center files-list">
                <div className='flex-shrink-0 file-left'>
                    <i className={`fa-solid fa-${item.icon} fs-4`} />
                </div>
                <div className='flex-grow-1 ms-3'>
                    <H5 className='f-w-600'>{item.name}</H5>
                    <P>{item.size}</P>
                </div>
            </div>
        </LI>
    )
}