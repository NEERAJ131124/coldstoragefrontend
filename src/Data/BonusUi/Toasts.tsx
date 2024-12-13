import { Bell, Disc } from "react-feather";

export const liveToastSubTitle = [
    {
        text: 'Use the',
        code: ' .hide '
    },
    {
        text: 'class through hide toast and ',
        code: '.show '
    },
    {
        text: 'class through visible toast and given directions. ',
        code: '[top-0/bottom-0/start-0/end-0]'
    }
];

export const colorsSchemeSubTitle = [
    {
        text: 'Use the',
        code: ' .hide '
    },
    {
        text: 'class through hide toast and ',
        code: '.show '
    },
    {
        text: 'class through visible toast. ',
    }
];

export const stackingToastsSubTitle = [
    {
        text: 'You can stack toasts by wrapping them in a toast container, which will vertically add some spacing.',
        code: ' [toast-*] '
    },
    {
        text: 'through change icons colors.',
    },
];

export const translucentToastSubTitle = [
    {
        text: 'Use the',
        code: ' .hide '
    },
    {
        text: 'class through hide toast and ',
        code: '.show '
    },
    {
        text: 'class through visible toast and given directions. ',
        code: '[toast-*]'
    },
    {
        text: 'through change icons colors.'
    }
];

export const toastPlacementSubTitle = [
    {
        text: 'Use the',
        code: ' .hide '
    },
    {
        text: 'class through hide toast and ',
        code: '.show '
    },
    {
        text: 'class through visible toast. ',
        code: '.form-select'
    },
    {
        text: ' through select any positions.'
    }
]

export const stackingToastsData = [
    { id: 2, icon: <Bell className="toast-icons toast-warning" />, strongText: 'Roxo theme', smallText: '2 sec ago', bodyText: "Hello, I'm a UX-designer." },
    { id: 3, icon: <Bell className="toast-icons toast-danger" />, strongText: 'Zeta theme', smallText: '6 min ago', bodyText: "Hello, I'm a Software developer." },
    { id: 4, icon: <Bell className="toast-icons toast-success" />, strongText: 'Voxo theme', smallText: '3 sec ago', bodyText: "Hello, I'm a professional web-designer." },
];

export const translucentToastsData = [
    { id: 2, icon: <Disc className="toast-icons toast-dark" />, strongText: 'Koho theme', smallClass: 'muted', smallText: '1 sec ago', bodyText: "Hello, I'm a full-stack developer." },
    { id: 3, icon: <Disc className="toast-icons toast-secondary" />, strongText: 'Fastkart theme', smallClass: 'danger', smallText: 'just now', bodyText: "Hello, I'm a UX-designer." },
    { id: 4, icon: <Disc className="toast-icons toast-success" />, strongText: 'Oslo theme', smallClass: 'muted', smallText: '44 min ago', bodyText: "Hello, I'm a penetration-tester." },
];

export const toastPlacementOptions = [
    { value: '', label: 'Select a position...' },
    { value: 'top-0 start-0', label: 'Top left' },
    { value: 'top-0 start-50 translate-middle-x', label: 'Top center' },
    { value: 'top-0 end-0', label: 'Top right' },
    { value: 'top-50 start-0 translate-middle-y', label: 'Middle left' },
    { value: 'top-50 start-50 translate-middle', label: 'Middle center' },
    { value: 'top-50 end-0 translate-middle-y', label: 'Middle right' },
    { value: 'bottom-0 start-0', label: 'Bottom left' },
    { value: 'bottom-0 start-50 translate-middle-x', label: 'Bottom center' },
    { value: 'bottom-0 end-0', label: 'Bottom right' },
];