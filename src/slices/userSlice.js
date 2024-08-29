import { createSlice } from "@reduxjs/toolkit";
// import { userList } from "../data/userList";

const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            return [...state, action.payload]; // This is immutable and recommended
            // state.push(action.payload); // Not recommended
        },

        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            return state.map((user) =>
                user.id == id ? { ...user, name, email } : user
            );
        },

        deleteUser : (state, action) => {
            const { id } = action.payload;
            return state.filter((user) => user.id != id);
        }
    },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
