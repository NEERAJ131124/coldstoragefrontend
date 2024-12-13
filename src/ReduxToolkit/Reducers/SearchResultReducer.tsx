import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchResultApi } from "../../api";
import { SearchResultInitialState, TabDataItems } from "../../Types/SearchResult.type";

export const fetchSearchData = createAsyncThunk<TabDataItems[], void, {}>("api/searchResult", async () => {
    const response = await axios.get(SearchResultApi);
    return response.data;
});

const initialState: SearchResultInitialState = { allResult: [] };

const SearchResultSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        setAllResult: (state, action: PayloadAction<TabDataItems[]>) => {
            state.allResult = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearchData.fulfilled, (state, action) => {
            state.allResult = action.payload;
        });
    },
});

export const { setAllResult } = SearchResultSlice.actions;
export default SearchResultSlice.reducer;
