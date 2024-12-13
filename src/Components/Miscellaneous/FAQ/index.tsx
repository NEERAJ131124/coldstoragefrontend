import React from 'react'
import { Container, Row } from 'reactstrap'
import FaqWidgets from '../Common/FaqWidgets'
import QuickQuestions from './QuickQuestions'
import FeaturedTutorials from '../Common/FeaturedTutorials'
import LatestArticlesVideos from '../Common/LatestArticlesVideos'
import { faqWidgetsData, featuredTutorialsData, latestArticlesVideosFaq } from '../../../Data/Miscellaneous/FAQ'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { FaqTitle } from '../../../Utils/Constants'

export default function FaqContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={FaqTitle} parent={FaqTitle} title={FaqTitle} />
            <Container fluid>
                <div className="faq-wrap">
                    <Row>
                        <FaqWidgets data={faqWidgetsData} />
                        <QuickQuestions />
                        <FeaturedTutorials data={featuredTutorialsData} titleClass='f-w-700' colClass='col-xxl-3' />
                        <LatestArticlesVideos data={latestArticlesVideosFaq} titleClass='f-w-600' />
                    </Row>
                </div>
            </Container>
        </>
    )
}