import React from 'react'
import ProductDetail from '../ProductDetail/ProductDetail'
import { productSelector } from '../../redux/productSlice/productSlice'
import { useDispatch, useSelector } from 'react-redux';



const HomePage = () => {

    const allProducts = useSelector(productSelector);
    

    return (
        <>
            <main>
                {/* search item by name */}
                <div className='flex justify-evenly my-4'>
                    <form className='block'>
                        <input className='w-56 rounded-md p-2 text-black border-2' type="text" placeholder='Search by Product Name...'/>
                    </form>
                    <div className='bg-gray-300 rounded-md p-2 text-black font-bold'>
                        <button> Sort By Price </button>
                    </div>
                </div>

                {/* product details */}
                <div className='grid ml-12 mt-8 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {
                        allProducts.products.map((elem, ind) => (
                            <ProductDetail
                                key={ind}
                                productDetails={elem}
                            />
                        )) 
                    }
                </div>
            </main>
        </>
    )
}

export default HomePage