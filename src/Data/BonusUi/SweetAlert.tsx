import { AlertOptions } from "../../Types/BonusUi.type";

export const basicAlertSubTitle = [{ text: 'Print the basic message.' }];

export const titleWithTextSubTitle = [{ text: 'Print the title with text.' }];

export const infoAlertSubTitle = [{ text: 'Print the informational message.' }]

export const warningAlertSubTitle = [{ text: 'Warning for imaginary files.' }];

export const pikachuAlertSubTitle = [{ text: 'catch the pokeball.' }];

export const questionAlertSubTitle = [{ text: 'Print the questionary and give answers.' }];

export const userNameAlertSubTitle = [{ text: 'Print the basic sweet-alert' }];

export const successMessageSubTitle = [
    { text: 'Print the success message.' }
];

export const dangerAlertSubTitle = [
    { text: 'Print the danger message.' }
];

export const alertOptions: AlertOptions = {
    success: { icon: 'success' },
    question: { icon: 'question' },
    warning: { icon: 'warning', showCancelButton: true, cancelButtonColor: 'red', confirmButtonText: 'Yes, delete it!' },
};

export const uniqueOptions: AlertOptions = {
    danger: { text: 'Something went wrong!', icon: 'error', footer: 'Why do I have this issue?' },
    animate: { showConfirmButton: true },
    timer: { text: 'just a wait! I will close in 30 second!', timer: 1500, showConfirmButton: false },
};

export const advanceOptions: AlertOptions = {
    question: { showCancelButton: true, confirmButtonText: 'Save', denyButtonText: "Don't save", showDenyButton: true, denyButtonColor: 'red' },
    toast: { timer: 3000, timerProgressBar: true, icon: 'success', toast: true, animation: true, position: 'top-end', showConfirmButton: false },
};

export const directionOptions: AlertOptions = {
    error: { title: 'Something went wrong!', icon: 'error', showConfirmButton: false, timer: 1500, position: 'top-start' },
    success: { title: 'Your work has been saved!', icon: 'success', showConfirmButton: false, timer: 1500, position: 'top-end' },
    info: { text: 'You can use, Alerts and other HTML tags', icon: 'info', showConfirmButton: false, timer: 1500, position: 'bottom-start' },
    success2: { title: 'Your work has been saved!', icon: 'success', showConfirmButton: false, timer: 1500, position: 'bottom-end' },
};

export const inputOptions: AlertOptions = {
    text: { title: 'Enter your IP address', input: 'text', inputLabel: 'Your IP address', inputValue: '132.154.1.174', showCancelButton: true, },
    email: { title: 'Input email address', inputLabel: 'Your email address', input: 'email' },
    url: {
        input: 'url',
        inputLabel: 'URL address',
        inputPlaceholder: 'Enter the URL'
    },
    password: {
        title: 'Enter your password',
        input: 'password',
        inputLabel: 'Password',
        inputPlaceholder: 'Enter your password',
        inputAttributes: {
            maxlength: 10,
            autocapitalize: 'off',
            autocorrect: 'off'
        }
    },
    message: {
        input: 'textarea',
        inputLabel: 'Message',
        inputPlaceholder: 'Type your message here...',
        inputAttributes: {
            'aria-label': 'Type your message here'
        },
        showCancelButton: true
    },
    select: {
        title: 'Select field validation',
        input: 'select',
        inputOptions: {
            'Fruits': {
                apples: 'Apples',
                bananas: 'Bananas',
                grapes: 'Grapes',
                oranges: 'Oranges'
            },
            'Vegetables': {
                potato: 'Potato',
                broccoli: 'Broccoli',
                carrot: 'Carrot'
            },
            'icecream': 'Ice cream'
        },
        inputPlaceholder: 'Select a fruit',
        showCancelButton: true,
    },
    color: {
        title: 'Select color',
        input: 'radio',
        inputOptions: {
            '#ff0000': 'Red',
            '#00ff00': 'Green',
            '#0000ff': 'Blue'
        },
    },
    terms: {
        title: 'Terms and conditions',
        input: 'checkbox',
        inputValue: 1,
        inputPlaceholder:
            'I agree with the terms and conditions',
        confirmButtonText:
            'Continue <i class="fa fa-arrow-right"></i>',
    },
    range: {
        title: 'How old are you?',
        icon: 'question',
        input: 'range',
        inputLabel: 'Your age',
        inputAttributes: {
            min: 8,
            max: 120,
            step: 1
        },
        inputValue: 25
    },
};

export const inputConfirmOptions = [
    'Your IP address is:',
    'Entered email:',
    'Entered URL:',
    'Entered password:',
    '',
    'You selected:',
    'You selected:',
    'You agreed with T&C :)',
    ''
];

