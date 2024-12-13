import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import AceCodeEditor from 'react-ace';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { CssModeTitle } from '../../../../Utils/Constants'
import { CssData } from '../../../../Data/Miscellaneous/Editor';

export default function CssMode() {
    return (
        <Col xl={6}>
            <Card>
                <CommonCardHeader title={CssModeTitle} />
                <CardBody>
                    <AceCodeEditor
                        className="aceEditor w-auto"
                        mode="css"
                        theme="monokai"
                        value={CssData}
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