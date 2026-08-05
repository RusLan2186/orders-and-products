import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { getStoredValue, setStoredValue, STORAGE_KEYS } from '../utils/storage';

interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: getStoredValue(STORAGE_KEYS.SEARCH_QUERY) ?? '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      setStoredValue(STORAGE_KEYS.SEARCH_QUERY, action.payload);
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;