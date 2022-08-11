import {
  faChalkboardTeacher,
  faComments,
  faFileSignature,
  faGavel,
  faUser,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInViewport } from "ahooks";
import { useEffect, useRef, useState } from "react";
import { animated, Spring } from "react-spring";

export default function ServiceProcess() {
  const ref = useRef(null);
  const [inview] = useInViewport(ref);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inview) {
      setIsVisible(inview);
    }
  }, [inview]);

  return (
    <section className=" grid justify-items-center pt-[80px] pb-[48px]">
      <h2 className=" text-center text-primaryDarker text-[34px] font-bold after:content-[''] after:block after:w-4/5 after:h-1 after:mt-[14px] after:translate-x-[10%] after:bg-primaryRed">
        服务流程
      </h2>
      <p className=" mt-7 mb-[60px] px-[40px] text-primaryDarkGray text-lg ">
        网络综合公司，提供包括网络基础服务（如域名、主机、邮箱）和网络增值服务（如网站建设和推广，网站优化）等业务。
      </p>
      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-x-[38px] gap-y-[34px] max-w-[1180px] px-[40px] lg:px-[80px]"
        ref={ref}
      >
        <Spring
          to={{
            opacity: isVisible ? 1 : 0,
            translateY: isVisible ? 0 : 100,
          }}
          config={{
            duration: 500,
          }}
          delay={500}
        >
          {styles => (
            <animated.div className=" grid grid-cols-[70px_1fr] shadow-lg p-[24px] " style={styles}>
              <FontAwesomeIcon icon={faComments} className="text-[42px] text-primaryRed" />
              <div className=" grid grid-rows-[1fr_4fr] ">
                <h3 className=" text-primaryDarker text-2xl font-bold ">需求沟通</h3>
                <p className=" text-primaryGray mt-2 text-[16px] leading-[30px] ">
                  客户提出网站建设的基本需求，包括设计要求及功能要求
                </p>
              </div>
            </animated.div>
          )}
        </Spring>
        <Spring
          to={{
            opacity: isVisible ? 1 : 0,
            translateY: isVisible ? 0 : 100,
          }}
          config={{
            duration: 500,
          }}
          delay={1000}
        >
          {styles => (
            <animated.div className=" grid grid-cols-[70px_1fr] shadow-lg p-[24px] " style={styles}>
              <FontAwesomeIcon icon={faGavel} className="text-[42px] text-primaryRed" />
              <div className=" grid grid-rows-[1fr_4fr] ">
                <h3 className=" text-primaryDarker text-2xl font-bold ">项目评估</h3>
                <p className=" text-primaryGray mt-2 text-[16px] leading-[30px] ">
                  根据客户提出的需求进行评估，估算出相应的时间与费用
                </p>
              </div>
            </animated.div>
          )}
        </Spring>
        <Spring
          to={{
            opacity: isVisible ? 1 : 0,
            translateY: isVisible ? 0 : 100,
          }}
          config={{
            duration: 500,
          }}
          delay={1500}
        >
          {styles => (
            <animated.div className=" grid grid-cols-[70px_1fr] shadow-lg p-[24px] " style={styles}>
              <FontAwesomeIcon icon={faFileSignature} className="text-[42px] text-primaryRed" />
              <div className=" grid grid-rows-[1fr_4fr] ">
                <h3 className=" text-primaryDarker text-2xl font-bold ">签订合同</h3>
                <p className=" text-primaryGray mt-2 text-[16px] leading-[30px] ">
                  合作双方确认费用、工期、合作要求的基础上，双方共同签订合同
                </p>
              </div>
            </animated.div>
          )}
        </Spring>
        <Spring
          to={{
            opacity: isVisible ? 1 : 0,
            translateY: isVisible ? 0 : 100,
          }}
          config={{
            duration: 500,
          }}
          delay={2000}
        >
          {styles => (
            <animated.div className=" grid grid-cols-[70px_1fr] shadow-lg p-[24px] " style={styles}>
              <FontAwesomeIcon icon={faUser} className="text-[42px] text-primaryRed" />
              <div className=" grid grid-rows-[1fr_4fr] ">
                <h3 className=" text-primaryDarker text-2xl font-bold ">提案阶段</h3>
                <p className=" text-primaryGray mt-2 text-[16px] leading-[30px] ">
                  完成网站初稿DEMO设计，包括首页风格，内页风格页面
                </p>
              </div>
            </animated.div>
          )}
        </Spring>
        <Spring
          to={{
            opacity: isVisible ? 1 : 0,
            translateY: isVisible ? 0 : 100,
          }}
          config={{
            duration: 500,
          }}
          delay={2500}
        >
          {styles => (
            <animated.div className=" grid grid-cols-[70px_1fr] shadow-lg p-[24px] " style={styles}>
              <FontAwesomeIcon icon={faChalkboardTeacher} className="text-[42px] text-primaryRed" />
              <div className=" grid grid-rows-[1fr_4fr] ">
                <h3 className=" text-primaryDarker text-2xl font-bold ">制作阶段</h3>
                <p className=" text-primaryGray mt-2 text-[16px] leading-[30px] ">
                  完成所有页面的设计，进行程序开发以及前后后台的页面整合
                </p>
              </div>
            </animated.div>
          )}
        </Spring>
        <Spring
          to={{
            opacity: isVisible ? 1 : 0,
            translateY: isVisible ? 0 : 100,
          }}
          config={{
            duration: 500,
          }}
          delay={3000}
        >
          {styles => (
            <animated.div className=" grid grid-cols-[70px_1fr] shadow-lg p-[24px] " style={styles}>
              <FontAwesomeIcon icon={faUserCheck} className="text-[42px] text-primaryRed" />
              <div className=" grid grid-rows-[1fr_4fr] ">
                <h3 className=" text-primaryDarker text-2xl font-bold ">网站验收</h3>
                <p className=" text-primaryGray mt-2 text-[16px] leading-[30px] ">
                  根据合同条款进行网站验收，并签署网站验收确认单
                </p>
              </div>
            </animated.div>
          )}
        </Spring>
      </div>
    </section>
  );
}
