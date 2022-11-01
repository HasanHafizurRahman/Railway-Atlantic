import React from 'react';
import { format } from 'date-fns';
import { useState } from 'react';
import { useEffect } from 'react';
import Ticket from './Ticket';

const AvailableTicket = ({date}) => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
      fetch('tickets.json')
      .then(res => res.json())
      .then(data => setTickets(data))
    }, [])
    
    return (
        <div>
            <p className='text-xl text-center font-mono text-black-900'>You selected ticket for {format(date, 'PP')}.</p>
            <h1 class="text-3xl font-bold text-center my-4 font-mono text-gray-800 uppercase dark:text-white">Departure Time & Destination .</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
            {
                tickets.map(ticket =><Ticket
                key={ticket._id}
                ticket={ticket}
                ></Ticket>)
            }
        </div>
        
        </div>
    );
};

export default AvailableTicket;