import { CourseCheckboxProps } from "../../Types/Miscellaneous.type";

export const findCourseCheckbox: CourseCheckboxProps[] = [
    {
        id: 1,
        divClass: 'custom-checkbox',
        title: 'Categories',
        child: [
            {
                id: 1,
                type: 'checkbox',
                text: 'Accounting'
            },
            {
                id: 2,
                type: 'checkbox',
                text: 'Design'
            },
            {
                id: 3,
                type: 'checkbox',
                text: 'Development'
            },
            {
                id: 4,
                type: 'checkbox',
                text: 'Management'
            },
        ]
    },
    {
        id: 2,
        title: 'Duration',
        divClass: 'mt-0',
        child: [
            {
                id: 5,
                type: 'checkbox',
                text: '0-50 hours'
            },
            {
                id: 6,
                type: 'checkbox',
                text: '50-100 hours'
            },
            {
                id: 7,
                type: 'checkbox',
                text: '100+ hours'
            },
        ]
    },
    {
        id: 3,
        title: 'Price',
        divClass: 'mt-0 custom-radio',
        child: [
            {
                id: 8,
                type: 'radio',
                text: 'All Courses',
                name: "rdo-ani"
            },
            {
                id: 9,
                type: 'radio',
                text: 'Paid Courses',
                name: "rdo-ani",
            },
            {
                id: 10,
                type: 'radio',
                text: 'Free Courses',
                name: "rdo-ani",
                check: 'checked'
            },
        ]
    },
    {
        id: 4,
        title: 'Status',
        divClass: 'mt-0',
        child: [
            {
                id: 11,
                type: 'checkbox',
                text: 'Registration',
            },
            {
                id: 12,
                type: 'checkbox',
                text: 'Progress',
            },
            {
                id: 13,
                type: 'checkbox',
                text: 'Completed',
            },
        ]
    },
];

export const categoriesData = [
    {
        id: 1,
        title: 'Design',
        child: [
            {
                id: 1,
                text: 'UI Design',
                value: 28
            },
            {
                id: 2,
                text: 'UX Design',
                value: 35
            },
            {
                id: 3,
                text: 'Interface Design',
                value: 17
            },
            {
                id: 4,
                text: 'User Experience',
                value: 26
            },
        ]

    },
    {
        id: 2,
        title: 'Development',
        child: [
            {
                id: 1,
                text: 'Frontend Development',
                value: 48
            },
            {
                id: 2,
                text: 'Backend Development',
                value: 19
            },
        ]
    },
];

export const upcomingCoursesData = [
    {
        id: 1,
        title: 'UX Development',
        anchorText: 'Howard Moore',
        value: 18,
        month: 'Dec',
        star: [
            { id: 1, class: 'star' },
            { id: 2, class: 'star' },
            { id: 3, class: 'star' },
            { id: 4, class: 'star' },
            { id: 5, class: 'star-half-o' },
        ]
    },
    {
        id: 2,
        title: 'Business Analyst',
        anchorText: 'Crystal Markey',
        value: 28,
        month: 'Dec',
        star: [
            { id: 1, class: 'star' },
            { id: 2, class: 'star' },
            { id: 3, class: 'star' },
            { id: 4, class: 'star' },
            { id: 5, class: 'star' },
        ]
    },
    {
        id: 3,
        title: 'Web Development',
        anchorText: 'Jerry Reel',
        value: 25,
        month: 'Jan',
        star: [
            { id: 1, class: 'star' },
            { id: 2, class: 'star' },
            { id: 3, class: 'star' },
            { id: 4, class: 'star' },
            { id: 5, class: 'star-o' },
        ]
    },
];

export const learningListData = [
    {
        id: 1,
        image: '1.jpg',
        date: '05',
        month: 'January 2024',
        title: 'Java Language',
        by: 'by: Paige Turner',
        hits: '15 Hits',
        paragraph: 'Java is an object-oriented programming language. Sun Microsystems first released Java in the year 1995. It is popularly used for developing Java applications in data centers, laptops, cell phones, game consoles, and scientific supercomputers. There are multiple websites and applications which will not work if Java is not installed.'
    },
    {
        id: 2,
        image: '2.jpg',
        date: '10',
        month: 'March 2024',
        title: 'Web Development',
        by: 'by: Petey Cruiser',
        hits: '34 Hits',
        paragraph: 'Web development is the work involved in developing a website for the Internet or an intranet (a private network).Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services, and many more such applications and websites are being created every day.'
    },
];

export const learningGridData = [
    {
        id: 1,
        src: '3.jpg',
    },
    {
        id: 2,
        src: '1.jpg',
    },
    {
        id: 3,
        src: '4.jpg',
    },
    {
        id: 4,
        src: '2.jpg',
    },
    {
        id: 5,
        src: '4.jpg',
    },
    {
        id: 6,
        src: '3.jpg',
    },
];

export const commentBoxData = [
    {
        id: 1,
        src: '3.jpg',
        name: 'Jolio Mark',
        paragraph: 'The best thing is location and drive through the forest. The resort is 35km from Ramnagar. The gardens are well kept and maintained. Its a good place for relaxation away from the city noise. The staff is very friendly and overall we had a really good & fun time, thanks to staff member - Bhairav, Rajat, Gunanand, Lokesh & everyone else. And also we went for an adventurous night safari and saw barking deers, tuskar elephant.'
    },
    {
        id: 2,
        src: '4.jpg',
        name: 'Mark Jolio',
        paragraph: "The best thing is location and drive through the forest. The resort is 35km from Ramnagar. The gardens are well kept and maintained. Its a good place for relaxation away from the city noise. The staff is very friendly and overall we had a really good & fun time, thanks to staff member - Bhairav, Rajat, Gunanand, Lokesh & everyone else. And also we went for an adventurous night safari and saw barking deers, tuskar elephant."
    },
    {
        id: 3,
        src: '7.jpg',
        name: 'John deo',
        paragraph: 'Clean resort with maintained garden but rooms are average Lack of communication between the staff members. Receptionsit full of attitude. Arrogant staff. Except good view there is nothing great in this property.Resort is 35 kms away from Ramnagar Town.'
    },
];

export const singleBlogContentTop = [
    "Knowledge can be defined as awareness of facts or as practical skills, and may also refer to familiarity with objects or situations. Knowledge of facts, also called propositional knowledge, is often defined as true belief that is distinct from opinion or guesswork by virtue of justification. While there is wide agreement among philosophers that it is a form of true belief, many controversies in philosophy focus on justification: whether it is needed at all, how to understand it, and whether something else besides it is needed.",
    "Knowledge can be produced in many different ways. The most important source is perception, which refers to the usage of the five senses. Many theorists also include introspection as a source of knowledge, not of external physical objects, but of one's own mental states. Other sources often discussed include memory, rational intuition, inference, and testimony. According to foundationalism, some of these sources are basic in the sense that they can justify beliefs without depending on other mental states. This claim is rejected by coherentists."
]