import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filtered: '',
  },
  reducers: {
    addContactsAction(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContactsAction(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    filterContactsAction(state, action) {
      state.filtered = action.payload;
      // state.contacts.filter(({ name }) =>
      // name.toLowerCase().includes(action.payload.toLowerCase())
      //   );
      //   if (!action.payload.trim()) {
      //     return state.contacts;
      //   }
      //???????
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const {
  addContactsAction,
  deleteContactsAction,
  filterContactsAction,
  changeFilterAction,
} = contactsSlice.actions;