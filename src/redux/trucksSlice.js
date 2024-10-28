import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  trucks: [],
  loading: false,
  error: null,
  currentPage: 0,
  trucksPerPage: 4,
};

export const fetchTrucks = createAsyncThunk('trucks/fetchTrucks', async () => {
  const response = await axios.get(
    'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers'
  );
  console.log(response.data.items);
  return response.data.items;
});

const trucksSlice = createSlice({
  name: 'trucks',
  initialState,
  reducers: {
    loadMoreTrucks: state => {
      state.currentPage += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTrucks.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTrucks.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.trucks = payload;
      })
      .addCase(fetchTrucks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { loadMoreTrucks } = trucksSlice.actions;

export default trucksSlice.reducer;
