import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        style: 'light',
    },
    reducers: {
        setType: (state, action) => {
            switch (action.payload){
                case 'light':
                    state.style = 'light'
                    break;
                case 'dark':
                    state.style = 'dark'
                    break;
                default:
                    break;
            }
        },
    },
})

export const { setType } = themeSlice.actions
export default themeSlice.reducer
