import React from 'react'
import { Link } from 'react-router-dom'
import { OtherModalProps } from '../../../../Types/UiKits.type'
import CommonModal from '../Common/CommonModal'
import { Btn, H4, Image, LI, P, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Utils'

export default function OtherModal({ modal, toggle }: OtherModalProps) {
    const ModalData = {
        isOpen: modal,
        center: true,
        toggler: toggle
    }
    return (
        <CommonModal modalData={ModalData}>
            <div className='modal-toggle-wrapper'>
                <UL className="modal-img simple-list">
                    <LI>
                        <Image src={dynamicImage(`gif/logout.gif`)} alt="logout" />
                    </LI>
                </UL>
                <H4 className="pt-3 text-center">{'Already leaving??'}</H4>
                <P className="text-center">{'Are you sure want to logout this dashboard?'}</P>
                <span className="d-block text-center mb-4">
                    {'Not a member?'}
                    <Link className="ms-1" to={`${process.env.PUBLIC_URL}/dashboard/ecommerce`}>{'Register'}</Link>
                </span>
                <Btn color='dark' className="d-flex m-auto" onClick={toggle}>{'Yes, Log out'}</Btn>
            </div>
        </CommonModal>
    )
}
