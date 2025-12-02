import React from 'react';
import Cards from './Cards';

const MainPage = ({ fetchDataApi }) => {
    return (
        <div className='bg-[#f5f5f5] mx-auto max-w-full p-4 sm:p-10 text-center'>
            
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-around gap-4 sm:gap-10'>
                
                {/* Box (purple) */}
                <div
                    className='w-full sm:w-1/3 h-72 sm:h-80 rounded-xl flex flex-col items-center justify-center text-white font-bold px-2 sm:px-0'
                    style={{
                        backgroundImage: `linear-gradient(125.07deg, rgba(99, 46, 227, 0.8), rgba(159, 98, 242, 0.8)), url('https://i.ibb.co/qMjMmhth/vector1.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundBlendMode: 'overlay',
                    }}
                >
                    <h3 className='text-2xl mt-5'>In-Progress</h3>
                    <h1 className='text-7xl sm:text-7xl text-5xl'>0</h1>
                </div>

                {/* box (greem) */}
                <div
                    className='w-full sm:w-1/3 h-72 sm:h-80 rounded-xl flex flex-col items-center justify-center text-white font-bold text-2xl px-2 sm:px-0'
                    style={{
                        backgroundImage: `linear-gradient(125.07deg, rgba(25, 255, 15, 0.8), rgba(34, 59, 70, 0.8)), url('https://i.ibb.co/qMjMmhth/vector1.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundBlendMode: 'overlay',
                    }}
                >
                    <h3 className='text-2xl mt-5'>Resolved</h3>
                    <h1 className='text-7xl sm:text-7xl text-5xl'>0</h1>
                </div>
            </div>

            {/* Cards Section */}
            <div className='mt-10 w-full text-left px-2 sm:px-30 py-5'>
                <Cards fetchDataApi={fetchDataApi} />
            </div>
        </div>
    );
};

export default MainPage;
