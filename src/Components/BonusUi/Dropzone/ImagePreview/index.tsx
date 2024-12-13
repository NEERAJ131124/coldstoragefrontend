import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { ImagePreviewTitle } from '../../../../Utils/Constants';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function ImagePreview() {
    const [files, setFiles] = useState([])
    return (
        <Col lg={6}>
            <Card>
                <CommonCardHeader title={ImagePreviewTitle} />
                <CardBody>
                    <FilePond
                        files={files}
                        allowReorder={true}
                        allowMultiple={true}
                        maxFiles={1}
                        onupdatefiles={() => setFiles}
                        labelIdle='Drag & Drop your files or <span class="filepond--label-action text-danger text-decoration-none">Browse</span>'
                    />
                </CardBody>
            </Card>
        </Col>
    )
}

