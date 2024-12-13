import { createSlice } from "@reduxjs/toolkit";
import ConfigDB from "../../../Config/ThemeConfig";

let initialState = {
    layout_type: 'ltr',
    openCus: false,
    sidebar_types: "compact-wrapper",
    mix_background_layout: "light-only",
    sideBarIconType: "stroke-svg",
    colors: {
        primary_color: '',
        secondary_color: ''
    },
    mixLayout: false
};

const ThemeCustomizerSlice = createSlice({
    name: "themeCustomizer",
    initialState: initialState,
    reducers: {
        setLayoutType: (state, action) => {
            state.layout_type = action.payload;
        },
        setOpenCus: (state, action) => {
          state.openCus = action.payload;
      },
        addSidebarTypes: (state, action) => {
            ConfigDB.settings.sidebar.type = action.payload;
            state.sidebar_types = action.payload;
        },
        addSideBarBackGround: (state, action) => {
            ConfigDB.color.mix_background_layout = action.payload;
            state.mix_background_layout = action.payload;
        },
        addSidebarIconType: (state, action) => {
            ConfigDB.settings.sidebar.iconType = action.payload;
            state.sideBarIconType = action.payload;
        },
        addColor: (state, action) => {
            const colorBackground1 = action.payload;
            const colorBackground2 = action.payload;
            ConfigDB.color.primary_color = colorBackground1;
            ConfigDB.color.secondary_color = colorBackground2;
            state.colors.primary_color = colorBackground1;
            state.colors.secondary_color = colorBackground2;
        },
        setMixLayout: (state, action) => {
            state.mixLayout = action.payload;
        }
    },
});

export const {
    setLayoutType,
    addSidebarTypes,
    addSideBarBackGround,
    addSidebarIconType,
    addColor,
    setOpenCus
} = ThemeCustomizerSlice.actions;

export default ThemeCustomizerSlice.reducer;
