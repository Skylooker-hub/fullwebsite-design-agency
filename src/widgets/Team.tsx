import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWeibo, faWeixin } from "@fortawesome/free-brands-svg-icons";
import manWearingBlackSuitImg from "@/assets/images/man-wearing-black-suit-2955376.jpg";
import smilingWomanWearingBlackSweaterImg from "@/assets/images/smiling-woman-wearing-black-sweater-1587009.jpg";
import manWearingGraySuitJacketImg from "@/assets/images/selective-focus-photograph-of-man-wearing-gray-suit-jacket-1138903.jpg";
import businessWomanImg from "@/assets/images/business-woman-2697954_1920.jpg";

export default function Team() {
  return (
    <section className=" grid justify-items-center pt-[80px] bg-[#f9fbfb] pb-[52px]">
      <h2 className=" text-center text-primaryDarker text-[34px] font-bold after:content-[''] after:block after:w-4/5 after:h-1 after:mt-[14px] after:translate-x-[10%] after:bg-primaryRed">
        团队介绍
      </h2>
      <div className=" mt-[86px] grid md:grid-cols-[1fr_1fr]  lg:grid-cols-[1fr_1fr_1fr_1fr] gap-y-[36px] gap-x-[24px] max-w-[1180px] px-[80px] ">
        <div className=" bg-white shadow grid justify-items-center pb-7 h-[405px] duration-[400ms] lg:hover:translate-y-[-20px] lg:hover:scale-[1.05] lg:hover:shadow-xl ">
          <div className=" overflow-hidden h-[264px]">
            <img src={manWearingBlackSuitImg} className=" object-cover " />
          </div>
          <h4 className=" text-primaryDark text-lg font-medium mt-[18px]">张紫齐</h4>
          <div className=" text-primaryDarkGray mt-[12px] mb-[18px] ">前端工程师</div>
          <div className=" flex justify-between w-full px-[42px]">
            <FontAwesomeIcon icon={faWeixin} />
            <FontAwesomeIcon icon={faWeibo} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <div className=" bg-white shadow grid justify-items-center pb-7 h-[405px] duration-[400ms] lg:hover:translate-y-[-20px] lg:hover:scale-[1.05] lg:hover:shadow-xl ">
          <div className=" overflow-hidden h-[264px]">
            <img src={smilingWomanWearingBlackSweaterImg} className=" object-cover " />
          </div>
          <h4 className=" text-primaryDark text-lg font-medium mt-[18px]">米诗艺</h4>
          <div className=" text-primaryDarkGray mt-[12px] mb-[18px] ">UI设计师</div>
          <div className=" flex justify-between w-full px-[42px]">
            <FontAwesomeIcon icon={faWeixin} />
            <FontAwesomeIcon icon={faWeibo} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <div className=" bg-white shadow grid justify-items-center pb-7 h-[405px] duration-[400ms] lg:hover:translate-y-[-20px] lg:hover:scale-[1.05] lg:hover:shadow-xl ">
          <div className=" overflow-hidden h-[264px]">
            <img src={manWearingGraySuitJacketImg} className=" h-full object-cover " />
          </div>
          <h4 className=" text-primaryDark text-lg font-medium mt-[18px]">纪乐泉</h4>
          <div className=" text-primaryDarkGray mt-[12px] mb-[18px] ">后端工程师</div>
          <div className=" flex justify-between w-full px-[42px]">
            <FontAwesomeIcon icon={faWeixin} />
            <FontAwesomeIcon icon={faWeibo} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <div className=" bg-white shadow grid justify-items-center pb-7 h-[405px] duration-[400ms] lg:hover:translate-y-[-20px] lg:hover:scale-[1.05] lg:hover:shadow-xl ">
          <div className=" overflow-hidden h-[264px] ">
            <img src={businessWomanImg} className=" h-full object-cover " />
          </div>
          <h4 className=" text-primaryDark text-lg font-medium mt-[18px]">云秋贻</h4>
          <div className=" text-primaryDarkGray mt-[12px] mb-[18px] ">市场专员</div>
          <div className=" flex justify-between w-full px-[42px]">
            <FontAwesomeIcon icon={faWeixin} />
            <FontAwesomeIcon icon={faWeibo} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </div>
    </section>
  );
}
