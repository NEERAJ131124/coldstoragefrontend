import { createSlice } from "@reduxjs/toolkit";
import { LayoutStateProps } from "../../../Types/Layout.type";

const initialState: LayoutStateProps = {
    responsiveSearch: false,
    pinedMenu: [],
    sideBarToggle: false,
    isSearchBarOpen: false,
};

const LayoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        setIsSearchBarOpen: (state, action) => {
            state.isSearchBarOpen = action.payload;
        },
        setResponsiveSearch: (state) => {
            state.responsiveSearch = !state.responsiveSearch;
        },
        setPinedMenu: (state, action) => {
            state.pinedMenu = action.payload;
        },
        setSideBarToggle: (state, action) => {
            state.sideBarToggle = action.payload;
        },
        handlePined: (state, action) => {
            if (action.payload) {
                if (state.pinedMenu.includes(action.payload)) {
                    let filterMenu = state.pinedMenu.filter((item) => item !== action.payload);
                    state.pinedMenu = filterMenu;
                } else {
                    state.pinedMenu = [...state.pinedMenu, action.payload];
                }
            }
        },
    },
});
export const { setResponsiveSearch,setIsSearchBarOpen, setPinedMenu, setSideBarToggle, handlePined } = LayoutSlice.actions;
export default LayoutSlice.reducer;
