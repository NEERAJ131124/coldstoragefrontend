import { Aperture, BookOpen, Check, Codepen, DollarSign, Edit, FileText, Globe, Link, Mail, MessageCircle, RotateCw, Youtube } from "react-feather";
import { Href } from "../../Utils/Constants";

//Faq widgets
export const faqWidgetsData = [
    {
        id: 1,
        title: "Articles",
        colClass: 'box-col-6',
        icon: <FileText />,
    },
    {
        id: 2,
        title: "Knowledgebase",
        colClass: 'col-sm-6 box-col-6',
        icon: <BookOpen />,
    },
    {
        id: 3,
        title: "Support",
        colClass: 'col-sm-6 box-col-12',
        icon: <Aperture />,
    },
];

export const faqQuestionsData = [
    {
        id: 1,
        titles: [
            {
                id: 1,
                title: "Integrating WordPress with Your Website?",
            },
            {
                id: 2,
                title: "WordPress Site Maintenance ?",
            },
            {
                id: 3,
                title: "Meta Tags in WordPress ?",
            },
            {
                id: 4,
                title: "WordPress in Your Language ?",
            },
        ],
    },
    {
        id: 2,
        subTitle: "Intellectual Property",
        titles: [
            {
                id: 5,
                title: "WordPress Site Maintenance ?",
            },
            {
                id: 6,
                title: "WordPress in Your Language ?",
            },
            {
                id: 7,
                title: "Integrating WordPress with Your Website ?",
            },
        ],
    },
    {
        id: 3,
        subTitle: "Selling And Buying",
        titles: [
            {
                id: 8,
                title: "WordPress Site Maintenance ?",
            },
            {
                id: 9,
                title: "Meta Tags in WordPress ?",
            },
            {
                id: 10,
                title: "Validating a Website ?",
            },
            {
                id: 11,
                title: "Know Your Sources ?",
            },
        ],
    },
    {
        id: 4,
        subTitle: "User Accounts",
        titles: [
            {
                id: 12,
                title: "Integrating WordPress with Your Website ?",
            },
            {
                id: 13,
                title: "WordPress Site Maintenance ?",
            },
            {
                id: 14,
                title: "WordPress in Your Language ?",
            },
            {
                id: 15,
                title: "Validating a Website ?",
            },
            {
                id: 16,
                title: "Meta Tags in WordPress ?",
            },
        ],
    },
];

export const navigationData = [
    {
        id: 1,
        child: [
            {
                id: 1,
                link: Href,
                icon: <Edit />,
                text: 'Tutorials',
            },
            {
                id: 2,
                link: Href,
                icon: <Globe />,
                text: 'Help center',
            },
            {
                id: 3,
                link: `${process.env.PUBLIC_URL}/miscellaneous/knowledgebase`,
                icon: <BookOpen />,
                text: 'Knowledgebase',
            },
            {
                id: 4,
                link: `${process.env.PUBLIC_URL}/miscellaneous/blog/blog-detail`,
                icon: <FileText />,
                text: 'Articles',
                badge: 42,
            },
            {
                id: 5,
                link: Href,
                icon: <Youtube />,
                text: 'Video Tutorials',
                badge: 648,
            },
            {
                id: 6,
                link: Href,
                icon: <MessageCircle />,
                text: 'Ask our community',
            },
            {
                id: 7,
                link: `${process.env.PUBLIC_URL}/applications/contacts`,
                icon: <Mail />,
                text: 'Contact us',
            },
        ]
    },
    {
        id: 2,
        child: [
            {
                id: 6,
                link: Href,
                icon: <MessageCircle />,
                text: 'Ask our community',
            },
            {
                id: 7,
                link: `${process.env.PUBLIC_URL}/applications/contacts`,
                icon: <Mail />,
                text: 'Contact us',
            },
        ]
    }
];

export const latestUpdatesData = [
    {
        id: 1,
        icon: <RotateCw className="font-primary" />,
        anchor: 'David Linner',
        title: 'requested money back for a double debit card charge',
        time: '10 minutes ago'
    },
    {
        id: 2,
        icon: <DollarSign className="font-primary" />,
        title: 'All sellers have received monthly payouts',
        time: '2 hours ago'
    },
    {
        id: 3,
        icon: <Link className="font-primary" />,
        name: 'User Christopher',
        anchor: 'Wallace',
        title: 'is on hold and awaiting for staff reply',
        time: '45 minutes ago'
    },
    {
        id: 4,
        icon: <Check className="font-primary" />,
        name: 'Ticket #697201 has been closed by ',
        anchor: 'Victoria Wilson',
        time: 'Dec 7, 11:48'
    },
];

export const featuredTutorialsData = [
    {
        id: 1,
        image: '1.jpg',
        linkIcon: 'fa-solid fa-link',
        downloadIcon: 'fa-solid fa-download',
        description: 'Web Design Trends: Provide an overview of current web design trends, such as minimalist design, microinteractions, dark mode, and immersive experiences.',
        title: 'Web Design',
        date: 'May 15, 2024'
    },
    {
        id: 2,
        image: '2.jpg',
        linkIcon: 'fa-solid fa-link',
        downloadIcon: 'fa-solid fa-download',
        description: "Web development is a vast field, and there are many other aspects and technologies involved. It's important to continuously learn and keep up with the latest trends and technologies to stay.",
        title: 'Web Development',
        date: 'May 12, 2024'
    },
    {
        id: 3,
        image: '3.jpg',
        linkIcon: 'fa-solid fa-link',
        downloadIcon: 'fa-solid fa-download',
        description: "UI design is an iterative process that involves research, ideation, prototyping, testing, and refinement. It requires a blend of creativity, user empathy, and understanding of design.",
        title: 'UI Design',
        date: 'May 13, 2024'
    },
    {
        id: 4,
        image: '4.jpg',
        linkIcon: 'fa-solid fa-link',
        downloadIcon: 'fa-solid fa-download',
        description: "UX design is a holistic approach that focuses on understanding and meeting user needs, ultimately aiming to create products that are valuable, usable, and delightful for the users.",
        title: 'UX Design',
        date: 'May 14, 2024'
    },
];

export const latestArticlesVideosFaq = [
    {
        id: 1,
        child: [
            {
                id: 1,
                colClass: "col-sm-12",
                icon: <Codepen className="m-r-30"/>,
                title: "Using Video",
                text: "The web is a very big place, and if you are the typical internet base user."
            },
            {
                id: 2,
                colClass: "col-sm-12",
                icon: <Codepen className="m-r-30"/>,
                title: "Vel illum qu",
                text: "A book giving information on many subjects or on many aspects of one subject."
            },
            {
                id: 3,
                colClass: "col-sm-12",
                icon: <Codepen className="m-r-30"/>,
                title: "Cum sociis natoqu",
                text: "Simple demos of frequently asked questions about using the information resources."
            }
        ]
    },
    {
        id: 2,
        child: [
            {
                id: 1,
                colClass: "col-sm-12",
                icon: <FileText className="m-r-30"/>,
                title: "Donec pede justo",
                text: "Website is the process of ensuring that the pages on the website conform.",
            },
            {
                id: 2,
                colClass: "col-sm-12",
                icon: <FileText className="m-r-30"/>,
                title: "Nam quam nunc",
                text: "Tailwind is so low-level, it never encourages you to design the same site twice."
            },
            {
                id: 3,
                colClass: "col-sm-12",
                icon: <FileText className="m-r-30"/>,
                title: "Using Video",
                text: "A book giving information on many subjects or on many aspects of one subject."
            }
        ]
    },
    {
        id: 3,
        child: [
            {
                id: 1,
                colClass: "col-xl-12 col-md-6",
                icon: <Youtube className="m-r-30"/>,
                title: "Vel illum qu",
                text: "Simple demos of frequently asked questions about using the information resources"
            },
            {
                id: 2,
                colClass: "col-xl-12 col-md-6",
                icon: <Youtube className="m-r-30"/>,
                title: "Cum sociis natoqu",
                text: "Website is the process of ensuring that the pages on the website conform.",
            },
            {
                id: 3,
                colClass: "col-xl-12",
                icon: <Youtube className="m-r-30"/>,
                title: "Donec pede justo",
                text: "Web is so high-level, it never encourages you to design the same site twice",
            }
        ]
    }
];
