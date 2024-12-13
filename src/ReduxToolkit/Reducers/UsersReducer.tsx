import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UserCardsApi } from "../../api";
import { SocialProfileCardProps, UsersInitialStateType } from "../../Types/CommonComponent.type";

export const fetchUsersData = createAsyncThunk<SocialProfileCardProps[], void, {}>("api/users", async () => {
    const response = await axios.get(UserCardsApi);
    return response.data;
});

const initialState: UsersInitialStateType = { allUsers: [] };

const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setAllUsers: (state, action: PayloadAction<SocialProfileCardProps[]>) => {
            state.allUsers = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsersData.fulfilled, (state, action) => {
            state.allUsers = action.payload;
        });
    },
});

export const { setAllUsers } = UsersSlice.actions;
export default UsersSlice.reducer;
