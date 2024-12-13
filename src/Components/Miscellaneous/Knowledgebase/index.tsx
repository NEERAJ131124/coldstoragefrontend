import React from 'react'
import { Container, Row } from 'reactstrap'
import KnowledgeSearch from './KnowledgeSearch'
import FaqWidgets from '../Common/FaqWidgets'
import BrowseArticles from './BrowseArticles'
import FeaturedTutorials from '../Common/FeaturedTutorials'
import LatestArticlesVideos from '../Common/LatestArticlesVideos'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { KnowledgebaseTitle } from '../../../Utils/Constants'
import { knowledgeBaseFeaturedData, knowledgeBaseWidgetsData, latestArticlesVideosknowledge } from '../../../Data/Miscellaneous/Knowledgebase'

export default function KnowledgebaseContainer() {
    return (
        <>
            <Breadcrumbs pageTitle={KnowledgebaseTitle} parent={KnowledgebaseTitle} title={KnowledgebaseTitle} />
            <Container fluid>
                <Row>
                    <KnowledgeSearch />
                    <FaqWidgets data={knowledgeBaseWidgetsData} />
                    <BrowseArticles />
                    <FeaturedTutorials data={knowledgeBaseFeaturedData} colClass='col-xl-3 xl-50' />
                    <LatestArticlesVideos divClass='articles-icons' data={latestArticlesVideosknowledge} />
                </Row>
            </Container>
        </>
    )
}