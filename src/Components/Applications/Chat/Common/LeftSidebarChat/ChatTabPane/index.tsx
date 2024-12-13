import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../../../ReduxToolkit/Store';
import { AllMembersType, ChatConversation } from '../../../../../../Types/Chat.type';
import { changeChat, createNewChatAsync } from '../../../../../../ReduxToolkit/Reducers/ChatReducer';
import SideHeader from '../Common/SideHeader';
import { Badges, Image, LI, P, UL } from '../../../../../../AbstractElements';
import { dynamicImage } from '../../../../../../Utils';

export default function ChatTabPane() {
    const { members, currentUser, selectedUser, chats } = useSelector((state: RootState) => state.chat);
    var activeChat = 0;
    if (selectedUser && selectedUser[0] && selectedUser[0].id) {
        activeChat = selectedUser[0].id;
    }
    const dispatch = useDispatch();
    const changeChatClick = (selectedUserId: number) => {
        const currentUserId = currentUser.id;
        const currentChat = chats.find((x: ChatConversation) => x.users.includes(currentUser.id ?? 0) && x.users.includes(selectedUserId));
        if (currentChat) {
            dispatch(changeChat(selectedUserId));
        } else {
            dispatch(createNewChatAsync({ currentUserId, selectedUserId, chats }));
        }
    };
    return (
        <>
            <SideHeader title='Recent chats' />
            {members && members.length > 0 ? (
                <UL className="chats-user simple-list">
                    {members
                        .filter((x: AllMembersType) => x.id !== currentUser.id)
                        .map((item: AllMembersType, i: number) => {
                            return (
                                <LI key={i} className={`common-space ${activeChat === item.id && 'active'}`} onClick={() => changeChatClick(item.id)}>
                                    <div className='chat-time'>
                                        <div className="active-profile">
                                            <Image src={dynamicImage(item.image)} className='img-fluid rounded-circle' alt='' />
                                            <div className={`status bg-${item.online === true ? 'success' : 'warning'}`}></div>
                                        </div>
                                        <div>
                                            <span>{item.name}</span>
                                            <P>{item.status}</P>
                                        </div>
                                    </div>
                                    <div>
                                        <P>{item.time}</P>
                                        {item.badge && <Badges color='light-success'>{item.badge}</Badges>}
                                    </div>
                                </LI>
                            );
                        })}
                </UL>
            ) : (<div className="text-center">{'No User Present'}</div>)}
        </>
    )
}