
import React from "react";
import { Dumbbell, MoveRight } from "lucide-react";
import { Link } from "react-router-dom"; // Keep this import
import SecondaryLink from "../../components/linkbtn/Secondarylink";

import TertiaryLink from "../../components/linkbtn/Teritarylink";

const Services = () => {
  const services = [
    {
      id: 1,
      serviceImg: "https://source.unsplash.com/random/?dumbbell",
      icon: Dumbbell,
      title: "Fitness",
      desc: "Get ready to burn off some serious fat with our high-quality products.",
      link: "#services",
    },
    {
      id: 2,
      serviceImg: "https://source.unsplash.com/random/?yoga",
      icon: Dumbbell,
      title: "Yoga",
      desc: "Get ready to burn off some serious fat with our high-quality products.",
      link: "#services",
    },
    {
      id: 3,
      serviceImg: "https://source.unsplash.com/random/?gym",
      icon: Dumbbell,
      title: "Gym",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 4,
      serviceImg: "https://source.unsplash.com/random/?aerobics",
      icon: Dumbbell,
      title: "Aerobics",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 5,
      serviceImg: "https://source.unsplash.com/random/?boxing",
      icon: Dumbbell,
      title: "Boxing",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 6,
      serviceImg: "https://source.unsplash.com/random/?yoga",
      icon: Dumbbell,
      title: "Yoga",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 7,
      serviceImg: "https://source.unsplash.com/random/?gym",
      icon: Dumbbell,
      title: "Gym",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
    {
      id: 8,
      serviceImg: "https://source.unsplash.com/random/?zumba",
      icon: Dumbbell,
      title: "Zumba",
      desc: "Get ready to burn off some serious fat with our high quality products.",
      link: "#services",
    },
  
  ];

  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Dumbbell className="w-4 h-4 -rotate-45 text-indigo-600" />
          Our Services
        </h6>
        <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[50vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-x1 bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500"
              style={{
                backgroundImage: `url(${service.serviceImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
              <div className="w-full h-full flex items-center justify-center flex-col text-white p-4 z-50">
                <div className="w-14 h-14 rounded-full bg-indigo-600/20 border-4 border-indigo-600/80 flex items-center justify-center mb-5">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl text-gray-100 font-semibold text-center mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-100 font-normal text-center mb-4">
                  {service.desc}
                </p>
                <TertiaryLink link={service.link}>
                  Read More <MoveRight className="w-4 h-4" />
                </TertiaryLink>
              </div>
            </div>
          ))}
        </div>
        <SecondaryLink link="/services" 
        className="lg:w-[15%] md:w-[50%] sn:w-[75%] w-[85%] justify-center">
          View all Services
          <MoveRight className="w-4 h-4"/>
          </SecondaryLink>
      </div>
    </>
  );
};

export default Services;
