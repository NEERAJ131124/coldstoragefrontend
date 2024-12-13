import { CalendarItemType, CustomSwitchDataItem, IconsUncheckedBordersSwitchProp, ReactstrapCalendarItem } from "../../../Types/Forms.type";

export const reactstrapCalendarData: ReactstrapCalendarItem[] = [
    {
        id: 1,
        labelText: 'Date and time',
        type: CalendarItemType.DateTimeLocal,
        value: '2024-05-03T18:45:00',
    },
    {
        id: 2,
        labelText: 'Date',
        type: CalendarItemType.Date,
        value: '2024-05-01',
    },
    {
        id: 3,
        labelText: 'Month',
        type: CalendarItemType.Month,
        value: '2024-01',
    },
    {
        id: 4,
        labelText: 'Week',
        type: CalendarItemType.Week,
        value: '2024-W09',
    },
    {
        id: 5,
        labelText: 'Time',
        type: CalendarItemType.Time,
        value: '21:45:00',
    },
];

//touchspin
export const touchspinSubTitle = [
    {
        text: "Use the",
        code: ".decrement-touchspin ",
    },
    {
        text: "and",
        code: ".increment-touchspin ",
    },
    { text: "class." },
];

export const defaultTouchspinData = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark',]

//switch
export const customSwitchSubTitle = [
    {
        text: "A switch has the markup of a custom checkbox but uses the .form-switch class to render a ",
        code: "toggle switch",
    },
    {
        text: ".",
    },
];

const iconsSwitchSubTitle = [
    {
        text: "Use the",
        code: ".switch-state ",
    },
    {
        text: "and",
        code: "icon-state ",
    },
    {
        text: "through defined icons switches.",
    },
];

const unCheckedSwitchSubTitle = [
    {
        text: "Use the",
        code: ".bg-*",
    },
    {
        text: "class through created default switches.",
    },
];

const bordersWithIconsSubTitle = [
    {
        text: "Use the",
        code: ".switch-outline ",
    },
    {
        text: "and",
        code: ".icon-state",
    },
    { text: "class through created outline and icons. " },
];


export const disabledOutlineSwitchSubTitle = [
    {
        text: "Use the",
        code: ".switch-outline ",
    },
    {
        text: "class through created outline. ",
    },
];

export const variationOfSwitchSubTitle = [
    {
        text: "Use the",
        code: ".tgl-skewed/tgl-flip",
    },
    {
        text: " class through created variations. ",
    },
];

export const switchSizingHeadingSubTitle = [
    {
        text: "Use the",
        code: ".switch-sm",
    },
    {
        text: "and",
        code: ".switch-lg ",
    },
    { text: "class through defined switch sizing." },
];

export const switchSizingWithIconsHeadingSubTitle = [
    {
        text: "Use the",
        code: ".icon-state ",
    },
    {
        text: "class through visible icons in switches.",
    },
];

export const customSwitchData: CustomSwitchDataItem[] = [
    {
        id: 1,
        cardClass: '',
        formsize: '',
        child: [
            { id: 1, color: 'primary' },
            { id: 2, color: 'secondary' },
            { id: 3, color: 'success' },
            { id: 4, color: 'danger' },
            { id: 5, color: 'warning' },
            { id: 6, color: 'info' },
            { id: 7, color: 'dark' },
        ]
    },
    {
        id: 2,
        cardClass: 'radius-none',
        formsize: 'default-square',
        child: [
            { id: 1, color: 'primary' },
            { id: 2, color: 'secondary' },
            { id: 3, color: 'success' },
            { id: 4, color: 'danger' },
            { id: 5, color: 'warning' },
            { id: 6, color: 'info' },
            { id: 7, color: 'dark' },
        ]
    },
    {
        id: 3,
        cardClass: 'common-flex',
        formsize: '',
        child: [
            { id: 1, color: 'primary', disabled: 'disabled' },
            { id: 2, color: 'secondary', disabled: 'disabled' },
            { id: 3, color: 'success', disabled: 'disabled' },
            { id: 4, color: 'danger', disabled: 'disabled' },
            { id: 5, color: 'warning', disabled: 'disabled' },
            { id: 6, color: 'info', disabled: 'disabled' },
            { id: 7, color: 'dark', disabled: 'disabled' },
        ]
    },
];

export const iconsUncheckedBordersSwitchData: IconsUncheckedBordersSwitchProp[] = [
    {
        id: 1,
        title: 'Icons Switch',
        subTitle: iconsSwitchSubTitle,
        child: [
            {
                id: 1,
                mediaBodyClass: 'icon-state',
                color: 'primary',
                labelText: 'Primary Switch',
            },
            {
                id: 2,
                mediaBodyClass: 'icon-state',
                color: 'secondary',
                labelText: 'Secondary Switch',
            },
            {
                id: 3,
                mediaBodyClass: 'icon-state',
                color: 'success',
                labelText: 'Success Switch',
            },
            {
                id: 4,
                mediaBodyClass: 'icon-state',
                color: 'danger',
                labelText: 'Danger Switch',
            },
            {
                id: 5,
                mediaBodyClass: 'icon-state',
                color: 'warning',
                labelText: 'Warning Switch',
            },
            {
                id: 6,
                mediaBodyClass: 'icon-state',
                color: 'info',
                labelText: 'Info Switch',
            },
            {
                id: 7,
                mediaBodyClass: 'icon-state',
                color: 'dark',
                labelText: 'Dark Switch',
            }
        ]
    },
    {
        id: 2,
        title: 'Unchecked Switch',
        subTitle: unCheckedSwitchSubTitle,
        child: [
            {
                id: 1,
                color: 'primary',
                labelText: 'Unchecked Primary Switch',
            },
            {
                id: 2,
                color: 'secondary',
                labelText: 'Unchecked Secondary Switch',
            },
            {
                id: 3,
                color: 'success',
                labelText: 'Unchecked Success Switch',
            },
            {
                id: 4,
                color: 'danger',
                labelText: 'Unchecked Danger Switch',
            },
            {
                id: 5,
                color: 'warning',
                labelText: 'Unchecked Warning Switch',
            },
            {
                id: 6,
                color: 'info',
                labelText: 'Unchecked Info Switch',
            },
            {
                id: 7,
                color: 'dark',
                labelText: 'Unchecked Dark Switch',
            }
        ]
    },
    {
        id: 3,
        title: 'Borders with Icons',
        subTitle: bordersWithIconsSubTitle,
        child: [
            {
                id: 1,
                mediaBodyClass: 'icon-state switch-outline',
                color: 'primary',
                labelText: 'Bordered Primary Switch',
            },
            {
                id: 2,
                mediaBodyClass: 'icon-state switch-outline',
                color: 'secondary',
                labelText: 'Bordered Secondary Switch',
            },
            {
                id: 3,
                mediaBodyClass: 'icon-state switch-outline',
                color: 'success',
                labelText: 'Bordered Success Switch',
            },
            {
                id: 4,
                mediaBodyClass: 'icon-state switch-outline',
                color: 'danger',
                labelText: 'Bordered Danger Switch',
            },
            {
                id: 5,
                mediaBodyClass: 'icon-state switch-outline',
                color: 'warning',
                labelText: 'Bordered Warning Switch',
            },
            {
                id: 6,
                mediaBodyClass: 'icon-state switch-outline',
                color: 'info',
                labelText: 'Bordered Info Switch',
            },
            {
                id: 7,
                mediaBodyClass: 'icon-state switch-outline',
                color: 'dark',
                labelText: 'Bordered Dark Switch',
            }
        ]
    },
];

export const variationSwitchesData1 = [
    {
        id: 1,
        class: 'skewed',
        on: 'ON',
        off: 'OFF',
        text: 'Skewed'
    },
    {
        id: 2,
        class: 'flip',
        on: 'Yeah!',
        off: 'Nope',
        text: 'Flip'
    }
];
export const variationSwitchesData2 = [
    {
        id: 1,
        color: 'warning',
        text: 'Checked'
    },
    {
        id: 2,
        color: 'success',
        text: 'Flat'
    }
];

const switchSizingSubTitle = [
    {
        text: "Use the",
        code: ".switch-sm",
    },
    {
        text: " and ",
        code: ".switch-lg ",
    },
    { text: "class through defined switch sizing." },
];

const switchSizingWithIconsSubTitle = [
    {
        text: "Use the",
        code: ".icon-state ",
    },
    {
        text: "class through visible icons in switches.",
    },
];

export const switchSizingIconsData = [
    {
        id: 1,
        title: 'Switch Sizing',
        bodyClass: 'switch-size',
        subTitle: switchSizingSubTitle,
        child: [
            {
                id: 1,
                labelText: 'Small Size',
                size: 'sm',
                check: 'checked',
            },
            {
                id: 2,
                labelText: 'Small Size Unchecked',
                size: 'sm',
            },
            {
                id: 3,
                labelText: 'Normal Size',
                check: 'checked',
            },
            {
                id: 4,
                labelText: 'Normal Unchecked',
            },
            {
                id: 5,
                labelText: 'Disabled State',
                disabled: 'disabled',
            },
            {
                id: 6,
                labelText: 'Large Size',
                size: 'lg',
                check: 'checked',
            },
            {
                id: 7,
                labelText: 'Large Unchecked',
                size: 'lg',
            },
            {
                id: 8,
                labelText: 'Disabled',
                size: 'lg',
                disabled: 'disabled',
            },
        ]
    },
    {
        id: 2,
        title: 'Switch with Icons',
        subTitle: switchSizingWithIconsSubTitle,
        bodyClass: 'icon-switch',
        child: [
            {
                id: 1,
                labelText: 'Small Size',
                size: 'sm icon-state',
                check: 'checked',
            },
            {
                id: 2,
                labelText: 'Small Size Unchecked',
                size: 'sm icon-state',
            },
            {
                id: 3,
                labelText: 'Normal Size',
                size: 'icon-state',
                check: 'checked',
            },
            {
                id: 4,
                labelText: 'Normal Unchecked',
                size: 'icon-state',
            },
            {
                id: 5,
                labelText: 'Disabled With Icon',
                size: 'icon-state',
                disabled: 'disabled',
            },
            {
                id: 6,
                labelText: 'Large Size',
                size: 'lg icon-state',
                check: 'checked',
            },
            {
                id: 7,
                labelText: 'Large Unchecked',
                size: 'lg icon-state',
            },
            {
                id: 8,
                labelText: 'Disabled',
                size: 'lg icon-state',
                disabled: 'disabled',
            },
        ]
    }
];