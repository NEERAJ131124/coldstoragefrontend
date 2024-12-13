import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormGroup, Input, Label } from 'reactstrap';
import { Badges, Image, LI, P, UL } from '../../../../../AbstractElements';
import { handleEnvelope, handleInterview, removeFromFavorite } from '../../../../../ReduxToolkit/Reducers/LetterBoxReducer';
import { RootState } from '../../../../../ReduxToolkit/Store';
import { dynamicImage } from '../../../../../Utils';
import DashboardSvgIcon from '../../../../../Utils/CommonComponents/DashboardSvgIcon';

export default function StarredTab() {
    const dispatch = useDispatch();
    const { inboxEmail, faIcon } = useSelector((state: RootState) => state.email);
    const handleValue = () => dispatch(handleInterview(true))
    
    return (
        <div className="mail-body-wrapper">
            <UL className='simple-list'>
                {inboxEmail.length > 0
                    ? inboxEmail.map((data, i) => (
                        <Fragment key={i}>
                            {data.star && (
                                <LI className="inbox-data">
                                    <div className="inbox-user">
                                        <FormGroup className="m-0" check inline>
                                            <Input className={`checkbox-${data.color}`} name="emailCheckbox" id={`emailCheckbox${i}`} type="checkbox" />
                                            <Label check for={`emailCheckbox${i}`} />
                                        </FormGroup>
                                        <DashboardSvgIcon className={`important-mail ${data.star ? "active" : ""}`} iconId="fill-star" onClick={() => dispatch(removeFromFavorite(data))} />
                                        <div className="rounded-border">
                                            {data.image && <Image src={dynamicImage(`user/${data.image}`)} alt="user" />}
                                            {data.shortName && <div className={data.color === "success" ? "circle-success" : ""}>
                                                <P className={`text-${data.color}`}>{data.shortName}</P>
                                            </div>}
                                        </div>
                                        <P>{data.name}</P>
                                    </div>
                                    <div className="inbox-message">
                                        <div className="email-data">
                                            <span>
                                                {data.message}
                                                <span>{data.subMessage}</span>
                                            </span>
                                            {data.badge &&
                                                data.badge.map((item, i) => (
                                                    <Badges color={`light-${data.color}`} key={i} onClick={handleValue}> {item.title} </Badges>
                                                ))}
                                        </div>
                                        <div className="email-timing"><span>{data.time}</span></div>
                                        <div className="email-options">
                                            <i className={`fa-regular fa-envelope envelope-1 ${!faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(true))} />
                                            <i className={`fa-solid fa-envelope-open-text envelope-2 ${faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(false))} />
                                            <i className="fa-solid fa-trash-can trash-3" />
                                            <i className="fa-solid fa-print" />
                                        </div>
                                    </div>
                                </LI>
                            )}
                        </Fragment>
                    ))
                    : "NO Starred Data"}
            </UL>
        </div>
    )
}