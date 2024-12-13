import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { PhpModeTitle } from '../../../../Utils/Constants'
import { phpData } from '../../../../Data/Miscellaneous/Editor'

export default function PhpMode() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={PhpModeTitle} />
                <CardBody>
                    <AceEditor
                        className="aceEditor w-auto"
                        mode="php"
                        theme="monokai"
                        value={phpData}
                        name="blah2"
                        fontSize={14}
                        setOptions={{ useWorker: false }}
                        showPrintMargin={true}
                        showGutter={true}
                        editorProps={{ $blockScrolling: true }}
                        highlightActiveLine={true}
                    />
                </CardBody>
            </Card>
        </Col>
    )
}