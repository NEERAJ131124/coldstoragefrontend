import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { HTMLModeTitle } from '../../../../Utils/Constants'
import { htmlData } from '../../../../Data/Miscellaneous/Editor';

export default function HtmlMode() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={HTMLModeTitle} />
                <CardBody>
                    <AceEditor
                        className="aceEditor w-auto"
                        mode="html"
                        theme="monokai"
                        value={htmlData}
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