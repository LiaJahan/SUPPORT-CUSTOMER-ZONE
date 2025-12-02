import React, { useEffect, useState } from 'react';

const Cards = ({ fetchDataApi }) => {
    const [api, setApi] = useState([]);

    useEffect(() => {
        fetchDataApi.then((data) => setApi(data));
    }, [fetchDataApi]);

    return (
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10">

            {/* left side card */}
            <div className="flex-1">
                <h2 className="mb-5 text-5xl font-semibold">Customers Tickets</h2>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {api.map((ticket) => (

                        <div key={ticket.id} className="card bg-base-100 shadow-sm w-full">
                            <div className="card-body">
                                <div className='flex items-center justify-between'>
                                    <h2 className='font-bold text-xl'>{ticket.title}</h2>
                                    <button className='btn bg-green-400 rounded-4xl'><img src="https://i.ibb.co/9zq5FQf/Ellipse-22.png" alt="" />{ticket.status}</button>
                                </div>
                                <p className='text-gray-600 mb-2'>{ticket.description}</p>
                                <div className='flex items-center justify-around'>
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

            {/* right side (task card) */}
            <div className="w-full lg:w-1/3">
                <h2 className="text-5xl font-semibold">Task Status</h2>

                {/* Example content */}
                <div className="mt-5 p-5 bg-white shadow rounded-xl">
                    <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <h2 className='text-center font-bold text-3xl'>Title </h2>
    
    <div>
      <button className="btn bg-green-600 text-white font-bold btn-block">Subscribe</button>
    </div>
  </div>
</div>
                </div>
            </div>

            
        </div>
    );
};

export default Cards;
