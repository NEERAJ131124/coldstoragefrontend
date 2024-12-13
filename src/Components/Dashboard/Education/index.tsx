import React from 'react'
import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs'
import { DashboardTitle, EducationDashboardTitle, EducationTitle } from '../../../Utils/Constants'
import ScheduleLesson from '../../../Utils/CommonComponents/CommonDashboard/CommonProject/ScheduleLesson'
import GraphicDesign from './GraphicDesign'
import UpcomingCard from '../../../Utils/CommonComponents/CommonDashboard/CommonProject/UpcomingCard'
import PerformanceCard from './PerformanceCard'
import NoticeBoard from './NoticeBoard'
import StudentDetails from './StudentDetails'
import NewCourses from './NewCourses'
import PieCard from './PieCard'
import ToDoList from './ToDoList'
import Assignments from './Assignments'

export default function EducationDashboard() {
    return (
        <>
            <Breadcrumbs pageTitle={EducationDashboardTitle} parent={DashboardTitle} title={EducationTitle} paragraph='"Welcome back to your educational adventure!"' />
            <Container className='dashboard-3' fluid>
                <Row>
                    <GraphicDesign />
                    <UpcomingCard colClass='col-xl-4 order-sm-1 order-xl-0 box-col-5' cardClass='upcoming-card' />
                    <PerformanceCard />
                    <NoticeBoard />
                    <StudentDetails />
                    <NewCourses />
                    <PieCard />
                    <ToDoList />
                    <Assignments />
                    <ScheduleLesson colClass='col-xxl-3 col-xl-5 box-col-6' />
                </Row>
            </Container>
        </>
    )
}