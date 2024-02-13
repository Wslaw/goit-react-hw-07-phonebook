import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../api/contacts-api';
import Notiflix from 'notiflix';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await contactsApi.requestFetchContacts();
    //   console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactsApi.requestAddContacts(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: ({name}, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const isDuplicate = contacts.items.some(item => {
        const normalizedCurrentName = item.name.toLowerCase();
        return normalizedCurrentName === normalizedName;
      });
      if (isDuplicate) {
        Notiflix.Notify.failure(
          `${name} is already in the phonebook.`
          );
          return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.requestDeleteContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
