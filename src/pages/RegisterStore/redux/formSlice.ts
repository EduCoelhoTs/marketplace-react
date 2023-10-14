import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
}

const initialState: FormState = {}

// criando slice (objeto com reducer e actions)
export const formSlice = createSlice({
    name: 'forms',
    initialState,
    reducers: {
        addNewForm: (state, action: PayloadAction<{formName: string, form: object}>) => ({...state, [action.payload.formName]: action.payload.form})
    },
})

export const { addNewForm } = formSlice.actions;

export default formSlice.reducer;