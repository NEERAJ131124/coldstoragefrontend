import React from 'react'
import { Link } from 'react-router-dom'
import { FormGroup } from 'reactstrap'
import { SocialLinksProp } from '../../../../../Types/Others.type'
import { H6, LI, P, UL } from '../../../../../AbstractElements'
import { CreateAccount, } from '../../../../../Utils/Constants'
import { socialLinksData } from '../../../../../Data/Pages/Others'

export default function SocialLinks({ logtext, btntext }: SocialLinksProp) {
    return (
        <>
            <div className="login-social-title"><H6>{'Or Sign in with'}</H6></div>
            <FormGroup>
                <UL className="login-social simple-list flex-row">
                    {socialLinksData.map((item) => (
                        <LI key={item.id}>
                            <Link to={item.link} target='_blank'>
                                <i className={`icon-${item.icon}`} />
                            </Link>
                        </LI>
                    ))}
                </UL>
            </FormGroup>
            {/* <P className="mt-4 mb-0 text-center">
                {logtext ? logtext : "Don't have account?"}
                {!logtext && !btntext ? (
                    <Link className="ms-2" to={`${process.env.PUBLIC_URL}/authentication/register_simple`}>{CreateAccount}</Link>
                ) : (
                    <Link to={`${process.env.PUBLIC_URL}/authentication/login_simple`} className='ms-2'>{btntext}</Link>
                )}
            </P> */}
        </>
    )
}