import React from 'react';
import Coach from './Coach';


const Coaches = () => {
    const coaches = [
        {
            _id: 1,
            name: "Sleeper",
            description: "",
            img: "https://qph.fs.quoracdn.net/main-qimg-9f9ba69efdfd47b5d50b6b9b158c2678-c"
        },
        {
            _id: 2,
            name: "Business Class",
            description: "",
            img: "https://tse3.mm.bing.net/th?id=OIP.1oOqbCyx0sgtgaXv_cI5NwHaFj&pid=Api&P=0"
        },
        {
            _id: 3,
            name: "Economy Class",
            description: "",
            img: "https://dereklow.co/content/images/2015/09/60-resized.jpg"
        },
    ]
    return (
        <div className='my-28'>
            <div>
            <h1 className="text-3xl py-2 font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our <span className="text-blue-500"> Coaches</span></h1>
            <div className="flex justify-center mx-auto mt-2 mb-6">
                    <span className="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-green-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-yellow-500 rounded-full"></span>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    coaches.map(coach =><Coach
                    key={coach._id}
                    coach={coach}
                    ></Coach>)
                }
            </div>
        </div>
    );
};

export default Coaches;