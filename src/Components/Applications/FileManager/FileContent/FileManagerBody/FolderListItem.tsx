import React from 'react'
import { FileFolderItemProp } from '../../../../../Types/FileManager.type'
import { H6, LI, P } from '../../../../../AbstractElements'

export default function FolderListItem({ item }: FileFolderItemProp) {
    return (
        <LI className="folder-box">
            <div className="d-block">
                <i className={`fa-solid fa-${item.folderClass} text-secondary fs-1`} />
                <i className="fa-solid fa-ellipsis-vertical ellips me-0" />
                <div className="mt-3">
                    <H6 className='mb-2'>{item.title}</H6>
                    <P>
                        {item.folderFiles}
                        <span className="pull-right">
                            <i className="fa-solid fa-clock me-1" />{item.folderTime}
                        </span>
                    </P>
                </div>
            </div>
        </LI>
    )
}