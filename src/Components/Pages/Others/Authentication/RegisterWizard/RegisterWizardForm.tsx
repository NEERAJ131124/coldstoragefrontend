import React, { ChangeEvent, useState } from 'react'
import { Form, Input } from 'reactstrap';
import { toast } from 'react-toastify';
import { Finish, Next, Previous } from '../../../../../Utils/Constants';
import PersonalForm from './PersonalForm';
import AddressForm from './AddressForm';
import VerifyForm from './VerifyForm';
import { Btn } from '../../../../../AbstractElements';
import { RegisterWizardFormProps } from '../../../../../Types/Others.type';

export default function RegisterWizardForm({ level, setLevel }: RegisterWizardFormProps) {
    const [formValue, setFormValue] = useState({ firstName: "", lastName: "", contactNumber: "", email: "", password: "", confirmPassword: "", birthDate: "", country: "", state: "" });
    const [showFinish, setShowFinish] = useState(false);
    const handleBackButton = () => {
        setShowFinish(false);
        if (level === 2) { setLevel(level - 1); }
        if (level === 3) { setLevel(level - 1); }
    };
    const updateUserData = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = event.target.value;
        setFormValue({ ...formValue, [name]: value });
    };
    const handleNextButton = () => {
        const { firstName, lastName, contactNumber, email, password, confirmPassword, birthDate, state } = formValue;
        if (firstName !== "" && lastName !== "" && contactNumber !== "" && level === 1) {
            setLevel(level + 1);
        } else if (email !== "" && password !== "" && confirmPassword !== "" && level === 2) {
            setLevel(level + 1);
        } else if (state !== "" && birthDate !== "" && level === 3) {
            setShowFinish(true);
        } else {
            return toast.error("please fill all fields before jumping to next button");
        }
    };
    const handleFinish = () => {
        toast.success("Congratulation ! All step Done.")
    }
    return (
        <Form className="theme-form">
            <Input type="hidden" name="_token" value="iJquRbgH4Np4OcWzjk8Bd03CaexHzse7gz2vHrml" />
            <div className="registration-content">
                {level === 1 && (<PersonalForm formValue={formValue} updateUserData={updateUserData} />)}
                {level === 2 && (<AddressForm formValue={formValue} updateUserData={updateUserData} />)}
                {level === 3 && (<VerifyForm formValue={formValue} updateUserData={updateUserData} />)}
            </div>
            <div className="wizard-navigation mb-3">
                <div className="p-2">
                    {level > 1 && (<Btn color='primary' outline size='lg' className='m-1' onClick={handleBackButton}>{Previous}</Btn>)}
                </div>
                <div>
                    <Btn color='primary' size='lg' className="text-center m-1" onClick={showFinish ? handleFinish : handleNextButton}>{showFinish ? Finish : Next}</Btn>
                </div>
            </div>
        </Form>
    )
}