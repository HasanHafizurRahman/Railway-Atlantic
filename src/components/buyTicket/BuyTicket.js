import React from 'react';
import Ticket1 from "../../assets/train3.jpg"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const BuyTicket = ({date, setDate}) => {
    
    return (
        <div>
            <header className="bg-white dark:bg-gray-900">
            <h1 class="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                    <span class="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
                        Book Your 
                    </span>

                    <span class="ml-4 text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                         Seat
                    </span>
                </h1>

    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
         
  

            <DayPicker
            mode='single'
            selected={date}
            onSelect={setDate}
            
            />
  
        </div>
             
       
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img className="object-cover w-full h-full max-w-2xl rounded-md" src={Ticket1} alt="apple watch photo" />
        </div>
    </div>
</header>

        </div>
    );
};

export default BuyTicket;