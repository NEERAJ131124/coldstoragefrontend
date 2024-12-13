import { createSlice } from "@reduxjs/toolkit";
import { AllMembersType, ChatConversation, ChatInitialState } from "../../Types/Chat.type";

const initialState: ChatInitialState = {
    allMembers: [],
    members: [],
    chats: [],
    chatContact: [],
    currentUser: {},
    selectedUser: [],
    toggleSideBar: false,
};

const ChatSlice = createSlice({
    name: "chatBox",
    initialState,
    reducers: {
        setToggleSideBar: (state, action) => {
            state.toggleSideBar = action.payload;
        },
        setAllMembers: (state, action) => {
            state.allMembers = action.payload;
            state.members = action.payload;
        },
        setChats: (state, action) => {
            state.chats = action.payload;
        },
        setContacts: (state, action) => {
            state.chatContact = action.payload;
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },
        fetchChatMemberAsync: (state) => {
            if (state.allMembers.length > 0) {
                state.currentUser = state.allMembers[0];
                state.members = state.allMembers;
            }
        },
        fetchChatAsync: (state) => {
            if (state.chats.length > 0) {
                const currentUserId = 0;
                var chat = state.chats.filter((x: ChatConversation) => x.users.includes(currentUserId));
                var selectedUser = state.chats[0].users.find((x: any) => x !== currentUserId);
                if (state.allMembers.length > 0) {
                    state.chats = chat;
                    state.selectedUser = state.allMembers.find((x: AllMembersType) => x.id === selectedUser);
                }
            }
        },
        getMembersSuccess: (state, action) => {
            state.currentUser = action.payload[0];
            state.members = action.payload;
        },
        getChatsSuccess: (state, action) => {
            if (state.allMembers.length > 0) {
                state.chats = action.payload.chats;
            }
        },
        searchMember: (state, action) => {
            const keyword = action.payload.toLowerCase();
            state.members = state.allMembers.filter((member: AllMembersType) =>
                member.name.toLowerCase().includes(keyword)
            );
        },
        changeChat: (state, action) => {
            let newUser = state.allMembers.find((x: AllMembersType) => x.id === action.payload);
            state.selectedUser = newUser;
        },
        createNewChatAsync: (state, action) => {
            let conversation = {
                id: action.payload.chats.length + 1,
                users: [action.payload.currentUserId, action.payload.selectedUserId],
                lastMessageTime: "-",
                messages: [],
            };
            state.chats.splice(0, 0, conversation);
            if (state.allMembers.length > 0) {
                let selctedUser = state.allMembers.find((x: AllMembersType) => x.id === action.payload.selectedUserId);
                state.selectedUser = selctedUser;
            }
        },
        sendMessageAsync: (state, action) => {
            const chat = state.chats.find((x: ChatConversation) => x.users.includes(action.payload.currentUserId) && x.users.includes(action.payload.selectedUserId));
            const now = new Date();
            const time = now.getHours() + ":" + now.getMinutes();
            if (chat) {
                chat.messages.push({
                    sender: action.payload.currentUserId,
                    time: time,
                    text: action.payload.messageInput,
                    status: true,
                });
                chat.lastMessageTime = time;
                chat.online = true;
                let chats_Data = state.chats.filter((x: ChatConversation) => x.id !== chat.id);
                chats_Data.splice(0, 0, chat);
                if (state.allMembers.length > 0) {
                    let selctedUser = state.allMembers.find((x: AllMembersType) => x.id === action.payload.selectedUserId);
                    state.selectedUser = selctedUser;
                }
            }
        },
        replyByUserAsync: (state, action) => {
            const chat = state.chats.find((x: ChatConversation) => x.users.includes(action.payload.currentUserId) && x.users.includes(action.payload.selectedUserId));
            const now = new Date();
            const time = now.getHours() + ":" + now.getMinutes();
            if (chat) {
                chat.messages.push({
                    sender: action.payload.selectedUserId,
                    time: time,
                    text: action.payload.replyMessage,
                    status: true,
                });
                chat.lastMessageTime = time;
                let chats_Data = state.chats.filter((x: ChatConversation) => x.id !== chat.id);
                chats_Data.splice(0, 0, chat);
            }
        },
    },
});

export default ChatSlice.reducer;
export const { setContacts, setAllMembers, searchMember, setToggleSideBar, setChats, changeChat, sendMessageAsync, replyByUserAsync, createNewChatAsync, setSelectedUser, fetchChatMemberAsync, fetchChatAsync, getMembersSuccess, getChatsSuccess } = ChatSlice.actions;
