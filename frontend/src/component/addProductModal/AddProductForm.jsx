import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewProduct, productSelector, toggleAddProductForm } from '../../redux/productSlice/productSlice';
import { nanoid } from '@reduxjs/toolkit';
import { Navigate, redirect, useNavigate } from 'react-router-dom';



const AddProductForm = () => {
    
    const dispatch = useDispatch();
    const productState = useSelector(productSelector);
    
    const navigateTo = useNavigate();

    const [title, settitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log({id:nanoid(), title, description, price, rating});
        dispatch(addNewProduct({id:nanoid(), title, description, price, rating}))
        navigateTo('/')
        setDescription('')
        setRating('')
        setPrice('')
        settitle('')
    };

    const handleCancelForm = () => {
        dispatch(toggleAddProductForm());
        navigateTo('/');        
    }

    return (
        <>
            {/* Main modal */}
            { productState.isAddProductFormOpen && (
                <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow">
                    {/* Modal header */}
                        <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold">
                                Create New Product
                            </h3>
                            <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleCancelForm}
                            >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
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
                                {/* <div className='col-span-2'>
                                    <label htmlFor='imageUrl' className='block mb-2 font-medium text-gray-900 dark:text-white'>Image Url</label>
                                    <input 
                                        type="text"
                                        name='imageUrl'
                                        id='imageUrl'
                                        placeholder='Image Url'
                                        required
                                        className="bg-gray-50 border 
                                            border-gray-300 text-gray-900 text-sm rounded-lg 
                                            focus:ring-primary-600 focus:border-primary-600 
                                            block w-full p-2.5 dark:bg-gray-600 
                                            dark:border-gray-500 dark:placeholder-gray-400 
                                            dark:text-white dark:focus:ring-primary-500 
                                            dark:focus:border-primary-500
                                        "
                                    />
                                </div> */}
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
                                Add new product
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}


export default AddProductForm