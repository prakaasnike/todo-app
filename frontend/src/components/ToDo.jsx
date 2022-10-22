import React from "react";
import { BeakerIcon } from '@heroicons/react/24/solid'

const ToDo = ({ text, updateMode, deleteToDo }) => {
    return (
        <div>
            <div className="flex items-center justify-between space-x-2 rounded bg-white p-4">
                <div>
                    <p className="text-md text-gray-600">{text}</p>
                </div>
                <div className="flex-none">

                    <button type="button" onClick={updateMode} className="inline-flex items-center justify-center space-x-2 rounded border border-gray-100 bg-gray-100 px-3 py-2 text-sm font-semibold leading-5 text-gray-600 hover:border-gray-200 hover:bg-gray-200 hover:text-gray-600 focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-gray-100">Update</button>
                    <button type="button" onClick={deleteToDo} className="inline-flex items-center justify-center space-x-2 rounded border border-red-200 bg-red-200 px-3 py-2 text-sm font-semibold leading-5 text-red-700 hover:border-red-300 hover:bg-red-300 hover:text-red-700 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50 active:bg-red-200">Delete</button>
                </div>
            </div>
        </div>
    )
};

export default ToDo;
