import { CheckCircle, Info, Target } from "react-feather";
import { FacilityListDataProp } from "../../Types/Facility.type";

export const FacilityListNavList = [
    {id: 1, icon: <Target />, text: 'Facility'},
    // {id: 2, icon: <Info />, text: 'Doing'},
    // {id: 3, icon: <CheckCircle />, text: 'Done'},
]



export const allFaclityListData: FacilityListDataProp[] = [
    {
        id: 1,
        title: "Cutting-Edge Design",
        badge: "Doing",
        image: "4.jpg",
        sites: "Themeforest, australia",
        description: "Responsive Layout: The design is responsive and tablets, and mobile devices",
        issue: "12",
        resolved: "5",
        comment: "7",
        like: "10",
        progress: "70",
        customer1: "3.jpg",
        customer2: "5.jpg",
        customer3: "1.jpg"
    },
    {
        id: 2,
        title: "Customization Options",
        badge: "Done",
        image: "3.jpg",
        sites: "Envato, australia",
        description: "Consistency and Branding: The design maintains consistency , color scheme, and typography.",
        issue: "24",
        resolved: "24",
        comment: "40",
        like: "3",
        progress: "100",
        customer1: "2.jpg",
        customer2: "5.jpg",
        customer3: "1.jpg"
    },
    // {
    //     id: 3,
    //     title: "Mobile-Friendly",
    //     badge: "Done",
    //     image: "4.jpg",
    //     sites: "Envato, australia",
    //     description: "Error Handling and Feedback: The design incorporates  and feedback mechanisms.",
    //     issue: "40",
    //     resolved: "40",
    //     comment: "20",
    //     like: "2",
    //     progress: "100",
    //     customer1: "4.jpg",
    //     customer2: "5.jpg",
    //     customer3: "1.jpg"
    // },
    // {
    //     id: 4,
    //     title: "Universal admin Design",
    //     badge: "Done",
    //     image: "5.jpg",
    //     sites: "Envato, australia",
    //     description: "Customization Options: Depending on It is designed to be responsive options.",
    //     issue: "24",
    //     resolved: "24",
    //     comment: "40",
    //     like: "3",
    //     progress: "100",
    //     customer1: "6.jpg",
    //     customer2: "5.jpg",
    //     customer3: "1.jpg"
    // },
    // {
    //     id: 5,
    //     title: "Modular Structure",
    //     badge: "Doing",
    //     image: "1.jpg",
    //     sites: "Themeforest, australia",
    //     description: "Customization Options: Poco admin offers Attention is given to readability  a visually extensive.",
    //     issue: "12",
    //     resolved: "5",
    //     comment: "7",
    //     like: "10",
    //     progress: "70",
    //     customer1: "6.jpg",
    //     customer2: "5.jpg",
    //     customer3: "1.jpg"
    // },
    // {
    //     id: 6,
    //     title: "Dazzling Admin Design",
    //     badge: "Done",
    //     image: "1.jpg",
    //     sites: "Envato, australia",
    //     description: "User-friendly Navigation:Dazzling organized categories and subcategories of a sidebar menu.",
    //     issue: "40",
    //     resolved: "40",
    //     comment: "20",
    //     like: "2",
    //     progress: "100",
    //     customer1: "4.jpg",
    //     customer2: "5.jpg",
    //     customer3: "1.jpg"
    // }
]