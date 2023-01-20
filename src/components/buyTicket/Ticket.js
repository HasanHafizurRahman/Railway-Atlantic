import React from 'react';
import { useState } from 'react';
import ticket2 from '../../assets/ticket (2).jpg'

const Ticket = ({ ticket , setTform, setShowModal }) => {
    const {station, departure} = ticket;
    const [open, setOpen] = useState(true)
    // const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <div class="max-w-lg overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div class="px-4 py-2">
        <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">{station}</h1>
        <h2 class="text-xl font-bold font-sans text-center py-3 text-gray-700 uppercase dark:text-white">Schedules :</h2>
        
        <p class="mt-1 text-xl text-gray-600 dark:text-blue-400">
            {
                departure.length ?
                <ul>
                    <li className='text-center'>{departure[0]}</li>
                    <li className='text-center'>{departure[1]}</li>
                    <li className='text-center'>{departure[2]}</li>
                </ul>
                :
                "No Train Available"
            }
        </p>
        <p class="mt-1 text-xl text-gray-600 dark:text-gray-400">{departure.length} {departure.length > 1 ? "Trains" : "Train"} available.</p>
    </div>

    <div class="flex items-center justify-center px-4 py-2 bg-gray-900">
        <h1 class="text-lg font-bold text-white"></h1>
        
        <label 
        onClick={() => setTform(ticket)}
        // onClick={() => setShowModal(true)}
        disabled={departure.length === 0}
        
         htmlFor="my-modal-6" className="btn px-2 py-2 text-xs font-bold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Book Your Ticket
        
    </label>
    </div>
</div>
        </div>
    );
};

export default Ticket;