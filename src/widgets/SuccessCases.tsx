import { useEffect, useRef, useState } from "react";
import FlipMove from "react-flip-move";
import grayLaptopImg from "@/assets/images/gray-laptop-computer-showing-html-codes-in-shallow-focus-160107.jpg";
import imacNearMacbookImg from "@/assets/images/photo-of-imac-near-macbook-1029757.jpg";
import appleLaptopNotebookOfficeImg from "@/assets/images/apple-laptop-notebook-office-39284.jpg";
import appleAppleDeviceDesignDeskImg from "@/assets/images/apple-apple-device-design-desk-285814.jpg";
import personUsingClackAndWhiteSmartphoneImg from "@/assets/images/person-using-black-and-white-smartphone-and-holding-blue-230544.jpg";
import personHoldingSmartphoneImg from "@/assets/images/person-holding-a-smartphone-892757.jpg";
import blurCloseUpCodeComputerImg from "@/assets/images/blur-close-up-code-computer-546819.jpg";
import bokehPhotographyImg from "@/assets/images/bokeh-photography-of-person-holding-turned-on-iphone-1440727.jpg";

export default function SuccessCases() {
  const cases = useRef([
    { type: ["web", "science"], img: grayLaptopImg },
    { type: ["web"], img: imacNearMacbookImg },
    { type: ["web"], img: appleLaptopNotebookOfficeImg },
    { type: ["mobile"], img: appleAppleDeviceDesignDeskImg },
    { type: ["mobile"], img: personUsingClackAndWhiteSmartphoneImg },
    { type: ["web", "mobile"], img: personHoldingSmartphoneImg },
    { type: ["web", "science"], img: blurCloseUpCodeComputerImg },
    { type: ["mobile", "science"], img: bokehPhotographyImg },
  ]);

  const [activeType, setActiveType] = useState<string>("all"); // 激活类型

  const [activeCases, setActiveCases] = useState(cases.current); // 激活案例

  useEffect(() => {
    const activeCases = cases.current.filter(item => {
      if (activeType === "all") {
        return true;
      }
      return item.type.includes(activeType);
    });
    setActiveCases(activeCases);
  }, [activeType]);

  return (
    <section className=" grid justify-items-center pt-[80px] bg-[#f9fbfb]">
      <h2 className=" text-center text-primaryDarker text-[34px] font-bold after:content-[''] after:block after:w-4/5 after:h-1 after:mt-[14px] after:translate-x-[10%] after:bg-primaryRed">
        成功案例
      </h2>
      <div className=" mt-[56px] mb-[38px] flex">
        <button
          type="button"
          className={`text-sm ${
            activeType === "all" ? "bg-primaryRed" : "bg-primaryLight"
          } rounded-[4px] ${
            activeType === "all" ? "text-white" : "text-primaryDarkGray"
          } hover:bg-primaryRed hover:text-white duration-[0.4s] py-2 px-[18px] mx-[7px]`}
          onClick={() => {
            setActiveType("all");
          }}
        >
          全部
        </button>
        <button
          type="button"
          className={`text-sm ${
            activeType === "web" ? "bg-primaryRed" : "bg-primaryLight"
          } rounded-[4px] ${
            activeType === "web" ? "text-white" : "text-primaryDarkGray"
          } hover:bg-primaryRed hover:text-white duration-[0.4s] py-2 px-[18px] mx-[7px]`}
          onClick={() => {
            setActiveType("web");
          }}
        >
          WEB
        </button>
        <button
          type="button"
          className={`text-sm ${
            activeType === "mobile" ? "bg-primaryRed" : "bg-primaryLight"
          } rounded-[4px] ${
            activeType === "mobile" ? "text-white" : "text-primaryDarkGray"
          } hover:bg-primaryRed hover:text-white duration-[0.4s] py-2 px-[18px] mx-[7px]`}
          onClick={() => {
            setActiveType("mobile");
          }}
        >
          移动
        </button>
        <button
          type="button"
          className={`text-sm ${
            activeType === "science" ? "bg-primaryRed" : "bg-primaryLight"
          } rounded-[4px] ${
            activeType === "science" ? "text-white" : "text-primaryDarkGray"
          } hover:bg-primaryRed hover:text-white duration-[0.4s] py-2 px-[18px] mx-[7px]`}
          onClick={() => {
            setActiveType("science");
          }}
        >
          科研
        </button>
      </div>
      <FlipMove className=" flex flex-wrap justify-start w-full">
        {activeCases.map(({ img }) => (
          <img key={img} className="w-full md:w-1/2 lg:w-1/4 h-[60vw] md:h-[40vw] lg:h-[20vw] object-cover " src={img} />
        ))}
      </FlipMove>
    </section>
  );
}
