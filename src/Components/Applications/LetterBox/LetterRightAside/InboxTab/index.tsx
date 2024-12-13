import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { FormGroup, Input, Label } from 'reactstrap';
import { AppDispatch, RootState } from '../../../../../ReduxToolkit/Store';
import { Badges, Image, LI, P, UL } from '../../../../../AbstractElements';
import { dynamicImage } from '../../../../../Utils';
import { addToFavorites, handleEnvelope, handleInterview, removeItems } from '../../../../../ReduxToolkit/Reducers/LetterBoxReducer';
import MailPagination from './Pagination';
import DashboardSvgIcon from '../../../../../Utils/CommonComponents/DashboardSvgIcon';

export default function InboxTab() {
    const dispatch = useDispatch<AppDispatch>();
    const { page, inboxEmail, faIcon } = useSelector((state: RootState) => state.email);
    const handleValue = () => dispatch(handleInterview(true))
    const handleRemoveEmail = (id: number) => {
        dispatch(removeItems(id));
    }
    return (
        <div className="mail-body-wrapper">
            <UL className='simple-list'>
                {inboxEmail.map((item, i) => (
                    <LI className={`inbox-data ${page ? i < 7 ? "hidden" : "" : i < 7 ? "" : "hidden"}`} key={i}>
                        <div className="inbox-user">
                            <FormGroup className="m-0" check inline>
                                <Input className={`checkbox-${item.color}`} name="emailCheckbox" id={`emailCheckbox${i}`} type="checkbox" />
                                <Label check htmlFor={`emailCheckbox${i}`} />
                            </FormGroup>
                            <DashboardSvgIcon className={`important-mail ${item.star ? "active" : ""}`} iconId="fill-star" onClick={() => dispatch(addToFavorites(item))} />
                            <div className="rounded-border">
                                {item.image && <Image src={dynamicImage(`user/${item.image}`)} alt="user" />}
                                {item.shortName && <div className={item.color === "success" ? "circle-success" : ""}>
                                    <P className={`text-${item.color}`}>{item.shortName}</P>
                                </div>}
                            </div>
                            <P>{item.name}</P>
                        </div>
                        <div className="inbox-message">
                            <div className="email-data">
                                <span>
                                    {item.message}
                                    <span>{item.subMessage}</span>
                                </span>
                                {item.badge && item.badge.map((data, i) => (
                                    <Badges color={`light-${data.color}`} key={i} onClick={handleValue}> {data.title} </Badges>
                                ))}
                            </div>
                            <div className="email-timing"><span>{item.time}</span></div>
                            <div className="email-options">
                                <i className={`fa-regular fa-envelope envelope-1 ${!faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(true))} />
                                <i className={`fa-solid fa-envelope-open-text envelope-2 ${faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(false))} />
                                <i className="fa-solid fa-trash-can trash-3" onClick={() => handleRemoveEmail(item.id)} />
                                <i className="fa-solid fa-print" />
                            </div>
                        </div>
                    </LI>
                ))}
            </UL>
            <MailPagination />
        </div>
    )
}