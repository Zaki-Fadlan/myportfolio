import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
const workSlides = {
  data: [
    {
      title:
        "Centralized IoT-Based Smart Energy Management System: Remote Monitoring and Control of Electrical Energy",
      projectTitle: "TOISTA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestias hic doloremque possimus qui illo omnis alias, minus dignissimos! Ullam.",
      path: "/thumb1.jpg",
    },
    {
      title:
        "Division Workflow Automation with End-to-End Information System for Enhanced Operational Efficiency and Sales Performance",
      projectTitle: "PVITA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestias hic doloremque possimus qui illo omnis alias, minus dignissimos! Ullam.",
      path: "/thumb2.jpg",
    },
    {
      title: "Alzheimer Disease Classification MobileNet V3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestias hic doloremque possimus qui illo omnis alias, minus dignissimos! Ullam.",
      path: "/thumb3.jpg",
    },
    {
      title: "Patroli SKSO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestias hic doloremque possimus qui illo omnis alias, minus dignissimos! Ullam.",
      path: "/thumb4.jpg",
    },
    {
      title: "Web Scraping App",
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
            <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
              <div className="flex items-center justify-center relative overflow-hidden group">
                <div className="flex items-center justify-center group">
                  <Image
                    src={data.path}
                    width={800}
                    height={400}
                    alt={data.title}
                  />
                  <div className="absolute rounded-lg inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 translate-all duration-300">
                    <h2 className="h2">{data.title}</h2>
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

            {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image src={image.path} width={500} height={300} alt="" />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 translate-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] track-[0.2em]">
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
                );
              })}
            </div> */}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
