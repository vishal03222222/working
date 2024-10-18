import React from 'react'
import {Dumbbell} from "lucide-react";
import Secondarybtn from "../../components/button/Secondarybtn"

const About = () => {
    return (
        <>
            <div className="w-full h-auto flex items-center justify-between gap-7 1g:py-16
            md:py-14 sm:py-12 py-10 1g:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse">
                <div className="1g:w-[38%] md:w-full sm:w-full w-full h-auto relative
            overflow-hidden rounded-lg">
                </div>


                <div className="lg:w-[50%] md:w-full s:w-full w-full h-auto lg:text-start

md:text-start sm:text-start text-center">

                    <h6 className="text-lg font-medium text-gray-200 flex items-center

1g:justify-start md:justify-start sm:justify-center justify-center gap-x-2

mb-3">

                        <Dumbbell className="w-4 h-4 rotatae-45  text-indigo-600" />

                        About Us

                    </h6>

                    <h1 className="lg:text-3xl md:text-3x1 sm:text-2x1 text-xl font-semibold text-gray-200 mb-4 leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0">

                        Effortless Strength, Timely Gains: Building Better Bodies, Faster

                    </h1>

                    <p className="lg:text-base md:text-base sm:text-sm text-sm text-gray-500

font-medium mb-4">

                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid corrupti eos, enim ipsum, consequuntur ab id possimus 
                        exercitationem velit voluptas deserunt 
                        quibusdam hic harum, inventore perferendis ducimus minus. Incidunt, facere!

                    </p>
                    <Secondarybtn className={"lg:w-auto md:w-auto sm:w-full px-7 py-2 text-base font-medium uppercase justify-center"}>Become a Member</Secondarybtn>

                </div>

            </div>




        </>
    )
}

export default About
