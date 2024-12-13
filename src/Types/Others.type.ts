import { ChangeEvent } from "react";

export interface CountdownRendererProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}

export interface LoginFormProp {
    logoClass?: string;
}

export interface SocialLinksProp {
    logtext?: string;
    btntext?: string;
}

export interface RegisterWizardProp {
    level: number;
}

interface FormValueInterFace {
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
    birthDate: string;
    country: string;
    state: string;
}

export interface RegisterWizardForm {
    updateUserData: (event: ChangeEvent<HTMLInputElement>) => void;
    formValue: FormValueInterFace;
}

export interface RegisterWizardFormProps {
    level: number;
    setLevel: (level: number) => void;
}
export interface CommonErrorPageProps {
    errorIcon: any;
    title: string;
}