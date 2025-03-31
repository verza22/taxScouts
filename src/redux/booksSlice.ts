import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Book } from '../types';

interface BooksState {
  results: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: BooksState = {
  results: [],
  loading: false,
  error: null
};

export const fetchBooks = createAsyncThunk<Book[], string>(
  'books/fetchBooks',
  async (query: string) => {
    if(query.trim() === ""){
      return [];
    }else{
      try{
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
        const data = await response.json();

        if (!data || !Array.isArray(data.docs)) {
          return [];
        }  
    
        return data.docs.map((book: any) => ({
          title: book.title,
          author: book.author_name?.[0] || 'Unknown',
          coverId: book.cover_i,
          year: book.first_publish_year
        })) as Book[];
      }catch(err){
        return [];
      }
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      });
  }
});

export default booksSlice.reducer;