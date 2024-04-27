import React, {useState} from 'react'

const updateProductForm = () => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

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
                onClick={toggleModal}
                >
                Update product
                </button>
            </div>

            {/* Main modal */}
            {showModal && (
                <div
                    id="updateProductModal"
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                    onClick={toggleModal}
                >
                    <div
                        className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow sm:p-5"
                        onClick={(e) => e.stopPropagation()}
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
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                    onClick={toggleModal}
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
                            <form onSubmit={handleSubmit}>
                                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                {/* Form fields */}
                                </div>
                                <div className="flex items-center space-x-4">
                                {/* Submit buttons */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default updateProductForm;
