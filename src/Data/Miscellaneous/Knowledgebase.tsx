import { Aperture, BookOpen, Codepen, FileText, Youtube } from "react-feather";
import { FaqWidgetsItems } from "../../Types/Miscellaneous.type";

export const knowledgeBaseData = [
    {
        id: 1,
        title: "Quick questions are answered",
        knowledgeList: [
            {
                text: "Lorem Ipsum is simply dummy text of the printing",
                fileTextIcon: true,
            },
            {
                text: "Lorem Ipsum has been the industry's standard dummy",
                fileTextIcon: true,
            },
            {
                fileTextIcon: true,
                badge: "New",
                text: "When an unknown printer took a galley",
            },
            {
                fileTextIcon: true,
                text: "But also the leap into electronic typesetting,",
            },
            {
                text: "See More (40)",
            },
        ],
    },
    {
        id: 2,
        title: "Integrating wordPress with your website",
        knowledgeList: [
            {
                text: "It was popularised in the 1960s with the release",
                fileTextIcon: true,
                badge: "Review",
            },
            {
                fileTextIcon: true,
                text: "Etraset sheets containing Lorem Ipsum passages",
            },
            {
                fileTextIcon: true,
                text: "Desktop publishing software like Aldus PageMaker",
                badge: "Articles",
            },
            {
                fileTextIcon: true,
                text: "Making this the first true generator on the Internet.",
            },
            {
                text: "See More (90)",
            },
        ],
    },
    {
        id: 3,
        title: "WordPress site maintenance",
        knowledgeList: [
            {
                fileTextIcon: true,
                text: "Lorem, ipsum dolor sit amet consectetur adipisicing",
            },
            {
                fileTextIcon: true,
                text: "Normal distribution of letters, as opposed to using",
                badge: "Closed",
            },
            {
                fileTextIcon: true,
                text: "Lorem Ipsum, you need to be sure there isn't anything",
            },
            {
                fileTextIcon: true,
                text: "Repetition, injected humour, or non words etc",
            },
            {
                text: "See More (50)",
            },
        ],
    },
    {
        id: 4,
        title: "Meta tags in wordPress",
        knowledgeList: [
            {
                text: "Nemo enim ipsam voluptatem quia voluptas sit",
                fileTextIcon: true,
                badge: "Popular",
            },
            {
                fileTextIcon: true,
                text: "Ipsum quia dolor sit amet, consectetur",
            },
            {
                fileTextIcon: true,
                text: "Sed quia non numquam eius modi tempora incidunt",
            },
            {
                fileTextIcon: true,
                text: "Lorem eum fugiat quo voluptas nulla pariatu",
            },
            {
                text: "See More (90)",
            },
        ],
    },
    {
        id: 5,
        title: "WordPress in your language",
        knowledgeList: [
            {
                text: "Desktop publishing software like Aldus PageMaker",
                fileTextIcon: true,
            },
            {
                text: "Etraset sheets containing Lorem Ipsum passages",
                fileTextIcon: true,
            },
            {
                text: "It was popularised in the 1960s with the release",
                fileTextIcon: true,
            },
            {
                fileTextIcon: true,
                text: "Making this the first true generator on the Internet",
                badge: "Closed",
            },
            {
                text: "See More (50)",
            },
        ],
    },
    {
        id: 6,
        title: "Know your sources",
        knowledgeList: [
            {
                fileTextIcon: true,
                text: "The point of using Lorem Ipsum",
            },
            {
                fileTextIcon: true,
                text: "It has a more-or-less normal distribution of letters",
            },
            {
                text: "Et harum quidem rerum facilis est et expedita",
                fileTextIcon: true,
                badge: "Article",
            },
            {
                fileTextIcon: true,
                text: "Nam libero tempore, cum soluta nobis est eligendi",
            },
            {
                text: "See More (26)",
            },
        ],
    },
    {
        id: 7,
        title: "Validating a Website",
        knowledgeList: [
            {
                text: "When our power of choice is untrammelled",
                fileTextIcon: true,
                badge: "Review",
            },
            {
                fileTextIcon: true,
                text: "It will frequently occur that pleasures",
            },
            {
                text: "who fail in their duty through weakness",
                fileTextIcon: true,
                badge: "Closed",
            },
            {
                fileTextIcon: true,
                text: "At vero eos et accusamus et iusto",
            },
            {
                text: "See More (10)",
            },
        ],
    },
    {
        id: 8,
        title: "Quick questions are answered",
        knowledgeList: [
            {
                fileTextIcon: true,
                text: "Quis autem vel eum iure reprehenderit",
            },
            {
                text: "Ducimus  blanditiis praesentium voluptatum",
                fileTextIcon: true,
                badge: "Popular",
            },
            {
                text: "Omnis voluptas assumenda est",
                fileTextIcon: true,
                badge: "Review",
            },
            {
                text: "Produces no resultant pleasure",
                fileTextIcon: true,
            },
            {
                text: "See More (21)",
            },
        ],
    },
    {
        id: 9,
        title: "Integrating wordPress with your website",
        knowledgeList: [
            {
                text: "Lorem Ipsum passage, and going through",
                fileTextIcon: true,
            },
            {
                text: "The first line of Lorem Ipsum,  Lorem ipsum",
                fileTextIcon: true,
            },
            {
                text: "Thus comes from a line in section",
                fileTextIcon: true,
            },
            {
                text: "First true generator on the Internet",
                badge: "On hold",
                fileTextIcon: true,
            },
            {
                text: "See More (34)",
            },
        ],
    },
];

export const knowledgeBaseWidgetsData: FaqWidgetsItems[] = [
    {
        id: 1,
        title: "Articles",
        colClass: 'col-sm-6',
        icon: <BookOpen />,
    },
    {
        id: 2,
        title: "Knowledgebase",
        colClass: 'col-sm-6',
        icon: <Aperture />,
    },
    {
        id: 3,
        title: "Support",
        icon: <FileText />,
    },
];

export const knowledgeBaseFeaturedData = [
    {
        id: 1,
        image: '1.jpg',
        linkIcon: 'icon-link',
        downloadIcon: 'icon-import',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        title: 'Web Design',
        date: 'Dec 15, 2024'
    },
    {
        id: 2,
        image: '2.jpg',
        linkIcon: 'icon-link',
        downloadIcon: 'icon-import',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        title: 'Web Development',
        date: 'Dec 15, 2024'
    },
    {
        id: 3,
        image: '3.jpg',
        linkIcon: 'icon-link',
        downloadIcon: 'icon-import',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        title: 'UI Design',
        date: 'Dec 15, 2024'
    },
    {
        id: 4,
        image: '4.jpg',
        linkIcon: 'icon-link',
        downloadIcon: 'icon-import',
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        title: 'UX Design',
        date: 'Dec 15, 2024'
    },
];

export const latestArticlesVideosknowledge = [
    {
        id: 1,
        child: [
            {
                id: 1,
                colClass: "col-sm-12",
                icon: <Codepen className="m-r-20" />,
                title: "Using Video",
                text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
            },
            {
                id: 2,
                colClass: "col-sm-12",
                icon: <Codepen className="m-r-20" />,
                title: "Vel illum qu",
                text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
            },
            {
                id: 3,
                colClass: "col-sm-12",
                icon: <Codepen className="m-r-20" />,
                title: "Cum sociis natoqu",
                text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
            }
        ]
    },
    {
        id: 2,
        child: [
            {
                id: 1,
                colClass: "col-sm-12",
                icon: <FileText className="m-r-20" />,
                title: "Donec pede justo",
                text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
            },
            {
                id: 2,
                colClass: "col-sm-12",
                icon: <FileText className="m-r-20" />,
                title: "Nam quam nunc",
                text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
            },
            {
                id: 3,
                colClass: "col-sm-12",
                icon: <FileText className="m-r-20" />,
                title: "Using Video",
                text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
            }
        ]
    },
    {
        id: 3,
        child: [
            {
                id: 1,
                colClass: "col-xl-12 col-md-6",
                icon: <Youtube className="m-r-20" />,
                title: "Vel illum qu",
                text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
            },
            {
                id: 2,
                colClass: "col-xl-12 col-md-6",
                icon: <Youtube className="m-r-20" />,
                title: "Cum sociis natoqu",
                text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
            },
            {
                id: 3,
                colClass: "col-xl-12",
                icon: <Youtube className="m-r-20" />,
                title: "Donec pede justo",
                text: "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."
            }
        ]
    }
];