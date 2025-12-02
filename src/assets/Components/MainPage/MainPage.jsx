import React from 'react';
import Cards from './Cards';


const MainPage = ({fetchDataApi}) => {
    return (
        <div className='bg-[#f5f5f5] mx-auto max-w-full p-10 text-center'>
            <div className='flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-10'>

                {/* box - purple */}
                <div
                    className='w-full sm:w-1/3 h-72 sm:h-80 rounded-xl flex flex-col items-center justify-center text-white  font-bold'
                    style={{
                        backgroundImage: `linear-gradient(125.07deg, rgba(99, 46, 227, 0.8), rgba(159, 98, 242, 0.8)), url('https://i.ibb.co/qMjMmhth/vector1.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundBlendMode: 'overlay',
                    }}
                >
                    <h3 className='text-2xl mt-5'>In-Progress</h3>
                    <h1 className='text-7xl'>0</h1>
                </div>


                {/* box - green */}
                <div
                    className='w-full sm:w-1/3 h-72 sm:h-80 rounded-xl flex flex-col items-center justify-center text-white text-2xl font-bold'
                    style={{
                        backgroundImage: `linear-gradient(125.07deg, rgba(25, 255, 15, 0.8), rgba(34, 59, 70, 0.8)), url('https://i.ibb.co/qMjMmhth/vector1.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundBlendMode: 'overlay',
                    }}
                >
                    <h3 className='text-2xl mt-5'>Resolved</h3>
                    <h1 className='text-7xl'>0</h1>
                </div>

            </div>

            <div className='mt-10 text-5xl font-semibold w-full text-left px-30 py-5'>
                    <Cards fetchDataApi={fetchDataApi}></Cards>
            </div>

        </div>
    );
};

export default MainPage;
