import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { JavascriptModeTitle } from '../../../../Utils/Constants'
import { javascriptData } from '../../../../Data/Miscellaneous/Editor';

export default function JavascriptMode() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={JavascriptModeTitle} />
                <CardBody>
                    <AceEditor
                        className="aceEditor w-auto"
                        mode="javascript"
                        theme="monokai"
                        value={javascriptData}
                        name="blah2"
                        setOptions={{ useWorker: false }}
                        fontSize={14}
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