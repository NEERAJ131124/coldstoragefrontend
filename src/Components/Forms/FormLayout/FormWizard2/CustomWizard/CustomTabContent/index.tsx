import React from 'react'
import { VerticalWizardNavProps } from '../../../../../../Types/Forms.type'
import { TabContent, TabPane } from 'reactstrap'
import PersonalInfoForm from './PersonalInfoForm'
import BankInfoForm from './BankInfoForm'
import InquiresForm from './InquiresForm'
import CompletedForm from '../../Common/CompletedForm'

export default function CustomTabContent({ steps, activeCallBack }: VerticalWizardNavProps) {
    return (
        <TabContent className=" dark-field " activeTab={steps}>
            <TabPane tabId={1}>
                <PersonalInfoForm activeCallBack={activeCallBack} />
            </TabPane>
            <TabPane tabId={2}>
                <BankInfoForm activeCallBack={activeCallBack} />
            </TabPane>
            <TabPane tabId={3}>
                <InquiresForm activeCallBack={activeCallBack} />
            </TabPane>
            <TabPane tabId={4}>
                <CompletedForm />
            </TabPane>
        </TabContent>
    )
}