import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// api url
const API_URL = "http://localhost:3030/products";


export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (productId, thunkAPI) => {
        try {
            const response = await axios.get(`${API_URL}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }

);



const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        isAddProductFormOpen:false,
        isUpdateProductFormOpen:false,
    },

    reducers: {
        // sort product by price 
        sortByPrice: (state, action) => {
            state.products.sort((a, b) => a.price - b.price)
        },

        // create/add new product
        addNewProduct: (state, action) => {
            state.products = [...state.products, {...action.payload}]
        },

        // update product by id
        updateProduct: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload);
            if(index !== -1){
                state.products[index] = action.payload;
            }
        },

        // delete product by given id
        deleteProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        }, 

        // toggel add product form
        toggleAddProductForm: (state, action) => {
           state.isAddProductFormOpen = !state.isAddProductFormOpen;
        },

        // toggel update product form
        toggleUpdateProductForm: (state, action) => {
            state.isUpdateProductFormOpen = !state.isUpdateProductFormOpen;
         },
    },

    extraReducers:(builder) => {
        builder
            .addCase(fetchProduct.pending, (state, action) => {
                // handle pending state 
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                // update state with the fetched product
                state.products = [...action.payload];
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                // handle error state
            })
    }
});


const productReducer = productSlice.reducer;
export const {sortByPrice, addNewProduct, updateProduct, deleteProduct, toggleAddProductForm, toggleUpdateProductForm } = productSlice.actions;
export const productSelector = (state) => state.productReducer;
export default productReducer;
