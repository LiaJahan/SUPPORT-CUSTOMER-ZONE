import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Cards = ({
    fetchDataApi,
    tasks,
    setTasks,
    resolvedTasks,
    setResolvedTasks,
    inProgressCount,
    setInProgressCount,
    resolvedCount,
    setResolvedCount
}) => {

    const [api, setApi] = useState([]);

    useEffect(() => {
        fetchDataApi.then(data => setApi(data));
    }, [fetchDataApi]);

    const handleAddToTasks = (ticket) => {
        if (!tasks.some(t => t.id === ticket.id)) {
            setTasks([...tasks, ticket]);
            setInProgressCount(prev => prev + 1);
            toast.success(`${ticket.title} added to Task Status`);
        }
    };

    const handleComplete = (task) => {
    setTasks(prev => prev.filter(t => t.id !== task.id)); // remove from tasks
    setResolvedTasks(prev => [...prev, task]); // add to resolved
    setInProgressCount(prev => prev - 1);
    setResolvedCount(prev => prev + 1);
    toast.info(`${task.title} Completed!`);
};


    return (
        <div className="w-full flex flex-col lg:flex-row justify-between gap-6 sm:gap-10">

            {/* LEFT — Tickets */}
            <div className="flex-1 px-2 sm:px-0">
                <h2 className="mb-5 text-3xl sm:text-5xl font-semibold">Customers Tickets</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {api.map(ticket => (
                        <div key={ticket.id} className="card w-full bg-base-100 shadow-sm">
                            <div className="card-body">
                                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2'>
                                    <h2 className='font-bold text-lg sm:text-xl'>{ticket.title}</h2>
                                    <button
                                        className='btn bg-green-400 rounded-full text-sm sm:text-base flex items-center gap-2'
                                        onClick={() => handleAddToTasks(ticket)}
                                    >
                                        <img
                                            className='h-4 w-4 sm:h-5 sm:w-5'
                                            src="https://i.ibb.co/9zq5FQf/Ellipse-22.png"
                                            alt=""
                                        />
                                        {ticket.status}
                                    </button>
                                </div>

                                <p className='text-gray-600 mb-2 text-sm sm:text-base'>
                                    {ticket.description}
                                </p>

                                <div className='flex flex-wrap justify-between text-sm sm:text-base'>
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

            {/* RIGHT — Task Status + Resolved Tasks */}
            <div className="w-full lg:w-1/3 mt-6 lg:mt-0 flex flex-col gap-6">

                <div>
                    <h2 className="text-3xl sm:text-5xl font-semibold">Task Status</h2>
                    <div className="mt-5 flex flex-col gap-4">
                        {tasks.map(task => (
                            <div key={task.id} className="card bg-base-100 shadow-sm p-4 flex justify-between items-center">
                                <span className="font-semibold">{task.title}</span>
                                <button
                                    className="btn bg-green-600 text-white"
                                    onClick={() => handleComplete(task)}
                                >
                                    Complete
                                </button>
                            </div>
                        ))}
                        {tasks.length === 0 && <p className="text-gray-500 text-sm italic">No tasks added yet</p>}
                    </div>
                </div>

                {/* Resolved Tasks */}
                <div>
                    <h2 className="text-3xl sm:text-5xl font-semibold">Resolved Tasks</h2>
                    <div className="mt-5 flex flex-col gap-4">
                        {resolvedTasks.map(task => (
                            <div key={task.id} className="card bg-base-100 shadow-sm p-4">
                                <span className="font-semibold">{task.title}</span>
                            </div>
                        ))}
                        {resolvedTasks.length === 0 && <p className="text-gray-500 text-sm italic">No resolved tasks yet</p>}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Cards;
