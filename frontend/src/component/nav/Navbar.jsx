import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavLink, Outlet, Link } from "react-router-dom";
import { productSelector, toggleAddProductForm } from '../../redux/productSlice/productSlice';


// navigation item
const navigationItems = [
    { name: "Products", href:"/", current:true},
    { name: "Add Product", href:"/add-product", current:false},
]

const Navbar = () => {

    const dispatch = useDispatch();


    return (
        <>
            <nav className='bg-gray-400'>
                <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                    <div className='relative flex h-16 items-center justify-between'>
                        <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                            {/* Mobile view */}
                        </div>

                        {/* desktop view */}
                        <div className='flex flex-1 items-center sm:items-stretch sm:justify-start'>
                            <div className='flex flex-shrink-0 items-center'>
                                <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpkBy8JRJVTRayqtduriksP5agMpCwjSKArQ&s" 
                                    alt="company logo" 
                                    className='h-10 w-auto'
                                />
                            </div>
                            <div className='hidden sm:ml-8 sm:block'>
                                <div className='flex space-x-8'>   
                                    <Link
                                        key={navigationItems[0].name}
                                        to={navigationItems[0].href}
                                        className={`text-white  hover:bg-green-200 hover:text-black
                                            rounded-md px-3 py-1 text-xl font-medium` 
                                        }
                                    >
                                        {navigationItems[0].name}
                                    </Link>
                                

                                    <button
                                        onClick={() => dispatch(toggleAddProductForm())}
                                    >
                                        <Link
                                            key={navigationItems[1].name}
                                            to={navigationItems[1].href}
                                            className={`text-white  hover:bg-green-200 hover:text-black
                                                rounded-md px-3 py-1 text-xl font-medium` 
                                            }
                                            
                                        >
                                            {navigationItems[1].name}
                                        </Link>
                                    </button>
                                </div>
                                
                            </div>
                        </div>

                        <div className="m-2 flex gap-4 p-1 font-medium text-white rounded-md text-xl">
                            <div className='flex justify-center items-center text-center'>SOPAN BHERE</div>
                            <div>
                                <img 
                                    src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" 
                                    alt="user logo" 
                                    className='h-10 w-auto'
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </nav>

            <Outlet/>
        </>
    )
}

export default Navbar