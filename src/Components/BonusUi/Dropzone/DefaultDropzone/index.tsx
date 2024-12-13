import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { FilePond } from 'react-filepond'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DefaultDropzoneTitle } from '../../../../Utils/Constants'

export default function DefaultDropzone() {
    const [files, setFiles] = useState([])
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader title={DefaultDropzoneTitle} />
                <CardBody>
                    <FilePond
                        files={files}
                        onupdatefiles={() => setFiles}
                        allowMultiple={true}
                        maxFiles={1}
                        allowImagePreview={false}
                        labelIdle={'Drag & Drop your files or <span class="filepond--label-action text-danger text-decoration-none">Browse</span>'}
                    />
                </CardBody>
            </Card>
        </Col>
    )
}