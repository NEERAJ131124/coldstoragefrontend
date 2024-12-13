import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { JobSearchApi } from "../../api";
import { JobSearchInitialStateType, JobSearchItems } from "../../Types/Miscellaneous.type";

export const fetchJobSearchData = createAsyncThunk<JobSearchItems[], void, {}>("api/job-search", async () => {
    const response = await axios.get(JobSearchApi);
    return response.data;
});

const initialState: JobSearchInitialStateType = { jobList: [] };

const JobSearchSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setAllJobList: (state, action: PayloadAction<JobSearchItems[]>) => {
            state.jobList = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJobSearchData.fulfilled, (state, action) => {
            state.jobList = action.payload;
        });
    },
});

export const { setAllJobList } = JobSearchSlice.actions;
export default JobSearchSlice.reducer;
