import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Define your initial state here
};

const someSlice = createSlice({
  name: 'some',
  initialState,
  reducers: {
    // Define your reducers here
  },
});

// Export actions
export const { /* your actions here */ } = someSlice.actions;

export default someSlice;