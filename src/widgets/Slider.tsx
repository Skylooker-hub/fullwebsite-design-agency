import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { animated, Spring } from "react-spring";
import peopleInCouchImg from "@/assets/images/people-in-couch-1024248.jpg";
import peopleInWorkplace from '@/assets/images/people-in-workplace.jpg';
// import workingmanMp4 from "@/assets/videos/working-man.mp4";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // slide激活索引

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      className="top-[-80px] relative w-[100vw] h-[100vh]"
      slidesPerView={1}
      loop
      navigation
      pagination={{ type: "bullets", bulletActiveClass: "pagination-bullet-active" }}
      onSlideChange={({ realIndex }) => {
        setActiveIndex(realIndex);
      }}
    >
      <SwiperSlide>
        <div className="w-full h-[100vh] relative">
          <div className="absolute w-full h-full flex justify-center items-center z-[100]">
            <div className="text-center max-w-[60%]">
              <Spring
                to={{
                  opacity: activeIndex === 0 ? 1 : 0,
                  translateY: activeIndex === 0 ? 0 : 100,
                }}
                config={{
                  duration: 500,
                }}
              >
                {styles => (
                  <animated.h1
                    className="text-[36px] md:text-[48px] lg:text-[54px] font-semibold text-primaryLighter"
                    style={styles}
                  >
                    用创新点缀人生，让科技融入理想。
                  </animated.h1>
                )}
              </Spring>
              <Spring
                to={{
                  opacity: activeIndex === 0 ? 1 : 0,
                  translateY: activeIndex === 0 ? 0 : 100,
                }}
                config={{
                  duration: 500,
                }}
                delay={500}
              >
                {styles => (
                  <animated.h3
                    className="text-primaryLighter my-12 text-xl lg:text-2xl font-semibold"
                    style={styles}
                  >
                    科技创新大平台，智慧生活新引擎。依靠科技进步推进经济跨越式发展。用创新点缀人生，让科技融入理想。
                  </animated.h3>
                )}
              </Spring>
              <Spring
                to={{
                  opacity: activeIndex === 0 ? 1 : 0,
                  translateY: activeIndex === 0 ? 0 : 100,
                }}
                config={{
                  duration: 500,
                }}
                delay={1000}
              >
                {styles => (
                  <animated.button
                    className="bg-primaryRed py-[14px] px-[32px] text-primaryLighter lg:text-lg rounded"
                    style={styles}
                  >
                    探索更多
                  </animated.button>
                )}
              </Spring>
            </div>
          </div>
          <div className="absolute bg-backdrop z-50 w-full h-full"></div>
          <img
            className="w-full h-full object-cover"
            src={peopleInCouchImg}
            alt="people in couch"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[100vw] h-[100vh] relative">
          <div className="absolute w-full h-full flex justify-center items-center z-[100]">
            <div className="max-w-[60%]">
              <Spring
                to={{
                  opacity: activeIndex === 1 ? 1 : 0,
                  translateY: activeIndex === 1 ? 0 : 100,
                }}
                config={{
                  duration: 500,
                }}
              >
                {styles => (
                  <animated.h1
                    className="text-[36px] md:text-[48px] lg:text-[54px] font-semibold text-primaryLighter"
                    style={styles}
                  >
                    科技改变世界
                  </animated.h1>
                )}
              </Spring>
              <Spring
                to={{
                  opacity: activeIndex === 1 ? 1 : 0,
                  translateY: activeIndex === 1 ? 0 : 100,
                }}
                config={{
                  duration: 500,
                }}
                delay={500}
              >
                {styles => (
                  <animated.h3
                    className="text-primaryLighter my-12 text-xl lg:text-2xl font-semibold"
                    style={styles}
                  >
                    立足科学发展，着力自主创新。加速科技进步，为全市经济社会发展提供有力支撑。凝聚科技创意，成就创新梦想。
                  </animated.h3>
                )}
              </Spring>
              <Spring
                to={{
                  opacity: activeIndex === 1 ? 1 : 0,
                  translateY: activeIndex === 1 ? 0 : 100,
                }}
                config={{
                  duration: 500,
                }}
                delay={1000}
              >
                {styles => (
                  <animated.button
                    className="bg-primaryRed py-[14px] px-[32px] text-primaryLighter lg:text-lg rounded"
                    style={styles}
                  >
                    探索更多
                  </animated.button>
                )}
              </Spring>
            </div>
          </div>
          <div className="absolute bg-backdrop z-50 w-full h-full"></div>
          {/* <video
            className="w-full h-full object-cover"
            src={workingmanMp4}
            muted
            autoPlay
            loop
          ></video> */}
          <img
            className="w-full h-full object-cover"
            src={peopleInWorkplace}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
