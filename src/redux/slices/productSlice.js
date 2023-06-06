import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    products: [],
    item: null,
    error: '',
    // categoryProducts: []
}

export const getAllProducts = createAsyncThunk('getAllProducts', async (_, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get('http://localhost:3005/products')
        return data

    } catch (error) {
        return rejectWithValue('There is an ERROR!');
    }
})


export const detailsProduct = createAsyncThunk('detailsProduct', async (id, thunk) => {
    const { rejectWithValue } = thunk;
    try {
        const { data } = await axios.get(`http://localhost:3005/products/${id}`);
        return data
    } catch (error) {
        return rejectWithValue('There is an ERROR!')
    }
})

// export const categoryProduct = createAsyncThunk('categoryProduct', async(category, thunk) => {
//     const { rejectWithValue } = thunk;
//     try {
//         const { data } = await axios.get(`http://localhost:3005/${category}`);
//         return data
//     } catch (error) {
//         return rejectWithValue('There is an ERROR!')
//     }
// })

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        //get products
        builder.addCase(getAllProducts.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })

        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        //details product
        builder.addCase(detailsProduct.pending, state => {
            state.loading = true;
            state.error = "";
        })

        builder.addCase(detailsProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.item = action.payload;
        })

        builder.addCase(detailsProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        //category product
        // builder.addCase(categoryProduct.pending, state => {
        //     state.loading = true;
        //     state.error = "";
        // })

        // builder.addCase(categoryProduct.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.categoryProducts = action.payload;
        // })

        // builder.addCase(categoryProduct.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // })
    }
})


export default productSlice.reducer