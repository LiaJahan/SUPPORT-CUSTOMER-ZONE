import React, { useEffect, useState } from 'react';

const Cards = ({ fetchDataApi }) => {
    const [api, setApi] = useState([]);

    useEffect(() => {
        fetchDataApi.then((data) => setApi(data));
    }, [fetchDataApi]);

    return (
        <div className="w-full flex flex-col lg:flex-row justify-between gap-6 sm:gap-10">
            
            {/* left side : (customer tickets) */}
            <div className="flex-1 px-2 sm:px-0">
                <h2 className="mb-5 text-3xl sm:text-5xl font-semibold">Customers Tickets</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {api.map((ticket) => (
                        <div key={ticket.id} className="card w-full bg-base-100 shadow-sm">
                            <div className="card-body">
                                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2'>
                                    <h2 className='font-bold text-lg sm:text-xl'>{ticket.title}</h2>
                                    <button className='btn bg-green-400 rounded-full text-sm sm:text-base flex items-center gap-2'>
                                        <img className='h-4 w-4 sm:h-5 sm:w-5' src="https://i.ibb.co/9zq5FQf/Ellipse-22.png" alt="" />
                                        {ticket.status}
                                    </button>
                                </div>
                                <p className='text-gray-600 mb-2 text-sm sm:text-base'>{ticket.description}</p>
                                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm sm:text-base'>
                                    <p>{ticket.serial}</p>
                                    <p className='text-red-600'>{ticket.priority}</p>
                                    <p><strong>{ticket.customer}</strong></p>
                                    <p>{ticket.createdAt}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* right task (task status) */}
            <div className="w-full lg:w-1/3 mt-6 lg:mt-0 px-2 sm:px-0">
                <h2 className="text-3xl sm:text-5xl font-semibold">Task Status</h2>
                <div className="mt-5 p-5 bg-white shadow rounded-xl w-full sm:w-auto">
                    <div className="card bg-base-100 shadow-sm w-full">
                        <div className="card-body">
                            <h2 className='text-center font-bold text-2xl sm:text-3xl mb-4'>Title</h2>
                            <button className="btn bg-green-600 text-white font-bold w-full sm:w-auto">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cards;
