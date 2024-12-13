import { createSlice } from '@reduxjs/toolkit';
import { allFaclityListData } from '../../Data/Facility';

const FacilitySlice = createSlice({
    name: 'facility',
    initialState: {
        items: allFaclityListData
    },
    reducers: {
        setFacility: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        
    },
});

export const { setFacility } = FacilitySlice.actions;
export default FacilitySlice.reducer;