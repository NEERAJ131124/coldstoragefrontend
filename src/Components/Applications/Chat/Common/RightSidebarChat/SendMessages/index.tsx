import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from 'reactstrap';
import EmojiPicker from 'emoji-picker-react';
import { RootState } from '../../../../../../ReduxToolkit/Store';
import { replyByUserAsync, sendMessageAsync } from '../../../../../../ReduxToolkit/Reducers/ChatReducer';
import { Btn } from '../../../../../../AbstractElements';
import PlusIconDropdown from './PlusIconDropdown';

export default function SendMessages() {
    const [messageInput, setMessageInput] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const { chats, selectedUser, currentUser } = useSelector((state: RootState) => state.chat);
    const dispatch = useDispatch();
    const chatHistoryRef = useRef<HTMLDivElement | null>(null);
    const addEmoji = (emoji: string) => {
        const text = `${messageInput}${emoji}`;
        setShowEmojiPicker(false);
        setMessageInput(text);
    };
    const scrollToBottom = () => {
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    };
    useEffect(scrollToBottom, [chats]);

    const handleMessageChange = (message: string) => {
        setMessageInput(message);
    };
    const handleMessagePress = () => {
        let currentUserId = currentUser.id;
        let selectedUserId = selectedUser.id;
        let selectedUserName = selectedUser.name;
        if (messageInput.length > 0) {
            dispatch(sendMessageAsync({ currentUserId, selectedUserId, messageInput, chats }));
            setMessageInput("");
            setTimeout(() => {
                const replyMessage = `Hey This is ${selectedUserName}, Sorry I'm busy right now, I will text you later`;
                if (selectedUser.online === true) {
                    dispatch(replyByUserAsync({ currentUserId, selectedUserId, replyMessage, chats }));
                }
            }, 1500);
        }
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleMessagePress()
    }
    return (
        <Form className="msger-inputarea" onSubmit={(e)=>handleSubmit(e)}>
            <PlusIconDropdown />
            <Input type="text" className="msger-input two uk-textarea" placeholder="Type a message......" value={messageInput}
                onChange={(e) => handleMessageChange(e.target.value)} />
            <div>
                {showEmojiPicker ? (<EmojiPicker onEmojiClick={(e) => addEmoji(e.emoji)} />) : null}
            </div>
            <div className="open-emoji">
                <div className="second-btn uk-button" onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
            </div>
            <Btn color='primary' className='msger-send-btn'>
                <i className="fa-solid fa-location-arrow" />
            </Btn>
        </Form>
    )
}