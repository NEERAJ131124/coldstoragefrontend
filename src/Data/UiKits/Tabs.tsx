import { CardBody, Form, FormGroup, Input, Label, Table } from "reactstrap";
import { H6, Image, LI, P, UL } from "../../AbstractElements";
import { dynamicImage } from "../../Utils";

export const justifyTabSubTitle = [
    {
        text: 'To set the justify-tabs use the ',
        code: 'justify-content-*'
    },
    {
        text: ' class.'
    }
];

export const materialLeftSubTitle = [
    {
        text: 'To set the ',
        code: '.nav-effect '
    },
    {
        text: 'class.'
    }
];

export const materialStyleSubTitle = [
    {
        text: 'To set color use the ',
        code: 'nav-color '
    },
    {
        text: 'class with ',
        code: 'nav-border '
    },
    {
        text: 'class.'
    }
];

export const borderTabsSubTitle = [
    {
        text: 'To set ',
        code: 'icon '
    },
    {
        text: '& ',
        code: '.nav-border '
    },
    {
        text: 'class.'
    }
];

export const justifyTabNav = [{ id: '1', nav: 'Web designer' }, { id: '2', nav: 'UX designer' }, { id: '3', nav: 'IOT developer' }];

export const justifyTabData = [
    {
        id: '1',
        data: [
            {
                image: 'avtar/3.jpg',
                head: 'Kathy M. Anderson',
                text: ' 440-494-0729'
            },
            {
                image: 'avtar/4.jpg',
                head: 'Lillian J. Goodfellow',
                text: '239-664-7751'
            },
            {
                image: 'avtar/11.jpg',
                head: 'Mary O. Miller',
                text: '720-744-0921'
            },
            {
                image: 'avtar/16.jpg',
                head: 'Patricia H. Hummel',
                text: '314-445-1451'
            },
            {
                image: 'user/4.jpg',
                head: 'Minnie F. Evans',
                text: '718-740-8438'
            },
            {
                image: 'avtar/7.jpg',
                head: 'Carolyn A. Sutton',
                text: '218-793-6609'
            }
        ],
    },
    {
        id: '2',
        data: [
            {
                image: 'user/9.jpg',
                head: 'Thomas A. Leroy',
                text: '305-539-6871'
            },
            {
                image: 'user/12.png',
                head: 'Mark S. Ward',
                text: '303-561-8880'
            },
            {
                image: 'user/14.png',
                head: 'Emily T. Hooper',
                text: '301-553-1836'
            },
            {
                image: 'user/9.jpg',
                head: 'Jennifer A. Camacho',
                text: '770-527-7554'
            },
            {
                image: 'user/10.jpg',
                head: 'Natasha W. Watson',
                text: '267-605-4499'
            },
            {
                image: 'user/3.jpg',
                head: 'Ann J. Strickland',
                text: '469-218-4678'
            }
        ],
    },
    {
        id: '3',
        data: [
            {
                image: 'avtar/11.jpg',
                head: 'Jaclyn T. Duncan',
                text: '413-618-9222'
            },
            {
                image: 'avtar/7.jpg',
                head: 'Christine H. Lin',
                text: '909-219-0342'
            },
            {
                image: 'avtar/3.jpg',
                head: 'Ronnie S. Mountain',
                text: '978-426-9732'
            },
            {
                image: 'user/12.png',
                head: 'Louise A. Hilliard',
                text: '502-262-5600'
            },
            {
                image: 'user/10.jpg',
                head: 'Kayla Hutt',
                text: '312-456-8275'
            },
            {
                image: 'user/4.jpg',
                head: 'Amber Cecil',
                text: '802-662-2407'
            }
        ],
    },
];

export const materialLeftStyleNav = [{ id: '1', nav: 'Home' }, { id: '2', nav: 'Profile' }, { id: '3', nav: 'Inbox' }, { id: '4', nav: 'Settings' }];

export const leftTabData = [
    {
        id: '1',
        text: <P>{'This product is meant for educational purposes only. Any resemblance to real persons, living or dead is purely coincidental. Void where prohibited. Some assembly required. List each check separately by bank number. Batteries not included.Google Web Designer gives you the power to create beautiful and compelling videos, images and HTML5 ads. Use animation and interactive elements to build out your creative vision, then scale your content for different sizes or audiences with responsive and dynamic workflows.'}</P>
    },
    {
        id: '2',
        text: <>
            <P className="mb-0" />
            <div className="flex-space flex-wrap align-items-center">
                <Image className="tab-image" src={dynamicImage(`user/12.png`)} alt="profile" />
                <UL className="d-flex flex-column gap-1 simple-list align-items-start">
                    <LI> <strong>{'Name: '}</strong> {'Jully Catlin'}</LI>
                    <LI><strong>{'Visit Us: '}</strong> {'50006 Ehrenberg/Parker,Arkansas-85334'}</LI>
                    <LI><strong>{'Mail Us: '}</strong> {'hello.@gmail.com'}</LI>
                    <LI><strong>{'Contact Number: '}</strong> {'(928) 923-7940'}</LI>
                </UL>
            </div>
        </>
    },
    {
        id: '3',
        text:
            <CardBody className="p-0">
                <div className="main-inbox">
                    <div className="header-inbox justify-content-start gap-2">
                        <div className="header-left-inbox">
                            <div className="inbox-img">
                                <Image src={dynamicImage(`user/10.jpg`)} alt="profile" />
                            </div>
                            <div className="inbox-content">
                                <H6>{'Dalbult Caslin '}</H6>
                                <P className="text-muted">{'stroman.rogers@gmail.com'}</P>
                            </div>
                        </div>
                    </div>
                    <div className="body-inbox mt-2">
                        <div className="body-h-wrapper">
                            <i className="me-2 tab-space iconly-Star icbo" />
                            <em>{'Compare Prices Find the Best Computer Assessors Fronted Issue.'}</em>
                        </div>
                        <P className="pt-2">{'Site speed and design are two of the most important ranking factors Google takes into consideration, as they have the biggest effect of customer staying on site as the website respond faster.'}</P>
                    </div>
                </div>
            </CardBody>
    },
    {
        id: '4',
        text:
            <P>
                <strong> {'In this situation, you would probably do two things: '}</strong>
                {" exit the page, or look for the trusty search bar. If you decide to stick around, a proper search function should take your query and send you to your destination. Problem solved. It's not a perfect experience, but it's a hard one to avoid on larger websites that simply can't link to every piece of content from the homepage."}
            </P>
    }
];

export const materialStyleNav = [
    {
        id: '1',
        icon: <i className="iconly-Profile icli" />,
        text: 'User'
    },
    {
        id: '2',
        icon: <i className="iconly-Document icli" />,
        text: 'Description'
    },
    {
        id: '3',
        icon: <i className="iconly-Star icli" />,
        text: 'Review'
    }
];

export const materialData = [
    {
        id: '1',
        text: <CardBody className=" px-0 pb-0">
            <div className="user-header pb-2">
                <H6 className="fw-bold">User Details:</H6>
            </div>
            <div className="user-content">
                <div className="table-responsive">
                    <Table className="mb-0">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Country</th>
                                <th scope="col">Contact No</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Neha</td>
                                <td>India </td>
                                <td>5698741236</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacklin</td>
                                <td>Thailand</td>
                                <td>7800030320</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </CardBody>
    },
    {
        id: '2',
        text:
            <CardBody className=" px-0 pb-0">
                <div className="user-header pb-2">
                    <H6 className="fw-bold">Description:</H6>
                </div>
                <div className="user-content">
                    <div className="table-responsive">
                        <Table className="mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">Technology</th>
                                    <th scope="col">Interest </th>
                                    <th scope="col">Salary Expected </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Web Designer</td>
                                    <td>HTML,CSS,JS,SCSS</td>
                                    <td>45000</td>
                                </tr>
                                <tr>
                                    <td>UX Designer</td>
                                    <td>Figma,Photoshop,craft</td>
                                    <td>20000</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </CardBody>
    },
    {
        id: '3',
        text:
            <CardBody className="px-0 pb-0">
                <div className="user-header pb-2">
                    <H6 className="fw-bold">Review:</H6>
                </div>
                <div className="user-content">
                    <div className="table-responsive">
                        <Table className="mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Rating </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Neha</td>
                                    <td>India </td>
                                    <td>
                                        <i className="iconly-Star icbo" /><i className="iconly-Star icbo" /> <i className="iconly-Star icbo" /> <i className="iconly-Star icbo" /> <i className="iconly-Star icbo" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Irfan</td>
                                    <td>India</td>
                                    <td>
                                        <i className="iconly-Star icbo" /><i className="iconly-Star icbo" /><i className="iconly-Star icbo" />
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </CardBody>

    }
];

export const borderTabsNav = [
    {
        id: '1',
        icon: <i className="iconly-Home icli" />,
        text: 'Home'
    },
    {
        id: '2',
        icon: <i className="iconly-Message icli" />,
        text: 'Inbox'
    },
    {
        id: '3',
        icon: <i className="iconly-Call icli" />,
        text: 'Contact'
    },
];

export const borderData = [
    {
        id: '1',
        text:
            <P className="pt-3">
                {'A navigation bar is a particularly important feature because it allows visitors to quickly and easily find '}<em className="text-danger">{'important pages on your website,'}</em>{' like your blog, product pages, pricing, contact info, and documentation. This improves the chances of visitors browsing your site longer, which can boost your page views and reduce your bounce rate.Create product Builder tool is also pre-bundled in this template so that you can let the audience configure the product by themselves before placing the order.'}
            </P>
    },
    {
        id: '2',
        text: <CardBody className=" pb-0">
            <div className="main-inbox">
                <div className="header-inbox">
                    <div className="header-left-inbox">
                        <div className="inbox-img">
                            <Image src={dynamicImage(`user/6.jpg`)} alt="profile" />
                        </div>
                        <div className="inbox-content">
                            <H6>{'Dalbult Caslin '}</H6>
                            <P className="text-muted">{'stroman.rogers@gmail.com'}</P>
                        </div>
                    </div>
                    <UL className="header-right-inbox simple-list flex-row">
                        <LI>
                            <P>{'8 JAN 11:30PM'}</P>
                        </LI>
                        <LI className='text-danger'><i className="iconly-Delete icli" /></LI>
                    </UL>
                </div>
                <div className="body-inbox mt-2">
                    <div className="body-h-wrapper">
                        <i className="iconly-Star icbo" />
                        <em>{'Compare Prices Find the Best Computer Assessors Fronted Issue.'}</em>
                    </div>
                    <P className="pt-2">
                        {'Site speed and design are two of the most important ranking factors Google takes into consideration, as they have the biggest effect of customer staying on site as the website respond faster.'}
                    </P>
                </div>
            </div>
        </CardBody>
    },
    {
        id: '3',
        text:
            <CardBody className="px-0 pb-0">
                <Form>
                    <FormGroup>
                        <Label htmlFor="exampleFormControltwo">{'Email address'}</Label>
                        <Input id="exampleFormControltwo" type="email" placeholder="youremail@gmail.com" />
                    </FormGroup>
                    <div className="mb-0">
                        <Label htmlFor="exampleFormControlTextarea1">{'Example textarea'}</Label>
                        <Input type="textarea" id="exampleFormControlTextarea1" rows={3} />
                    </div>
                </Form>
            </CardBody>

    }
];

export const simpleTabSubTitle = [
    {
        text: 'Use the ',
        code: '.nav-link'
    },
    {
        text: ' with ',
        code: '.active '
    },
    {
        text: 'class to jump particular tabs.'
    }
];

export const iconTabsSubTitle = [
    {
        text: 'Add icons with tabs using ',
        code: '.nav-link '
    },
    {
        text: 'class.'
    }
];

export const verticalTabSubTitle = [
    {
        text: 'Set the vertical tab with help of ',
        code: 'flex-column'
    },
    {
        text: ' class.'
    }
];

export const pillsTabSubTitle = [
    {
        text: 'To set pills-tabs, use the ',
        code: 'nav & nav-pills'
    },
    {
        text: ' class.'
    }
];

export const simpleTabNav = [{ id: '1', nav: 'Home' }, { id: '2', nav: 'Profile' }, { id: '3', nav: 'Contact' }];

export const simpleTabData = [
    {
        id: '1',
        text:
            <P className="pt-3">{"Tabs have long been used to show alternative views of the same group of information tabs in software. Known as "}<em className="text-danger">{" “module tabs”"}</em>{", these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire."}</P>
    },
    {
        id: '2',
        text:
            <div className="flex-space flex-wrap align-items-center mt-4">
                <Image className="tab-image" src={dynamicImage(`avtar/3.jpg`)} alt="profile" />
                <UL className="d-flex flex-column gap-1 simple-list align-items-start">
                    <LI><strong>{'Visit Us:'}</strong> {' 2600 Hollywood Blvd, Florida, United States-33020'}</LI>
                    <LI><strong>{'Mail Us:'}</strong> {' contact@us@gmail.com'}</LI>
                    <LI><strong>{'Contact Number:'}</strong> {' (954) 357-7760'}</LI>
                </UL>
            </div>
    },
    {
        id: '3',
        text:
            <UL className="pt-3 d-flex flex-column gap-1 simple-list align-items-start">
                <LI>{"Us Technology offers web & mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them."}</LI>
                <LI><strong>{'Visit Us: '}</strong> {'2600 Hollywood Blvd,Florida, United States-	33020'}</LI>
                <LI><strong>{'Mail Us: '}</strong> {'contact@us@gmail.com'}</LI>
                <LI><strong>{'Contact Number: '}</strong> {'(954) 357-7760'}</LI>
            </UL>
    }
];

export const iconTabsNav = [
    {
        id: '1',
        icon: <i className="iconly-Home icli me-0" />,
        text: 'Home'
    },
    {
        id: '2',
        icon: <i className="iconly-Profile icli" />,
        text: 'Profile'
    },
    {
        id: '3',
        icon: <i className="iconly-Call icli" />,
        text: 'Contact'
    },
];

export const tabIconData = [
    {
        id: '1',
        text:
            <P className="pt-3">
                {"Not limited to any states, boundaries. All over India providing cutting-edge design and website development services for over 12 years. We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration, Search Engine Optimization and other Internet Marketing, Renewal of Services timely and effectively."}
            </P>
    },
    {
        id: '2',
        text:
            <div className="flex-space flex-wrap align-items-center mt-4">
                <Image className="tab-image" src={dynamicImage(`avtar/7.jpg`)} alt="profile" />
                <UL className="d-flex flex-column gap-1 simple-list align-items-start">
                    <LI> <strong>{'Visit Us: '}</strong> {'278 Green Avenue Oakland, CA 94612'}</LI>
                    <LI><strong>{'Mail Us: '}</strong> {'MichaelMMcGowan@teleworm.us'}</LI>
                    <LI><strong>{'Contact Number: '}</strong> {'510-767-002'}</LI>
                </UL>
            </div>
    },
    {
        id: '3',
        text:
            <>
                <P className="pt-3 mb-0">{"Us Technology offers web & mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them."}</P>
                <div className="pt-3">
                    <Label htmlFor="exampleFormControlone">{'Email address'}</Label>
                    <Input id="exampleFormControlone" type="email" placeholder="youremail@gmail.com" />
                </div>
            </>

    }
];

export const verticalTabNav = [{ id: '1', nav: 'Home' }, { id: '2', nav: 'Components' }, { id: '3', nav: 'Pages' }, { id: '4', nav: 'Settings' }];

export const verticalTabData = [
    {
        id: '1',
        text:
            <P>{"It was an easy decision.an affordable expense! Absolutely! we got peace of mind. Now, my time is spent on the "}<em className="text-danger">“Sale”</em>{" and not on technology. Create product Builder tool is also pre-bundled in this template so that you can let the audience configure the product by themselves before placing the order.We are a small yet highly-skilled group of creative brains with a vast experience. Our team of web designers, online marketing experts, content writers, graphic professionals have completed numerous projects."}</P>
    },
    {
        id: '2',
        text:
            <UL className="d-flex flex-column gap-1 simple-list align-items-start">
                <LI>{"If you are a business owner, your website is absolutely one of the most important tools you have in your arsenal to get more - and better - clients and customers or a good one from a great one? Here are 10 qualities that a great website will need. Whether or not you end up retaining makespace based web designers, you should find them helpful:"}</LI>
                <LI>{'--> Navigation'}</LI>
                <LI>{'--> Visual Design'}</LI>
                <LI>{'--> Web Friendly'}</LI>
                <LI>{'--> Conversion'}</LI>
            </UL>
    },
    {
        id: '3',
        text:
            <UL className="d-flex flex-column gap-1 simple-list align-items-start">
                <LI>{'Available pages in Theme:'}</LI>
                <LI><strong>{'Typography: '}</strong>{'Typography is the art of arranging letters and text in a way that makes the copy legible, clear, and visually appealing to the reader.'}</LI>
                <LI><strong>{'Tooltip: '}</strong>{"A tooltip is a brief, informative message that appears when a user interacts with an element in a graphical user interface (GUI)."}</LI>
            </UL>
    },
    {
        id: '4',
        text:
            <UL className="d-flex flex-column gap-1 p-sm-0 pt-2 simple-list">
                <LI><strong> {'Site purpose '}</strong>{"Like a mission statement, a website's purpose gives the primary reason for the site's existence in the world. Whether for education, advocacy, service provision, community organizing, etc."}</LI>
                <LI><strong> {'Features '}</strong>{"It's important to figure out as many of these in advance as you can for the sake of a more coherent design."} </LI>
            </UL>
    }
];

export const pillsTabNav = [{ id: '1', nav: 'About us' }, { id: '2', nav: 'Contact us' }, { id: '3', nav: 'Blog' }];

export const pillTabData = [
    {
        id: '1',
        text:
            <P className="pt-3">
                {"The ultimate goal of every web design is to create a site that will reach its audience and be useful to them. In order to achieve that, it is necessary to befriend Google's mechanisms and algorithms. There is no use of a pretty website, if it's displayed on a 10th page of search results, because this way no one will ever find it. That brings us to the topic of Google's Website Ranking.Generally speaking, it's a list of pages and their keywords, sorted in the order of search results. The higher your place in the ranking is, the more people are likely to see your page."}
            </P>

    },
    {
        id: '2',
        text:
            <UL className="d-flex flex-column gap-1 pt-3 simple-list align-items-start">
                <LI> {'Create professional web page design. Responsive, fully customizable with easy Drag-n-Drop Nicepage editor. Adjust colors, fonts, header and footer, layout and other design elements, as well as content and images.'}</LI>
                <LI><strong>{'Visit Us: '}</strong> {'4 Marigold Close, Glenmore Park, New South Wales, 2745 Australia- 2745'}</LI>
                <LI> <strong>{'Mail Us: '}</strong> {'SamuelMario@armyspy.com'}</LI>
                <LI> <strong>{'Contact Number: '}</strong> {'(02) 4733 6337'}</LI>
            </UL>
    },
    {
        id: '3',
        text:
            <div className="pt-3 d-flex align-items-center gap-3 pills-blogger">
                <div className="blog-wrapper">
                    <Image className="blog-img" src={dynamicImage(`dashboard-2/3.png`)} alt="head-phone" />
                </div>
                <div className="blog-content">
                    <P><em className="text-danger fw-bold">{'Smart headphones'}</em> {' — also called smart earbuds or hearable — are high-tech in-ear devices that do more than transmit audio. These headphones are usually wireless, and they can sync up with your phone, tablet, computer or other Bluetooth-enabled device. The main appeal of hearables is convenience, as they allow you to complete common tasks without directly accessing your phone or computer. Smart wireless headphones sync up to other devices using Bluetooth technology, and many of their features rely on data from your smartphone or computer.'}</P>
                </div>
            </div>

    }
]