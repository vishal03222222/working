
import React from 'react'
import { Dumbbell } from 'lucide-react'

const Popular = () => {
    const exercises = [
        {
          id: 1,
          trainerImg: "https://source.unsplash.com/random/?warmup",
          name: "Warm up",
          duration: 15,
          sets: 3,
          calories: 100,
        },
        {
          id: 2,
          trainerImg: "https://source.unsplash.com/random/?deadlift",
          name: "Shoulder Workout",
          duration: 20,
          sets: 4,
          calories: 150,
        },
        {
          id: 3,
          trainerImg: "https://source.unsplash.com/random/?yoga",
          name: "Yoga Session",
          duration: 55,
          sets: 5,
          calories: 250,
        },
        {
          id: 4,
          trainerImg: "https://source.unsplash.com/random/?squat",
          name: "Leg Workout",
          duration: 18,
          sets: 4,
          calories: 120,
        },
      ];
    return (
        <>
            <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
                <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                    <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
                    Our POpular excercises
                </h6>
                <div className="w-full h-auto flex items-center gap-x-5 gap-y-6 lg: flex-nowrap
                md:flex-wrap sm:flex-wrap flex-wrap">

                    <div className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full h-auto rounded-lg overflow-hidden hover: shadow ☐ hover:shadow-indigo-900/40 ease-out duration-700
                    cursor-pointer">

                        <img src="https://source.unsplash.com/random/?exercise" alt="exercise img"

                            className="w-full lg:h-[30vh] md:h-[33vh] sm:h-[38vn] h-[40vh] object-cover
                            rounded-lg" />
                            <div className='w-full h-auto py-4 px-3'>
                                <h1 className='text-lg text-white font-semibold mb-1'>
                                    Exercise</h1>
                                    
                                    <div className='w-full h-auto flex items-center gap-x-2'>
                                        <p className='text-s text-gray-300 '> 15 min</p>
                                        <span className='w-1 h-1 rounded-full bg-gray-600'/>
                                        <p className='text-s text-gray-300 '> 3 sets</p>
                                        <span className='w-1 h-1 rounded-full bg-gray-600'/>
                                        <p className='text-s text-gray-300 '> 110 calo</p>
                                       
                                                         </div>
                                     </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Popular
