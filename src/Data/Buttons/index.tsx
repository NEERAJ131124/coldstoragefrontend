import { ButtonGroupProps, CommonButtonsDataType } from "../../Types/Buttons.type";

export const defaultButtonsSubTitle = [
    {
        text: 'Bootstrap state buttons'
    }
];

export const flatButtonsSubTitle = [
    {
        text: 'Add',
        code: ' .btn-square '
    },
    {
        text: 'class for flat button'
    }
];

export const edgeButtonsSubTitle = [
    {
        text: 'Add',
        code: ' .btn-pill '
    },
    {
        text: 'class for edge button'
    }
];

export const largeButtonsSubTitle = [
    {
        text: 'Add',
        code: ' .btn-lg '
    },
    {
        text: 'class for large size buttons'
    }
];

export const smallButtonsSubTitle = [
    {
        text: 'Add',
        code: ' .btn-sm '
    },
    {
        text: 'class for small size buttons'
    }
];

export const activeButtonsSubTitle = [
    {
        text: 'Add',
        code: ' .active '
    },
    {
        text: 'class for active state.'
    }
];

export const disabledButtonsSubTitle = [
    {
        text: 'Add',
        code: ' .disabled '
    },
    {
        text: 'class or',
        code: ' disabled="disabled" '
    },
    {
        text: 'attribute for disabled button'
    }
];

export const outlineButtonsSubTitle = [
    {
        text: 'Add',
        code: ' .btn-outline-* '
    },
    {
        text: 'class for border button'
    }
];

export const boldButtonsSubTitle = [
    {
        text: 'Add',
        code: ' .btn-outline-*-2x '
    },
    {
        text: 'class for bold outline.'
    }
];

export const defaultButtonsData: CommonButtonsDataType[] = [
    {
        color: "primary",
        title: "Primary Button",
        toolTipText: 'btn btn-primary',
        id: "default1",
    },
    {
        color: "secondary",
        toolTipText: 'btn btn-secondary',
        id: "default2",
        title: "Secondary Button",
    },
    {
        color: "info",
        btnClass: "text-light",
        toolTipText: 'btn btn-info',
        id: "default3",
        title: "Info Button",
    },
    {
        color: "success",
        toolTipText: 'btn btn-success',
        id: "default4",
        title: "Success Button",
    },
    {
        toolTipText: 'btn btn-warning',
        id: "default5",
        color: "warning",
        btnClass: "text-light",
        title: "Warning Button",
    },
    {
        toolTipText: 'btn btn-danger',
        id: "default6",
        color: "danger",
        title: "Danger Button",
    },
    {
        color: "light",
        btnClass: "text-dark",
        toolTipText: 'btn btn-light',
        id: "default7",
        title: "Light Button",
    }
];

export const flatButtonsData: CommonButtonsDataType[] = [
    {
        color: "primary",
        title: "Primary Button",
        btnClass: 'btn-square',
        toolTipText: 'btn btn-square  btn-primary',
        id: "flat1",
    },
    {
        color: "secondary",
        toolTipText: 'btn btn-square btn-secondary',
        btnClass: 'btn-square',
        id: "flat2",
        title: "Secondary Button",
    },
    {
        color: "success",
        toolTipText: 'btn btn-square btn-success',
        btnClass: 'btn-square',
        id: "flat3",
        title: "Success Button",
    },
    {
        color: "info",
        btnClass: "text-white btn-square",
        toolTipText: 'btn btn-square btn-info',
        id: "flat4",
        title: "Info Button",
    },
    {
        toolTipText: 'btn btn-square btn-warning',
        id: "flat5",
        color: "warning",
        btnClass: "text-white btn-square",
        title: "Warning Button",
    },
    {
        toolTipText: 'btn btn-square btn-danger',
        id: "flat6",
        color: "danger",
        btnClass: 'btn-square',
        title: "Danger Button",
    },
    {
        color: "light",
        btnClass: "text-dark btn-square",
        toolTipText: 'btn btn-square btn-light',
        id: "flat7",
        title: "Light Button",
    }
];

export const edgeButtonsData: CommonButtonsDataType[] = [
    {
        color: "primary",
        title: "Primary Button",
        btnClass: 'btn-pill',
        toolTipText: 'btn btn-pill btn-primary',
        id: "edge1",
    },
    {
        color: "secondary",
        toolTipText: 'btn btn-pill btn-secondary',
        btnClass: 'btn-pill',
        id: "edge2",
        title: "Secondary Button",
    },
    {
        color: "success",
        toolTipText: 'btn btn-pill btn-success',
        btnClass: 'btn-pill',
        id: "edge3",
        title: "Success Button",
    },
    {
        color: "info",
        btnClass: "text-white btn-pill",
        toolTipText: 'btn btn-pill btn-info',
        id: "edge4",
        title: "Info Button",
    },
    {
        toolTipText: 'btn btn-pill btn-warning',
        id: "edge5",
        color: "warning",
        btnClass: "text-white btn-pill",
        title: "Warning Button",
    },
    {
        toolTipText: 'btn btn-pill btn-danger',
        id: "edge6",
        color: "danger",
        btnClass: 'btn-pill',
        title: "Danger Button",
    },
    {
        color: "light",
        btnClass: "text-dark btn-pill",
        toolTipText: 'btn btn-pill btn-light',
        id: "edge7",
        title: "Light Button",
    }
];

export const largeButtonsData: CommonButtonsDataType[] = [
    {
        color: "primary",
        size: 'lg',
        title: "Primary Button",
        toolTipText: 'btn btn-lg btn-primary',
        id: "large1",
    },
    {
        color: "secondary",
        size: 'lg',
        toolTipText: 'btn btn-lg btn-secondary',
        id: "large2",
        title: "Secondary Button",
    },
    {
        color: "info",
        size: 'lg',
        btnClass: "text-light",
        toolTipText: 'btn btn-lg btn-info',
        id: "large4",
        title: "Info Button",
    },
    {
        color: "success",
        size: 'lg',
        toolTipText: 'btn btn-lg btn-success',
        id: "large3",
        title: "Success Button",
    },
    {
        toolTipText: 'btn btn-lg btn-warning',
        size: 'lg',
        id: "large5",
        color: "warning",
        btnClass: "text-light",
        title: "Warning Button",
    },
    {
        toolTipText: 'btn btn-lg btn-danger',
        size: 'lg',
        id: "large6",
        color: "danger",
        title: "Danger Button",
    },
    {
        color: "light",
        size: 'lg',
        btnClass: "text-dark",
        toolTipText: 'btn btn-lg btn-light',
        id: "large7",
        title: "Light Button",
    }
];

export const smallButtonsData: CommonButtonsDataType[] = [
    {
        color: "primary",
        size: 'sm',
        title: "Primary Button",
        toolTipText: 'btn btn-sm btn-primary',
        id: "small1",
    },
    {
        color: "secondary",
        size: 'sm',
        toolTipText: 'btn btn-sm btn-secondary',
        id: "small2",
        title: "Secondary Button",
    },
    {
        color: "success",
        size: 'sm',
        toolTipText: 'btn btn-sm btn-success',
        id: "small3",
        title: "Success Button",
    },
    {
        color: "info",
        size: 'sm',
        btnClass: "text-light",
        toolTipText: 'btn btn-sm btn-info',
        id: "small4",
        title: "Info Button",
    },
    {
        toolTipText: 'btn btn-sm btn-warning',
        size: 'sm',
        id: "small5",
        color: "warning",
        btnClass: "text-light",
        title: "Warning Button",
    },
    {
        toolTipText: 'btn btn-sm btn-danger',
        size: 'sm',
        id: "small6",
        color: "danger",
        title: "Danger Button",
    },
    {
        color: "light",
        size: 'sm',
        btnClass: "text-dark",
        toolTipText: 'btn btn-sm btn-light',
        id: "small7",
        title: "Light Button",
    }
];

export const activeButtonsData: CommonButtonsDataType[] = [
    { id: 'active1', active: true, color: 'primary', title: 'Active', toolTipText: 'btn btn-primary active' },
    { id: 'active2', active: true, color: 'secondary', title: 'Active', toolTipText: 'btn btn-secondary active' },
    { id: 'active3', active: true, color: 'success', title: 'Active', toolTipText: 'btn btn-success active' },
    { id: 'active4', active: true, btnClass: 'text-light', color: 'info', title: 'Active', toolTipText: 'btn btn-info active' },
    { id: 'active5', active: true, btnClass: 'text-light', color: 'warning', title: 'Active', toolTipText: 'btn btn-warning active' },
    { id: 'active6', active: true, btnClass: 'text-light', color: 'danger', title: 'Active', toolTipText: 'btn btn-danger active' },
    { id: 'active7', active: true, btnClass: 'text-dark', color: 'light', title: 'Active', toolTipText: 'btn btn-light active' },
];

export const disabledButtonsData: CommonButtonsDataType[] = [
    { id: 'disabled1', disabled: true, color: 'primary', title: 'Disabled' },
    { id: 'disabled2', disabled: true, color: 'secondary', title: 'Disabled' },
    { id: 'disabled3', disabled: true, color: 'success', title: 'Disabled' },
    { id: 'disabled4', disabled: true, color: 'info', btnClass: 'text-light', title: 'Disabled' },
    { id: 'disabled5', disabled: true, color: 'warning', btnClass: 'text-light', title: 'Disabled' },
    { id: 'disabled6', disabled: true, color: 'danger', title: 'Disabled' },
    { id: 'disabled7', disabled: true, color: 'light', btnClass: 'text-dark', title: 'Disabled' },
];

export const outlineButtonsData: CommonButtonsDataType[] = [
    { id: 'o1', outline: true, color: 'primary', title: 'Primary Button', toolTipText: 'btn btn-outline-primary btn-lg' },
    { id: 'o2', outline: true, color: 'secondary', title: 'Secondary Button', toolTipText: 'btn btn-outline-secondary btn-lg' },
    { id: 'o3', outline: true, color: 'info', title: 'Info Button', toolTipText: 'btn btn-outline-info btn-lg' },
    { id: 'o4', outline: true, color: 'warning', title: 'Warning Button', toolTipText: 'btn btn-outline-warning btn-lg' },
    { id: 'o5', outline: true, color: 'danger', title: 'Danger Button', toolTipText: 'btn btn-outline-danger btn-lg' },
    { id: 'o6', outline: true, color: 'light', btnClass: 'text-dark', title: 'Light Button', toolTipText: 'btn btn-outline-light btn-lg' },
];

export const boldOutlineButtonsData: CommonButtonsDataType[] = [
    { id: 'bold1', outline: true, color: 'primary-2x', title: 'Primary Button', toolTipText: 'btn btn-outline-primary-2x' },
    { id: 'bold2', outline: true, color: 'secondary-2x', title: 'Secondary Button', toolTipText: 'btn btn-outline-secondary-2x' },
    { id: 'bold4', outline: true, color: 'info-2x', title: 'Info Button', toolTipText: 'btn btn-outline-info-2x' },
    { id: 'bold5', outline: true, color: 'warning-2x', title: 'Warning Button', toolTipText: 'btn btn-outline-warning-2x' },
    { id: 'bold6', outline: true, color: 'danger-2x', title: 'Danger Button', toolTipText: 'btn btn-outline-danger-2x' },
    { id: 'bold7', outline: true, color: 'light-2x', btnClass: 'text-dark', title: 'Light Button', toolTipText: 'btn btn-outline-light-2x' },
];

export const buttonGroupData: ButtonGroupProps[] = [
    {
        color: 'primary',
        title1: 'Left',
        title2: 'Middle',
        title3: 'Right'
    },
    {
        color: 'secondary',
        title1: 'Left',
        title2: 'Middle',
        title3: 'Right'
    },
    {
        color: 'success',
        title1: 'Left',
        title2: 'Middle',
        title3: 'Right'
    },
    {
        color: 'info',
        btnClass: 'text-white',
        title1: 'Left',
        title2: 'Middle',
        title3: 'Right'
    },
    {
        color: 'warning',
        btnClass: 'text-white',
        title1: 'Left',
        title2: 'Middle',
        title3: 'Right'
    },
    {
        color: 'danger',
        title1: 'Left',
        title2: 'Middle',
        title3: 'Right'
    },
    {
        color: 'light',
        btnClass: 'font-dark',
        title1: 'Left',
        title2: 'Middle',
        title3: 'Right'
    },
    {
        colClass: 'button-group-mb-sm',
        color: 'dark',
        title1: 'Left',
        title2: 'Middle',
        title3: 'Right'
    }
];