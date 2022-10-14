import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'nameUser',
    initialState: '',
    //actions del stado
    reducers: {
        setUserGlobal: (state, action) => {
            return action.payload
        }

    }
})
export const { setUserGlobal } = userSlice.actions

export default userSlice.reducer // representativo