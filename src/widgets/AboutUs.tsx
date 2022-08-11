import {
  faChartLine,
  faDesktop,
  faLightbulb,
  faServer,
  faShoppingCart,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInViewport } from "ahooks";
import { useEffect, useRef, useState } from "react";
import { animated, Spring } from "react-spring";

export default function AboutUs() {
  const ref = useRef(null);
  const [inview] = useInViewport(ref);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inview) {
      setIsVisible(inview);
    }
  }, [inview]);

  return (
    <section className=" grid justify-items-center px-[80px] pb-8 ">
      <h2 className=" text-center text-primaryDarker text-[34px] font-bold after:content-[''] after:block after:w-4/5 after:h-1 after:mt-[14px] after:translate-x-[10%] after:bg-primaryRed">
        关于我们
      </h2>
      <p className=" mt-7 mb-[60px] text-primaryDarkGray text-lg ">
        网络公司不仅仅是提供域名注册、空间租用、网站开发、网站建设与网络营销活动策划相关的企业组织。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[5vw] max-w-[1180px]" ref={ref}>
        <Spring
          to={{
            opacity: isVisible ? 1 : 0,
            translateY: isVisible ? 0 : 100,
          }}
          config={{
            duration: 500,
          }}
        >
          {styles => (
            <animated.div className="h-[126px] grid grid-cols-[60px_1fr] " style={styles}>
              <FontAwesomeIcon icon={faLightbulb} className="text-[34px] text-primaryRed" />
              <div>
                <h3 className=" text-primaryDarker text-lg font-bold ">品牌创意</h3>
                <p className=" text-primaryGray mt-2 ">
                  为企业设计独特的并能完美呈现企业价值观的视觉
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
          delay={500}
        >
          {styles => (
            <animated.div className="h-[126px] grid grid-cols-[60px_1fr] " style={styles}>
              <FontAwesomeIcon icon={faChartLine} className="text-[34px] text-primaryRed" />
              <div>
                <h3 className=" text-primaryDarker text-lg font-bold ">整合营销</h3>
                <p className=" text-primaryGray mt-2 ">
                  通过市场进入分析、制定网络营销战略、网络营销实施
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
            <animated.div className="h-[126px] grid grid-cols-[60px_1fr] " style={styles}>
              <FontAwesomeIcon icon={faShoppingCart} className="text-[34px] text-primaryRed" />
              <div>
                <h3 className=" text-primaryDarker text-lg font-bold ">电子商务</h3>
                <p className=" text-primaryGray mt-2 ">
                  根据企业需求，开设不同的销售渠道，通过网上直销
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
            <animated.div className="h-[126px] grid grid-cols-[60px_1fr] " style={styles}>
              <FontAwesomeIcon icon={faDesktop} className="text-[34px] text-primaryRed" />
              <div>
                <h3 className=" text-primaryDarker text-lg font-bold ">网页设计</h3>
                <p className=" text-primaryGray mt-2 ">
                  通过网站建设、智能建站、域名主机、企业邮箱
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
            <animated.div className="h-[126px] grid grid-cols-[60px_1fr] " style={styles}>
              <FontAwesomeIcon icon={faTachometerAlt} className="text-[34px] text-primaryRed" />
              <div>
                <h3 className=" text-primaryDarker text-lg font-bold ">网站优化</h3>
                <p className=" text-primaryGray mt-2 ">
                  网站推广是指将网站推广到国内各大知名网站和搜索引擎
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
            <animated.div className="h-[126px] grid grid-cols-[60px_1fr] " style={styles}>
              <FontAwesomeIcon icon={faServer} className="text-[34px] text-primaryRed" />
              <div>
                <h3 className=" text-primaryDarker text-lg font-bold ">网站架设</h3>
                <p className=" text-primaryGray mt-2 ">通过绑定域名和服务器，把网站展现给全世界</p>
              </div>
            </animated.div>
          )}
        </Spring>
      </div>
    </section>
  );
}
