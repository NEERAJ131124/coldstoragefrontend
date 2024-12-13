import React from 'react'
import { Container, Row } from 'reactstrap'
import CommonTableComponent from './Common/CommonTableComponent'
import { AlertTitle, BadgesTitle, CheckboxTitle, Inputs, ProgressbarTitle, RadioButtonsTitle, TablesTitle, Select, SwitchTitle, TooltipTriggersTitle, UIComponentsTitle, TableComponentsTitle } from '../../../../Utils/Constants'
import { alertTableData, badgesTableData, checkboxTableData, inputTableData, progressTableData, radioBoxTableData, selectBoxTableData, switchTableData, toolTipTriggersData, uiComponentTableData } from '../../../../Data/Tables/ReactstrapTables/TableComponents'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs'

export default function TableComponentsContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={TableComponentsTitle} parent={TablesTitle} title={TableComponentsTitle} />
            <Container fluid>
                <Row>
                    <CommonTableComponent title={UIComponentsTitle} data={uiComponentTableData} rowClass='ui-components' />
                    <CommonTableComponent title={AlertTitle} data={alertTableData} rowClass='ui-components' />
                    <CommonTableComponent title={ProgressbarTitle} data={progressTableData} tableClass='checkbox-td-width' />
                    <CommonTableComponent title={CheckboxTitle} data={checkboxTableData} tableClass='checkbox-td-width' />
                    <CommonTableComponent title={RadioButtonsTitle} data={radioBoxTableData} rowClass='radio-buttons' tableClass='radio-first-col-width' />
                    <CommonTableComponent title={Select} data={selectBoxTableData} tableClass='checkbox-td-width select-components' />
                    <CommonTableComponent title={Inputs} data={inputTableData} tableClass='checkbox-td-width basic-form' />
                    <CommonTableComponent title={BadgesTitle} data={badgesTableData} tableClass='badge-table' />
                    <CommonTableComponent title={TooltipTriggersTitle} data={toolTipTriggersData} />
                    <CommonTableComponent title={SwitchTitle} data={switchTableData} tableClass='switch-componet' />
                </Row>
            </Container>
        </>
    )
}