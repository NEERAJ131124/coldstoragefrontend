import { StepType } from "@reactour/tour";

export const toursteps: StepType[] = [
    {
        selector: '.step1',
        content: 'This is Admiro profile',
        position: "right"
    },
    {
        selector: '.step2',
        content: 'Change Admiro profile image here',
        position: "top"

    },
    {
        selector: '.step3',
        content: 'This is your profile details',
    },
    {
        selector: '.step4',
        content: 'This is your social details',
    },
    {
        selector: '.step5',
        content: 'This is the your first Post',
    },
    {
        selector: '.step6',
        content: 'This is the your Last Post'
    },
    {
        selector: '.step7',
        content: 'This is your follower details'
    },
    {
        selector: '.step8',
        content: 'This is your profile image'
    }
];

export const tourSocialData = [
    {
        link: 'https://www.facebook.com/',
        icon: 'fa-brands fa-facebook-f'
    },
    {
        link: 'https://accounts.google.com/',
        icon: 'fa-brands fa-google-plus-g'
    },
    {
        link: 'https://twitter.com/',
        icon: 'fa-brands fa-twitter'
    },
    {
        link: 'https://www.instagram.com/',
        icon: 'fa-brands fa-instagram'
    },
    {
        link: 'https://rss.app/',
        icon: 'fa-solid fa-rss'
    }
];

export const profileLikeData = [
    {
        icon: 'heart  ',
        text: 'Like'
    },
    {
        icon: 'comment  ',
        text: 'Comment'
    },
    {
        icon: 'paper-plane  ',
        text: 'Share'
    }
]

export const thirdProfilePictures = ['mountain', 'sea']