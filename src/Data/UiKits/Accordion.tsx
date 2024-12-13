import { LI, P, UL } from "../../AbstractElements";

export const simpleAccordionSubTitle = [
    {
        text: 'Using the  ',
        code: '.accordion '
    },
    {
        text: 'class to expand/collapse to accordion content.'
    }
];

export const flushAccordionSubTitle = [
    {
        text: 'Add ',
        code: '.accordion-flush'
    },
    {
        text: ' to remove the default background-color, border, etc.'
    }
];

export const multipleCollapseSubTitle = [
    {
        text: 'Use ',
        code: 'href'
    },
    {
        text: ' on',
        code: ' data-bs-toggle attribute'
    },
    {
        text: ' to show and hide multiple elements.'
    }
];

export const iconAccordionSubTitle = [
    {
        text: 'Use ',
        code: 'icons '
    },
    {
        text: 'with ',
        code: '.accordion '
    },
    {
        text: 'to give better look.'
    }
];

export const outlineAccordionSubTitle = [
    {
        text: 'Set border outline with accordion using ',
        code: '.accordion-wrapper'
    },
    {
        text: ' class.'
    }
];

export const horizontalAccordionSubTitle = [
    {
        text: 'Add the ',
        code: '.collapse-horizontal'
    },
    {
        text: ' modifier class to transition the width instead of height and set a width on the immediate child element.'
    }
];

export const collapesAccordionSubTitle = [
    {
        text: 'Use a link with the href attribute ',
        code: ' (and a role="button").'
    },
    {
        text: ' In both cases, the',
        code: ' data-bs-toggle="collapse"'
    },
    {
        text: ' is required.'
    }
]


export const elementsWebDesignList = ['-->Layout', '-->Images', '-->Visual hierarchy', '-->Color scheme', '-->Typography', '-->Navigation', '-->Readability', '-->Content'];

export const flushData = [
    {
        id: 'flush1',
        head: 'What is bootstrap?',
        child: [
            { text: "--> Bootstrap is the most popular HTML, CSS and JavaScript framework for developing a responsive and mobile friendly website." },
            { text: "--> It is absolutely free to download and use." }
        ]
    },
    {
        id: 'flush2',
        head: 'Why Should You Use Bootstrap?',
        child: [
            { text: "First and foremost, Bootstrap is easy to learn. Due to its popularity, plenty of tutorials and online forums are available to help you get started." },
            { text: "One of the reasons why Bootstrap is so popular among web developers and web designers is that it has a simple file structure. Its files are compiled for easy access, and it only requires basic knowledge of HTML, CSS, and JS to modify them." },
            { text: "You can also use themes for popular content management systems as learning tools. For example, most WordPress themes were developed using Bootstrap, which any beginner web developer can access. " },
            { text: "To increase the site's page load time, Bootstrap minifies the CSS and JavaScript files. Additionally, Bootstrap maintains consistency across the syntax between websites and developers, which is ideal for team-based projects." },
        ]
    },
    {
        id: 'flush3',
        head: 'Bootstrap Image System',
        child: [
            { text: "Bootstrap handles the image display and responsiveness with its predefined HTML and CSSrules." },
            { text: "Adding the .img-responsive class will automatically resize images based on theusers' screen size. This will benefit your website’s performance, as reducing image sizes ispart of the site optimization process." },
            { text: "Bootstrap also provides additional classes likeimg-circle and .img-rounded, which help to modify the images' shape." }
        ]
    }
];

export const iconDemoData = [
    {
        id: 'icon1',
        icon: <i className="fa-regular fa-bell" />,
        head: ' Keep in touch',
        text:
            <P>
                <em className="text-danger"> {'" This page might not behave as expected because Windows Internet Explorer'}
                    {"isn't"} {'configured to load unsigned ActiveX controls."'}</em> {'or "Allow this page to install an unsigned ActiveX Control? Doing so from untrusted sources may harm your computer." (Both phrased as conditions that may cause future problems.)'}
            </P>
    },
    {
        id: 'icon2',
        icon: <i className="fa-regular fa-comment" />,
        head: ' Chats with others',
        text:
            <UL className="d-flex flex-column gap-2 accordions-content simple-list">
                <LI>{'You get the same features in Chat and Chat in Gmail, but the integrated Gmail experience provides a central location to communicate with friends, family, or coworkers between emails.'}</LI>
                <LI> <strong>{'Chat: '}</strong> {"Use when you prefer a dedicated chat experience and don't mind switching between different apps."}</LI>
            </UL>
    },
    {
        id: 'icon3',
        icon: <i className="fa-regular fa-square-check" />,
        head: ' Right way to code ',
        text:
            <UL className="d-flex flex-column gap-2 accordions-content simple-list align-items-start">
                <LI>{"1) Decide on the indentation and keep it that way."}</LI>
                <LI>{"2) Make comments."}</LI>
                <LI>{"3) Consistent name scheme."}</LI>
                <LI>{"4) Don't repeat code."}</LI>
                <LI>{"5) Avoid writing long code lines."}</LI>
                <LI>{"6) Break down a big task into smaller chunks."}</LI>
                <LI>{"7) Organize your program into smaller files."}</LI>
                <LI>{"8) Write clever code that is also readable."}</LI>
            </UL>
    }
];

export const outlineData = [
    {
        id: 'outline1',
        head: 'What do web designers do?',
        text:
            <P>
                {'Web design'}<em className="text-danger"> {'identifies the goals'}</em> {'of a website or webpage and promotes accessibility for all potential users. This process involves organizing content and images across a series of pages and integrating applications and other interactive elements.'}
            </P>
    },
    {
        id: 'outline2',
        head: 'What is the use of web design?',
        text:
            <UL className="d-flex flex-column gap-2 accordions-content simple-list">
                <LI><strong> {'Search engine optimization:'} </strong>{"Search engine optimization (SEO) is a method for improving the chances for a website to be found by search engines. Web design codes information in a way that search engines can read it. It can boost business because the site shows up on the top search result pages, helping people to find it."}</LI>
                <LI><strong> {'Mobile responsiveness:'}</strong> {"Mobile responsiveness is the feature of a website that allows it to display on a mobile device and adapt its layout and proportions to be legible. Web design ensures sites are easy to view and navigate from mobile devices. When a website is well-designed and mobile-responsive, customers can reach the business with ease."}</LI>
                <LI> <strong> {'Improved sales:'}</strong>{"Increasing the number of items sold or acquiring more active customers are objectives of a compelling website. As web design reaches targeted customers and search engines, it helps the business make conversions on their site and improve its sales."}</LI>
            </UL>
    },
    {
        id: 'outline3',
        head: 'What are the elements of web design?',
        text:
            <UL className="d-flex flex-column gap-2 accordions-content simple-list align-items-start">
                <LI> {'The web design process allows designers to adjust to any preferences and provide effective solutions. There are many standard components of every web design, including:'}</LI>
                <LI>{'--> Layout'}</LI>
                <LI>{'--> Images'}</LI>
                <LI>{'--> Visual hierarchy'}</LI>
                <LI>{'--> Color scheme'}</LI>
                <LI>{'--> Typography'}</LI>
                <LI>{'--> Navigation'}</LI>
                <LI>{'--> Readability'}</LI>
                <LI>{'--> Content'}</LI>
            </UL>
    }
];

export const simpleDemoItem = [
    {id: 1, strongText: 'Search engine optimization:', text: 'Search engine optimization (SEO) is a method for improving the chances for a website to be found by search engines. Web design codes information in a way that search engines can read it. It can boost business because the site shows up on the top search result pages, helping people to find it.'},
    {id: 2, strongText: 'Mobile responsiveness:', text: 'Mobile responsiveness is the feature of a website that allows it to display on a mobile device and adapt its layout and proportions to be legible. Web design ensures sites are easy to view and navigate from mobile devices. When a website is well-designed and mobile-responsive, customers can reach the business with ease.'},
    {id: 1, strongText: 'Improved sales:', text: 'Increasing the number of items sold or acquiring more active customers are objectives of a compelling website. As web design reaches targeted customers and search engines, it helps the business make conversions on their site and improve its sales.'},
]