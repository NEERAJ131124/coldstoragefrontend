import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TodoApi } from "../../api";
import { TodoInitialStateType, TodoListType } from "../../Types/Todo.type";

export const fetchTodo = createAsyncThunk<TodoListType[], void, {}>("api/todo", async () => {
    const response = await axios.get(TodoApi);
    return response.data;
});

const initialState: TodoInitialStateType = { allTodos: [], addNewTask: false };

const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setAddNewTask: (state, action) => {
            state.addNewTask = action.payload;
        },
        setAllTodo: (state, action) => {
            state.allTodos = action.payload;
        },
        removeItems: (state, action) => {
            state.allTodos = state.allTodos.filter((data: TodoListType) => data.id !== action.payload);
        },
        selectItem: (state, action) => {
            state.allTodos = state.allTodos.map((item: TodoListType) => {
                if (item.id === action.payload.id) {
                    if (action.payload.status === "pending") {
                        return {
                            ...item,
                            status: action.payload.status,
                            badgeclass: action.payload.badgeclass,
                            badge: "Pending",
                        };
                    } else if (action.payload.status === "completed") {
                        return {
                            ...item,
                            status: action.payload.status,
                            badgeclass: action.payload.badgeclass,
                            badge: "Done",
                        };
                    }
                }
                return item;
            });
        },
        addNewTodo: (state, action) => {
            const newTodo: TodoListType = {
                id: state.allTodos.length + 1,
                title: action.payload,
                status: "pending",
                badge: "Pending",
                badgeclass: 'danger',
                date: '10 dec'
            };
            state.allTodos = [...state.allTodos, newTodo];
        },
        markTaskAsCompleted: (state, action) => {
            state.allTodos = state.allTodos.map((item: TodoListType) => {
                if (item.id === action.payload) {
                    const newStatus = item.status === 'pending' ? 'completed' : 'pending';
                    const newBadge = newStatus === 'completed' ? 'Done' : 'Pending';
                    const newBadgeClass = newStatus === 'completed' ? 'success' : 'danger';

                    return {
                        ...item,
                        status: newStatus,
                        badge: newBadge,
                        badgeclass: newBadgeClass,
                    };
                }
                return item;
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.allTodos = action.payload;
        });
    },
});

export const { setAllTodo, removeItems, selectItem, addNewTodo, setAddNewTask, markTaskAsCompleted } = TodoSlice.actions;
export default TodoSlice.reducer;
