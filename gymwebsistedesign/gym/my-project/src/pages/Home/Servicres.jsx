const Services=()=>{
    return(
        <>
        <div className="w-full h-auto flex items-ceenter justify-center justify-center flex-col lg:py-16
        md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
            <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600"/>
                Our services
            </h6>
            <div className="w-full h-auto flex items-center justify-center gap-x-4 mgapy-5 flex-wrap mb-10">
                <div className="w h-auto rounded-x1 bg-black relative overflow-hidden cursor-pointer
                z-qo hover:-translater-y-2 ease-out duration-500
                 "style={{
                    backgroundImage:`url(${data.bgImg})`,
                    backgroundSize:"cover",
                    backgroundPosition:"center",
                    backgroundRepeat:"no-repeat"
                 }}></div>
            </div>
        </div>
        </>
    )
}

export default Services
