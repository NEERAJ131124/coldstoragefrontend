import React, { ChangeEvent, useState } from 'react'
import { ActiveCallbackProp } from '../../../../../../Types/Forms.type';
import { toast } from 'react-toastify';
import { Btn, H5, P } from '../../../../../../AbstractElements';
import { SavedAddress, ShippingInformation, ShippingMethod } from '../../../../../../Utils/Constants';
import NewAddressModal from './NewAddressModal';
import HomeAndOfficeAddress from './HomeAndOfficeAddress';
import ShippingMethods from './ShippingMethods';

export default function ShippingFormContent({ activeCallBack }: ActiveCallbackProp) {
    const [radioBoxValues, setRadioBoxValues] = useState({ address: "", shippingMethod: "", });
    const { address, shippingMethod } = radioBoxValues;
    const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = event.target.value;
        setRadioBoxValues({ ...radioBoxValues, [name]: value });
    };
    const handleBackButton = () => {
        activeCallBack(1);
    };
    const handleNextButton = () => {
        if (address !== "" && shippingMethod !== "") {
            activeCallBack(3);
        } else {
            return toast.error("please fill out all the fields before moving on to the next step");
        }
    };
    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal);

    return (
        <>
            <H5 className='f-w-600'>{ShippingInformation}</H5>
            <P>{" Fill up the following information to send you the order"}</P>
            <div className="shipping-title">
                <H5 className="f-w-600 mb-2">{SavedAddress}</H5>
                <Btn onClick={toggle} color="primary">
                    <i className="fa-solid fa-square-plus f-20" />
                </Btn>
                <NewAddressModal showModal={showModal} toggle={toggle} />
            </div>
            <HomeAndOfficeAddress radioBoxValues={radioBoxValues} updateFormData={updateFormData} />
            <H5 className="f-w-600 mt-4 mb-2">{ShippingMethod}</H5>
            <ShippingMethods radioBoxValues={radioBoxValues} updateFormData={updateFormData} handleNextButton={handleNextButton} handleBackButton={handleBackButton} />
        </>
    );
};