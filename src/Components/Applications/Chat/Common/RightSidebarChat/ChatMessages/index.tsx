/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../../../ReduxToolkit/Store';
import { AllMembersType, ChatType, MessagesType } from '../../../../../../Types/Chat.type';
import { fetchChatMemberAsync, setChats, setSelectedUser } from '../../../../../../ReduxToolkit/Reducers/ChatReducer';
import { Image } from '../../../../../../AbstractElements';
import { dynamicImage } from '../../../../../../Utils';

export default function ChatMessages() {
    const bottomRef = useRef<null | HTMLDivElement>(null);
    const [scroll, setScroll] = useState(0);
    const { allMembers, chats, selectedUser, currentUser } = useSelector((state: RootState) => state.chat);
    const dispatch = useDispatch();

    const fetchChatAsync = () => {
        if (chats.length > 0) {
            const currentUserId = 0;
            const chat = chats.filter((x: ChatType) => x.users.includes(currentUserId));
            const selectedUser = chat[0].users.find((x: number) => x !== currentUserId);
            const oneSelect = allMembers.find((x: AllMembersType) => x.id === selectedUser);
            if (allMembers.length > 0) {
                dispatch(setChats(chat));
                dispatch(setSelectedUser(oneSelect));
            }
            if (allMembers.length > 0) allMembers.find((x: AllMembersType) => x.id === selectedUser);
        }
    };
    useEffect(() => {
        dispatch(fetchChatMemberAsync());
        fetchChatAsync();
        setScroll(1);
    }, [dispatch, allMembers.length, chats.length]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chats, scroll]);

    const selectedChat = (allMembers && chats && selectedUser)
        ? chats.find((x: ChatType) => x.users.includes(currentUser.id as number) && x.users.includes((selectedUser.id)))
        : null;

    return (
        <>
            {allMembers && chats && selectedUser ? (
                <div className="msger-chat">
                    {selectedChat && selectedChat.messages.length > 0 ? (
                        selectedChat.messages.map((item: MessagesType, index: number) => {
                            const participators: AllMembersType | undefined = allMembers.find(
                                (x: AllMembersType) => x.id === item.sender
                            );
                            return (
                                <div className={`msg ${item.sender === currentUser.id ? "right" : "left"}-msg`} key={index}>
                                    <div className='msg-img'>
                                        <Image src={dynamicImage(participators?.image)} className={`rounded-circle ${item.sender !== currentUser.id ? 'float-start' : 'float-end'} chat-user-img img-30 h-auto`} alt='' />
                                    </div>
                                    <div className="msg-bubble">
                                        <div className="msg-info">
                                            <div className="msg-info-name">{participators?.name}</div>
                                            <div className="msg-info-time">{item.time}</div>
                                        </div>
                                        <div className="msg-text">{item.text}</div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (<Image className='img-fluid' src={dynamicImage("start-conversion.jpg")} alt='start conversion' />
                    )}
                    <div ref={bottomRef}></div>
                </div>
            ) : (
                <div className='loading'></div>
            )}
        </>
    );
}