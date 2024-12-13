import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { H6, Image, LI, P, UL } from '../../../AbstractElements'
import { dynamicImage } from '../../../Utils'
import { settingIconData } from '../../../Data/Layout/RightHeader'
import SvgIcon from '../../../Utils/CommonComponents/CommonSvgIcons'
import { getUserProfile } from '../../../api-service/Users/Index'
import { UserResponse } from '../../../Types/Users.type'
import { createNameProfileImage } from '../../../Common/methods'

export default function UserWrap() {
    const [open, setOpen] = useState(false)
    const [user, setUser] =  useState<UserResponse | null>(null);
    const navigate = useNavigate()
    const toggle = () => {
        setOpen(!open)
    }
    const logout = () => {
        localStorage.clear();
    }
        const getUser= async()=>{
            const response= await getUserProfile(navigate)
            debugger;
            console.log("edit user: " + response)
            if(response!=null){
                setUser(response.data)
            }
        }

        useEffect(() => {
            getUser()
        }, [])

    return (
        <li className="profile-nav custom-dropdown">
            <div className="user-wrap" onClick={toggle}>
                <div className="user-img">
                    <Image src={createNameProfileImage(user?.FirstName??"U",user?.LastName??"K")} alt="user" />
                </div>
                <div className="user-content">
                    <H6>{user?.FirstName}</H6>
                    {/* <P className="mb-0">{'Admin'}<i className="fa-solid fa-chevron-down" /></P> */}
                </div>
            </div>
            <div className={`custom-menu overflow-hidden ${open ? 'show' : ''}`}>
                <UL className="profile-body simple-list">
                    {/* {settingIconData.map((item) => (
                        <LI className="d-flex" key={item.id}>
                            <SvgIcon className='svg-color' iconId={item.icon} />
                            <Link className="ms-2" to={`${process.env.PUBLIC_URL}/${item.link}`}>
                                {item.text}
                            </Link>
                        </LI>
                    ))} */}
                       <LI className="d-flex" o>
                        <SvgIcon className='svg-color' iconId='Profile' />
                        <Link className="ms-2" to={`${process.env.PUBLIC_URL}/  users/user_profile`}>
                            {'Account'}
                        </Link>
                    </LI>
                    <LI className="d-flex" onClick={logout}>
                        <SvgIcon className='svg-color' iconId='Login' />
                        <Link className="ms-2" to={`${process.env.PUBLIC_URL}/login`}>
                            {'Log Out'}
                        </Link>
                    </LI>
                </UL>
            </div>
        </li>
    )
}