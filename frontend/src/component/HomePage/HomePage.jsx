import React, { useEffect, useState } from 'react'
import ProductDetail from '../ProductDetail/ProductDetail'
import { fetchProduct, productSelector, sortByPrice } from '../../redux/productSlice/productSlice'
import { useDispatch, useSelector } from 'react-redux';
import UpdateProductForm from '../updateProductModal/UpdateProductForm';



const HomePage = () => {

    const dispatch = useDispatch();
    const allProducts = useSelector(productSelector);


    // sort by price handler
    const sortByPriceHandler = () => {
        dispatch(sortByPrice());
    };

    // handle fetch product
    useEffect(() => {
        dispatch(fetchProduct());
    }, [])

    return (
        <>
            <main>
                {/* search item by name */}
                <div className='flex justify-end my-2 mx-4 '>
                    {/* <form className='block'>
                        <input className='w-56 rounded-md p-2 text-black border-2' type="text" placeholder='Search by Product Name...'/>
                    </form> */}
                    <div className='bg-green-300 rounded-md p-2 text-black font-bold'>
                        <button onClick={sortByPriceHandler}> Sort By Price </button>
                    </div>
                </div>

                {/* product details */}
                <div className='grid ml-12 mt-4 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {
                        allProducts.products.map((prod, ind) => (
                            <ProductDetail
                                key={prod.id}
                                productDetails={prod}
                            />
                        )) 
                    }
                </div>

                {/* Update product form */}
                <div>
                    {allProducts.isUpdateProductFormOpen && <UpdateProductForm/>}
                </div>
            </main>
        </>
    )
}

export default HomePage