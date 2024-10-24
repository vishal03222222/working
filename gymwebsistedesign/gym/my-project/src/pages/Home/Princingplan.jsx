import { CheckSquare } from 'lucide-react'
import React from 'react'
import PrimaryBtn from '../../components/button/Primarybtn'

const Princingplan = () => {
    return (
        <>
            <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
                <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                    <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
                    Our pricing plan
                </h6>
                //basicplan
                <div className="w-full h-auto flex justify-center gap-x-5 gap-y-8 flex-wrap">
                    <div className="lg:w-[28%] md:w-full sm:w-full w-full h-auto px-18 lg:py-12 md:py-12 sm:py-10 py-10 bg-black/18 rounded-1g border-6 border-gray-600
                hover:border-indigo-600/40 ☐ hover:bg-gray-600/10 ease-out duration-700
                cursor-pointer">

                        <h2 className="lg:text-4x1 md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5">

                            Basic Plan

                        </h2>
                        <h1 className='lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide'>
                            $165.00
                            <span className='lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium traking-normal'>Month</span>
                        </h1>
                        <hr className='border-gray-600/40 my-7' />
                        <div className='w-full h-auto space-y-2 mb-8'>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-5 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:tect-base text-sm'>
                                    get Access to all gym classes
                                </p>
                            </div>
                            <div className='w-full h-auto space-y-2 mb-8'>
                                <div className='w-full h-auto flex items-start gap-x-2'>
                                    <CheckSquare className='w-5 h-5 text-indigo-600' />
                                    <p className='text-gray-400 lg:text-base md:text-base sm:tect-base text-sm'>
                                        unlimited  yoga classes
                                    </p>
                                </div>
                                <div className='w-full h-auto space-y-2 mb-8'>
                                    <div className='w-full h-auto flex items-start gap-x-2'>
                                        <CheckSquare className='w-5 h-5 text-indigo-600' />
                                        <p className='text-gray-400 lg:text-base md:text-base sm:tect-base text-sm'>
                                            use of lockers
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <PrimaryBtn className="w-full h-full text-lg justify-ceneter font-semibold tracker-wider mb-3 uppercase">

                        </PrimaryBtn>
                    </div>
                   //premium paln
                    <div className="lg:w-[32%] md:w-full sm:w-full w-full h-auto px-18 lg:py-12 md:py-12 sm:py-10 py-10 bg-indigo-600/10 rounded-1g border-[6px] 
                border-indigo-600  ease-out duration-700 cursor-pointer relative">
                     <div className='absolute -top-6 left-[50%] translate-x[-50%] bg-indigo-600 py-2 px-5 
                     rounded-full text-base font-medium text-white'>
                        REcommended
                     </div>

                        <h2 className="lg:text-4x1 md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5">
                            Premium plan
                        </h2>
                        <h1 className='lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide'>
                            $200.00
                            <span className='lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium traking-normal'>Month</span>
                        </h1>
                        <hr className='border-gray-600/40 my-7' />
                        <div className='w-full h-auto space-y-2 mb-8'>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-5 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:tect-base text-sm'>
                                    get Access to all gym classes
                                </p>
                            </div>
                            <div className='w-full h-auto space-y-2 mb-8'>
                                <div className='w-full h-auto flex items-start gap-x-2'>
                                    <CheckSquare className='w-5 h-5 text-indigo-600' />
                                    <p className='text-gray-400 lg:text-base md:text-base sm:tect-base text-sm'>
                                        unlimited  yoga classes
                                    </p>
                                </div>
                                <div className='w-full h-auto space-y-2 mb-8'>
                                    <div className='w-full h-auto flex items-start gap-x-2'>
                                        <CheckSquare className='w-5 h-5 text-indigo-600' />
                                        <p className='text-gray-400 lg:text-base md:text-base sm:tect-base text-sm'>
                                            use of lockers
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <PrimaryBtn className="w-full h-full text-lg justify-ceneter font-semibold tracker-wider mb-3 uppercase">

                        </PrimaryBtn>
                    </div>
                    //vipplan
                    <div className="lg:w-[28%] md:w-full sm:w-full w-full h-auto px-18 lg:py-12 md:py-12 sm:py-10 py-10 bg-black/18 rounded-1g border-6 border-gray-600
                hover:border-indigo-600/40 ☐ hover:bg-gray-600/10 ease-out duration-700 cursor-pointer">

                        <h2 className="lg:text-4x1 md:text-4xl sm:text-3xl text-3xl text-white font-semibold mb-5">

                            VIP Plan

                        </h2>
                        <h1 className='lg:text-5xl md:text-5xl sm:text-4xl text-4xl text-indigo-600 font-bold mb-3 tracking-wide'>
                            $365.00
                            <span className='lg:text-xl md:text-xl sm:text-lg text-base text-gray-300 font-medium traking-normal'>/Month</span>
                        </h1>
                        <hr className='border-gray-600/40 my-7' />
                        <div className='w-full h-auto space-y-2 mb-8'>
                            <div className='w-full h-auto flex items-start gap-x-2'>
                                <CheckSquare className='w-5 h-5 text-indigo-600' />
                                <p className='text-gray-400 lg:text-base md:text-base sm:tect-base text-sm'>
                                    get Access to all gym classes
                                </p>
                            </div>
                            <div className='w-full h-auto space-y-2 mb-8'>
                                <div className='w-full h-auto flex items-start gap-x-2'>
                                    <CheckSquare className='w-5 h-5 text-indigo-600' />
                                    <p className='text-gray-400 lg:text-base md:text-base sm:tect-base text-sm'>
                                        unlimited  yoga classes
                                    </p>
                                </div>
                                <div className='w-full h-auto space-y-2 mb-8'>
                                    <div className='w-full h-auto flex items-start gap-x-2'>
                                        <CheckSquare className='w-5 h-5 text-indigo-600' />
                                        <p className='text-gray-400 lg:text-base md:text-base sm:tect-base text-sm'>
                                            use of lockers
                                        </p>
                                    </div>
                                    <div className='w-full h-auto space-y-2 mb-8'>
                                    <div className='w-full h-auto flex items-start gap-x-2'>
                                        <CheckSquare className='w-5 h-5 text-indigo-600' />
                                        <p className='text-gray-400 lg:text-base md:text-base sm:tect-base text-sm'>
                                            Acess to pool 6 days a week
                                        </p>
                                    </div>
                                    <div className='w-full h-auto space-y-2 mb-8'>
                                    <div className='w-full h-auto flex items-start gap-x-2'>
                                        <CheckSquare className='w-5 h-5 text-indigo-600' />
                                        <p className='text-gray-400 lg:text-base md:text-base sm:tect-base text-sm'>
                                         free gym t-shirt
                                        </p>
                                    </div>
                                    <div className='w-full h-auto space-y-2 mb-8'>
                                    <div className='w-full h-auto flex items-start gap-x-2'>
                                        <CheckSquare className='w-5 h-5 text-indigo-600' />
                                        <p className='text-gray-400 lg:text-base md:text-base sm:tect-base text-sm'>
                                            30% discount on all gym products
                                        </p>
                                    </div>
                                     <div className='w-full h-auto space-y-2 mb-8'>
                                    <div className='w-full h-auto flex items-start gap-x-2'>
                                        <CheckSquare className='w-5 h-5 text-indigo-600' />
                                        <p className='text-gray-400 lg:text-base md:text-base sm:tect-base text-sm'>
                                            Personal trainer for 3 days a week
                                        </p>
                                    </div>
                                </div>

                            </div>
                            </div>

                        </div>
                        <PrimaryBtn className="w-full h-full text-lg justify-ceneter font-semibold tracker-wider mb-3 uppercase">

                        </PrimaryBtn>
                    </div>
                </div>
            </div>

            </div>
            </div>
            </div>


        </>
    )




}

export default Princingplan
