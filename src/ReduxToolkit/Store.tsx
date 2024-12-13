import { configureStore } from "@reduxjs/toolkit";
import LayoutReducer from "./Reducers/Layout/LayoutReducer";
import ProductReducer from "./Reducers/ECommerce/ProductReducer";
import FilterReducer from "./Reducers/ECommerce/FilterReducer";
import TodoReducer from "./Reducers/TodoReducer";
import SearchResultReducer from "./Reducers/SearchResultReducer";
import ContactReducer from "./Reducers/ContactReducer";
import TasksReducer from "./Reducers/TasksReducer";
import UsersReducer from "./Reducers/UsersReducer";
import BookmarkReducer from "./Reducers/BookmarkReducer";
import EmailReducer from "./Reducers/LetterBoxReducer";
import ChatReducer from "./Reducers/ChatReducer";
import ProjectReducer from "./Reducers/ProjectReducer";
import JobSearchReducer from "./Reducers/JobSearchReducer";
import ThemeCustomizerReducer from "./Reducers/Layout/ThemeCustomizerReducer";
import FacilityReducer from "./Reducers/FacilityReducer";

export const store = configureStore({
    reducer: {
        layout: LayoutReducer,
        product: ProductReducer,
        filter: FilterReducer,
        todos: TodoReducer,
        searchResult: SearchResultReducer,
        contact: ContactReducer,
        tasks: TasksReducer,
        email: EmailReducer,
        chat: ChatReducer,
        project: ProjectReducer,
        facility: FacilityReducer,
        jobSearch: JobSearchReducer,
        userCards: UsersReducer,
        bookmark: BookmarkReducer,
        themeCustomizer: ThemeCustomizerReducer,

    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
