import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const fetchContactsFuldilledReducer = (state, action) => {
  state.items = action.payload;
};
const addContactsFulfilledReducer = (state, action) => {
  state.items = [...state.items, action.payload];
};
const deleteContactsFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};
const extraActions = [fetchContacts, addContact, deleteContact];
const getExtraActions = type => extraActions.map(action => action[type]);

const anyPendingReducer = state => {
  state.isLoading = true;
};
const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder

      .addCase(fetchContacts.fulfilled, fetchContactsFuldilledReducer)
      .addCase(addContact.fulfilled, addContactsFulfilledReducer)
      .addCase(deleteContact.fulfilled, deleteContactsFulfilledReducer)
      .addMatcher(isAnyOf(...getExtraActions('pending')), anyPendingReducer)
      .addMatcher(isAnyOf(...getExtraActions('fulfilled')), anyFulfilledReducer)
      .addMatcher(isAnyOf(...getExtraActions('rejected')), anyRejectedReducer),
});

export const contactsReducer = contactsSlise.reducer;
