import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [
            { 
                id:1, 
                title:"product 1", 
                description:"product 1 description", 
                price: 2030,
                imageUrl:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg"
            },
        ],
    },
    reducers: {
        // sort product by price 
        sortByPrice: (state, action) => {
            state.products.sort((a, b) => a.price - b.price)
        },

        // create/add new product
        addNewProduct: (state, action) => {
            state.products = [...state.products, {...action.payload}];
        },

        // update product by id
        updateProduct: (state, action) => {
            console.log("product updated");
        },

        // delete product by given id
        deleteProduct: (state, action) => {
            console.log("product deleted");
        }, 

        // toggel add product form
        toggleAddProductForm: (state, action) => {
            console.log("toggeled");
        }
    },
    extraReducers:(builder) => {
        console.log("extra reducer for async API call");
    }
});


const productReducer = productSlice.reducer;
export const {sortByPrice, addNewProduct, updateProduct, deleteProduct} = productSlice.actions;
export const productSelector = (state) => state.productReducer;
export default productReducer;
