import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { toggleUpdateProductForm } from '../../redux/productSlice/productSlice';

const UpdateProductForm = () => {

    const dispatch = useDispatch();

    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission
        console.log("product updated !");
    };

    return (
        <>
            {/* Modal toggle button */}
            <div className="flex justify-center m-5">
                <button
                    id="updateProductButton"
                    className="block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    type="button"
                >
                    Update product
                </button>
            </div>

            {/* Main modal */}

                <div
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                >
                    <div
                        className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow sm:p-5"
                    >
                        {/* Modal content */}
                        <div className="relative p-4">
                            {/* Modal header */}
                            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                                <h3 className="text-lg font-semibold">
                                    Update Product
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent 
                                    hover:bg-gray-200 hover:text-gray-900 rounded-lg 
                                    text-sm p-1.5 ml-auto inline-flex items-center"
                                    onClick={() => dispatch(toggleUpdateProductForm())}
                                    
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>


                            {/* Modal body */}
                            <form onSubmit={handleSubmit} className='p-4 md:p-5'>
                                <div className='grid gap-4 mb-4 grid-cols-2'>
                                    <div className='col-span-12'>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            id="name" 
                                            required
                                            className="bg-gray-50 border border-gray-300 
                                                text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                                                focus:border-primary-600 block w-full p-2.5 
                                                dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 
                                                dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500
                                            " 
                                            placeholder="Type product name" 
                                            value={title}
                                            onChange={(e) => settitle(e.target.value)}
                                        />
                                    </div>
                                    
                                    <div className="col-span-1 ">
                                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                        <input 
                                            type="number" 
                                            name="price" 
                                            id="price" 
                                            className="bg-gray-50 border 
                                                border-gray-300 text-gray-900 text-sm rounded-lg 
                                                focus:ring-primary-600 focus:border-primary-600 
                                                block w-full p-2.5 dark:bg-gray-600 
                                                dark:border-gray-500 dark:placeholder-gray-400 
                                                dark:text-white dark:focus:ring-primary-500 
                                                dark:focus:border-primary-500
                                            " 
                                            placeholder="price" 
                                            required
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-span-6">
                                        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                                        <input 
                                            type="number" 
                                            name="rating" 
                                            id="rating" 
                                            min="0"
                                            max="5"
                                            className="bg-gray-50 border 
                                                border-gray-300 text-gray-900 text-sm rounded-lg 
                                                focus:ring-primary-600 focus:border-primary-600 
                                                block w-full p-2.5 dark:bg-gray-600 
                                                dark:border-gray-500 dark:placeholder-gray-400 
                                                dark:text-white dark:focus:ring-primary-500 
                                                dark:focus:border-primary-500
                                            " 
                                            placeholder="rating between 0-5" 
                                            required
                                            value={rating}
                                            onChange={(e) => setRating(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-span-10">
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                                        <textarea 
                                            id="description" 
                                            rows="4" 
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
                                            border border-gray-300 focus:ring-blue-500 focus:border-blue-500 
                                            dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 
                                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                            placeholder="Write product description here"
                                        
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        >
                                        </textarea>                    
                                    </div>
                                </div>

                                {/* update button */}
                                <button 
                                    type='submit' 
                                    className='text-black inline-flex items-center 
                                        bg-blue-200 hover:bg-blue-300 
                                        focus:outline-none focus:ring-blue-300 font-medium 
                                        rounded-lg text-sm px-5 py-2.5 text-center 
                                        dark:bg-blue-300 dark:hover:bg-blue-500
                                        dark:focus:ring-blue-800
                                    '
                                >
                                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
                                    </svg>
                                    Update Product
                                </button>
                        </form>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default UpdateProductForm;
