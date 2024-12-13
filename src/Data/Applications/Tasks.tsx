import { Business, DelayedTasks, Holidays, Newsletter, Notification, ThisMonthTasks, ThisWeekTasks, TodayTasks, UpcomingTasks } from "../../Utils/Constants";

export const viewTaskNav = [
    {
        id: 1,
        title: 'Created by me',
    },
    {
        id: 2,
        title: "Today's Tasks",
    },
    {
        id: 3,
        title: 'Delayed Tasks',
    },
    {
        id: 4,
        title: 'Upcoming Tasks',
    },
    {
        id: 5,
        title: 'This week tasks',
    },
    {
        id: 6,
        title: 'This month tasks',
    },
    {
        id: 7,
        title: 'Assigned to me',
    },
    {
        id: 8,
        title: 'My tasks',
    },
];

export const tagsTaskNav = [
    {
        id: 9,
        title: 'notification',
    },
    {
        id: 10,
        title: "Newsletter",
    },
    {
        id: 11,
        title: 'Business',
    },
    {
        id: 12,
        title: 'Holidays',
    },
];

export const timeList = ["7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00"];
export const taskRightViewsList = [
    {id: 2, title: TodayTasks}, {id: 3, title: DelayedTasks},{id: 4, title: UpcomingTasks},{id: 5, title: ThisWeekTasks},{id: 6, title: ThisMonthTasks}
]
export const taskRightTagsList = [
    {id: 9, title: Notification}, {id: 10, title: Newsletter},{id: 11, title: Business},{id: 12, title: Holidays}
]