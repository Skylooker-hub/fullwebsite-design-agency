import { faAward, faCode, faFolder, faLaughWink } from "@fortawesome/free-solid-svg-icons";
import adultBusinessComputerContemporaryImg from "@/assets/images/adult-business-computer-contemporary-380769.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInViewport } from "ahooks";
import { useEffect, useRef, useState } from "react";
import { animated, Spring } from "react-spring";

export default function Banner() {
  const ref = useRef(null);
  const [inview] = useInViewport(ref);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inview) {
      setIsVisible(inview);
    }
  }, [inview]);

  return (
    <section className=" w-full h-[768px] md:h-[255px] relative ">
      <img src={adultBusinessComputerContemporaryImg} className="w-full h-full object-cover" />
      <div className=" absolute top-0 left-0 w-full h-full bg-backdrop " />
      <div
        className=" absolute top-0 left-0 w-full grid auto-rows-auto md:grid-cols-4 h-full z-50 justify-items-center items-center px-[80px] "
        ref={ref}
      >
        <div className="text-white lg:w-[250px] font-bold grid justify-items-center items-center ">
          <FontAwesomeIcon
            icon={faCode}
            className=" text-[44px] font-[900] justify-items-center "
          />
          <Spring
            to={{
              value: isVisible ? 156 : 0,
            }}
            config={{
              duration: 1500,
            }}
          >
            {values => (
              <animated.span className=" mt-2 text-[42px] font-bold ">
                {values.value.to(x => x.toFixed(0))}
              </animated.span>
            )}
          </Spring>
          <span className=" text-lg font-medium ">行代码</span>
        </div>
        <div className="text-white lg:w-[250px] font-bold grid justify-items-center items-center ">
          <FontAwesomeIcon
            icon={faAward}
            className=" text-[44px] font-[900] justify-items-center "
          />
          <Spring
            to={{
              value: isVisible ? 288 : 0,
            }}
            config={{
              duration: 1500,
            }}
          >
            {values => (
              <animated.span className=" mt-2 text-[42px] font-bold ">
                {values.value.to(x => x.toFixed(0))}
              </animated.span>
            )}
          </Spring>
          <span className=" text-lg font-medium ">个奖项</span>
        </div>
        <div className="text-white lg:w-[250px] font-bold grid justify-items-center items-center ">
          <FontAwesomeIcon
            icon={faLaughWink}
            className=" text-[44px] font-[900] justify-items-center "
          />
          <Spring
            to={{
              value: isVisible ? 1588 : 0,
            }}
            config={{
              duration: 1500,
            }}
          >
            {values => (
              <animated.span className=" mt-2 text-[42px] font-bold ">
                {values.value.to(x => x.toFixed(0))}
              </animated.span>
            )}
          </Spring>
          <span className=" text-lg font-medium ">位客户</span>
        </div>
        <div className="text-white lg:w-[250px] font-bold grid justify-items-center items-center ">
          <FontAwesomeIcon
            icon={faFolder}
            className=" text-[44px] font-[900] justify-items-center "
          />
          <Spring
            to={{
              value: isVisible ? 500 : 0,
            }}
            config={{
              duration: 1500,
            }}
          >
            {values => (
              <animated.span className=" mt-2 text-[42px] font-bold ">
                {values.value.to(x => x.toFixed(0))}
              </animated.span>
            )}
          </Spring>
          <span className=" text-lg font-medium ">个项目</span>
        </div>
      </div>
    </section>
  );
}
