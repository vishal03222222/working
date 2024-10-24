import React from 'react'
import { Link, MailOpen, Phone } from 'lucide-react'
import { Dumbbell } from 'lucide-react'

const Footer = () => {
    return (
        <>
            <div className="w-full h-auto flex items-center justify-center bg-black/30 flex-colpy-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
                <div className="w-full h-auto flex items-start lg:justify-between md:justify-between sm:justify-center justify-center gap-5 mb-10 flex-wrap">

                    <div className="lg:w-[30%] md:w-[30%] sm:w-full w-full h-auto p-2 flex 
                    lg:items-start md:items-start sm:items-center items-center flex-col justify-center">
                        <Link className="w-fit h-auto text-3x1text-indigo-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative mb-3">
                            G<span className="text-xl font-bold text-gray-300">Y</span>M
                            <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-[46%] translate-x-[-50%]" />
                        </Link>
                        <p className="text-base text-gray-500 font-normal mb-4 lg:text-start md:text-start sm:text-center text-center">
                            orem ipsum, dolor sit amet consectetur adipisicing elit.
                            Impedit quae quasi vel, qui delectus voluptate? Maiores aliquid,
                            at sint itaque neque et velit quas in!
                        </p>
                        <div className="w-full h-auto space-y-2">
                            <div className="w-full h-auto flex items-center lg:justify-start 
                            md:justify-start sm:justify-center justify-center gap-x-2text-gray-400 hover: text-indigo-600 ease-out duration-300 cursor-pointer">
                                <MapPin className="w-5 h-5" />
                                <p className="text-base">123 Main Street, Anytown. USA</p>
                            </div>

                            <div className="w-full h-auto flex items-center lg:justify-start 
                            md:justify-start sm:justify-center justify-center gap-x-2text-gray-400 hover: text-indigo-600 ease-out duration-300 cursor-pointer">
                                <MailOpen className="w-5 h-5" />
                                <p className="text-base">gtechgym@gmail.com</p>
                            </div>

                            <div className="w-full h-auto flex items-center lg:justify-start 
                            md:justify-start sm:justify-center justify-center gap-x-2text-gray-400 hover: text-indigo-600 ease-out duration-300 cursor-pointer">
                                <Phone className="w-5 h-5" />
                                <p className="text-base">+1 123 456 7890</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
