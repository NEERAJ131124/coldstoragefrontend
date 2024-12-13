import React from 'react'
import { CardBody } from 'reactstrap'
import { FileManagerBodyProps } from '../../../../../Types/FileManager.type'
import { H4, H6, LI, UL } from '../../../../../AbstractElements'
import FolderListItem from './FolderListItem'
import { quickAccessData } from '../../../../../Data/Applications/FileManager'

export default function FileManagerBody({ myFile, fileList }: FileManagerBodyProps) {
    return (
        <CardBody className="file-manager">
            <H4 className="mb-2">{'Quick Access'}</H4>
            <UL className="simple-list quick-file d-flex flex-row">
                {quickAccessData.map((item) => (
                    <LI key={item.id}>
                        <div className="quick-box">
                            <i className={item.quickClass}></i>
                        </div>
                        <H6 className="mb-2">{item.quickTitle}</H6>
                    </LI>
                ))}
            </UL>
            <H4 className="mt-4 mb-2">{'Folders'}</H4>
            <UL className="simple-list folder flex-row">
                {myFile.map((item) => (
                    <FolderListItem key={item.id} item={item} />
                ))}
            </UL>
            <H4 className="mt-4 mb-2 mb-2 mb-2">{'Files'}</H4>
            <UL className="simple-list d-flex flex-row files-content">{fileList}</UL>
        </CardBody>
    )
}
