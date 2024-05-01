import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct, deleteProduct, toggleUpdateProductForm } from "../../redux/productSlice/productSlice";


const ProductDetail = (props) => {

    // console.log(props.productDetails);
    const { id, title, price, description, category, image, rating} = props.productDetails;
    const dispatch = useDispatch();

    // update product handler 
    const updateProductHandler = () => {
        dispatch(updateProduct(id));
    }

    // delete product handler
    const deleteProductHandler = () =>{
        dispatch(deleteProduct(id));
    }


    return (
        <>
            {/* Product details container */}
            <div className=' text-black h-81 w-80 shadow-lg border rounded-md bg-gray-100'>
                {/* image container */}
                <div className=' text-black flex justify-center ml-2 mt-2 h-[60%] w-[95%] bg-white rounded-sm'>
                    <img 
                        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUWBBpH6X7jIPhhDTLFQVdcim06JqsZH8rQ&s"
                        src={image}
                        alt="Product img" 
                        width='100%' 
                        height="100%"
                    />
                </div>

                {/* title, price and description */}
                <div className=' items-center h-[25%]'>
                    {/* titile and price */}
                    <div className='flex justify-between px-4 py-6 font-bold'>
                        <span>{title}</span>
                        {/* <span>Price: {price}</span> */}
                    </div>
                    <div className='flex justify-between px-4 py-4 font-bold'>
                        {/* <span>{title}</span> */}
                        <span>Price: {price}</span>
                    </div>

                    {/* description */}
                    <div className='flex justify-start px-4 overflow-y-hidden max-h-1'>
                        <p>{description}</p>
                    </div>
                </div>

                {/* rating star, update and delete button */}
                <div className='flex justify-between px-4 py-2'>
                    {/* start */}
                    <div className='text-yellow-500 font-extrabold'>* * * * *</div>

                    {/* update and delete button */}
                    <div className='flex gap-4 '>
                        <button 
                            className='bg-green-300 rounded-md text-black p-1'
                            onClick={() => dispatch(toggleUpdateProductForm())}
                        >
                            Update
                        </button>
                        <button 
                            className='bg-red-300 rounded-md p-1 text-black'
                            onClick={() => dispatch(deleteProduct(id))}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail