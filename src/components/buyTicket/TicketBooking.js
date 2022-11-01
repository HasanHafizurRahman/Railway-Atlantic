import React from 'react';
import { useState } from 'react';
import AvailableTicket from './AvailableTicket';
import BuyTicket from './BuyTicket';


const TicketBooking = () => {
    const [date , setDate] = useState(new Date());
    return (
        <div>
            <BuyTicket date={date} setDate={setDate} />
            <AvailableTicket date={date} />
        </div>
    );
};

export default TicketBooking;