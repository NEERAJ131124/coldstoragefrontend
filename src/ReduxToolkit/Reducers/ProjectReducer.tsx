import { createSlice } from '@reduxjs/toolkit';
import { allProjectListData } from '../../Data/Applications/Project';

const ProjectSlice = createSlice({
    name: 'project',
    initialState: {
        items: allProjectListData
    },
    reducers: {
        setProjects: (state, action) => {
            state.items = [...state.items, action.payload]
        },
    },
});

export const { setProjects } = ProjectSlice.actions;
export default ProjectSlice.reducer;