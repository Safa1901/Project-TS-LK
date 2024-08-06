import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from 'types';

interface AuthState {
    user?: IUser | null;
  }
  
const initialState: AuthState = {
    user: null,
};

export const authSlice = createSlice({
    initialState,
    name: "authSlice",
    reducers: {
        logout: () => initialState,
        userInfo: (state, action: PayloadAction<AuthState>) => {
            state.user = action.payload.user;
        },
    },
});

export default authSlice.reducer;
export const { logout, userInfo } = authSlice.actions;
