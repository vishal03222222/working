import { Dumbbell } from 'lucide-react'
import React from 'react'
//import label from '../../components/label/Label'
import Label from '../../components/label/Label'
import input from '../../components/form/Input'
import Input from '../../components/form/Input'
import SecondaryBtn from '../../components/button/Secondarybtn'

const BMI = () => {
    return (
     <>
            <div className="w-full h-auto flex items-center 1g:py-16 md:py-14 sm:py-12 py-10 1g:px-24 md:px-16 sm:px-6 px-4">

                <div className="w-full h-auto flex items-center justify-center flex-col">

                    <h6 className="lg:text-lg md:text-lf sm:text-base text-base font-medium text-gray-200 flex items-center gap-x-2 bg-black/20 rounded-t-md py-2 px-4">

                        <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />

                        Calculate Your BMI

                    </h6>

                    <div className="w-full h-auto flex items-end justify-center ☐ bg-blac/20 rounded-md
                     1g:gap-5 md:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4flex-wrap">
                        <div className='lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2'>
                            <Label htmlfor="weight" >weight (kg)</Label>
                            <Input
                            id="weight"
                            name="weight"
                            type="text"
                            palceholder="enter your weight"/>
                        </div>
                        <div className='lg:w-[25%] md:w-[40%] sm:w-[50%] w-full h-auto p-2'>
                            <Label htmlfor="height" >height (kg)</Label>
                            <Input
                            id="height"
                            name="height"
                            type="text"
                            palceholder="enter your height"/>
                        </div>
                        <div className='lg:w-[20%] md:w-[35%] sm:w-[50%] w-full h-auto p-2'>
                            <SecondaryBtn
                            type="submit"
                            className="w-full h-11 justify-center">
                                calculate BMI


                            </SecondaryBtn>
                            
                           
                        </div>
                        
                        

                    </div>
                    

                </div>
                <div />
            </>
            )
};
 export default BMI
