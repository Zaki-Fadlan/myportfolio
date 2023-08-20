import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
const workSlides = {
  data: [
    {
      title:
        "Centralized IoT-Based Smart Energy Management System: Remote Monitoring and Control of Electrical Energy",
      projectTitle: "TOISTA",
      pathlink: "/alzheimer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestias hic doloremque possimus qui illo omnis alias, minus dignissimos! Ullam.",
      path: "/toista.jpg",
    },
    {
      title:
        "Division Workflow Automation with End-to-End Information System for Enhanced Operational Efficiency and Sales Performance",
      projectTitle: "PVITA",
      pathlink: "/alzheimer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestias hic doloremque possimus qui illo omnis alias, minus dignissimos! Ullam.",
      path: "/thumb2.jpg",
    },
    {
      title: "Alzheimer Disease Classification MobileNet V3",
      pathlink: "/alzheimer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestias hic doloremque possimus qui illo omnis alias, minus dignissimos! Ullam.",
      path: "/thumb3.jpg",
    },
    {
      title: "Patroli SKSO",
      pathlink: "/alzheimer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestias hic doloremque possimus qui illo omnis alias, minus dignissimos! Ullam.",
      path: "/thumb4.jpg",
    },
    {
      title: "Web Scraping App",
      pathlink: "/alzheimer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestias hic doloremque possimus qui illo omnis alias, minus dignissimos! Ullam.",
      path: "/thumb4.jpg",
    },
  ],
};
const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.data.map((data, index) => {
        return (
          <SwiperSlide key={index}>
            {/* <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
              <div className="flex items-center justify-center relative overflow-hidden group">
                <div className="flex w-full items-center justify-center group">
                  <Image
                    src={data.path}
                    width={800}
                    height={400}
                    alt={data.title}
                    className="pointer-events-none"
                  />
                  <div className="absolute rounded-lg inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700">
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 translate-all duration-300">
                      <p>{data.description}</p>
                      <div className="delay-100">LIVE</div>
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
              <div className="absolute rounded-lg inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-60 transition-all duration-700"></div>
              <div className="absolute m-auto p-3 text-center">
                <h1 className=" text-white  text-lg font-bold">{data.title}</h1>
                <h2 className=" m-auto text-white font-semibold text-lg">
                  TOISTA
                </h2>
                <Link
                  href={data.pathlink}
                  target="_blank"
                  className="hover:text-sky-500 transition-all duration-300 font-light"
                >
                  Detail
                </Link>
              </div>
              <Image
                src={data.path}
                width={800}
                height={400}
                alt={data.title}
                className="pointer-events-none"
              />

              {/* <div className="absolute group-hover:-translate-y-32 group-hover:xl:-translate-y-40 translate-all duration-300">
                    <div className="xl:h2 text-center group-hover:translate-y-0 group-hover:text-lg transition-all duration-300 bg-blue-800 bg-opacity-60 shadow-lg hover:bg-opacity-20 p-4 rounded-lg">
                      {data.title}
                    </div>
                  </div>
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 translate-all duration-300">
                    <p className="hidden group-hover:block text-black font-semibold">
                      {data.description}
                    </p>
                    <div className="delay-100">LIVE</div>
                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                      PROJECT
                    </div>
                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                      <BsArrowRight />
                    </div>
                  </div> */}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
