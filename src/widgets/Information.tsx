import { faCalendar, faComments } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import activity01Img from "@/assets/images/activity01-image.jpg";
import waterCraftsOnRiverImg from "@/assets/images/watercrafts-on-river-3464632.jpg";
import redSuspensionBridgeImg from "@/assets/images/red-suspension-bridge-3493772.jpg";

export default function Information() {
  return (
    <section className=" grid justify-items-center pt-[80px] pb-[124px] ">
      <h2 className=" text-center text-primaryDarker text-[34px] font-bold after:content-[''] after:translate-x-[10%] after:block after:w-4/5 after:h-1 after:mt-[14px] after:bg-primaryRed">
        公司动态
      </h2>
      <p className=" mt-7 mb-[60px] text-primaryDarkGray text-lg ">
        关注公司动态，第一时间获取一手消息
      </p>
      <div className=" grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-x-6 gap-y-6 max-w-[1180px] px-[20px] lg:px-[80px] ">
        <div className=" bg-white pb-6 shadow-lg duration-[400ms] lg:hover:translate-y-[-20px] lg:hover:scale-[1.05] hover:shadow-xl ">
          <div className=" h-[255px] overflow-hidden ">
            <img src={activity01Img} className=" h-full object-cover " />
          </div>
          <div className=" px-6 ">
            <div className=" mt-[20px] mb-[12px] text-primaryLightGray text-sm ">
              <span>
                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> 2019年12月1日
              </span>
              <span className=" ml-9 ">
                <FontAwesomeIcon icon={faComments}></FontAwesomeIcon> 33条评论
              </span>
            </div>
            <h4 className=" mb-4 text-lg font-bold ">提供互联网接入的ISP公司</h4>
            <p className=" text-primaryGray text-sm ">
              网络公司原本指的是提供网络服务的互联网内容提供商ICP公司，提供互联网接入的ISP公司，提供内容托管的IDC提供商，还有无线接入、网络游戏、网络视频、网络培训、网络销售。
            </p>
            <button type="button" className=" rounded bg-primaryRed text-white text-sm py-[6px] px-[14px] mt-6 ">
              阅读更多
            </button>
          </div>
        </div>
        <div className=" bg-white pb-6 shadow-lg duration-[400ms] lg:hover:translate-y-[-20px] lg:hover:scale-[1.05] hover:shadow-xl ">
          <div className=" h-[255px] overflow-hidden ">
            <img src={waterCraftsOnRiverImg} className=" object-cover " />
          </div>
          <div className=" px-6 ">
            <div className=" mt-[20px] mb-[12px] text-primaryLightGray text-sm ">
              <span>
                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> 2019年12月1日
              </span>
              <span className=" ml-9 ">
                <FontAwesomeIcon icon={faComments}></FontAwesomeIcon> 33条评论
              </span>
            </div>
            <h4 className=" mb-4 text-lg font-bold ">提供互联网接入的ISP公司</h4>
            <p className=" text-primaryGray text-sm ">
              网络公司原本指的是提供网络服务的互联网内容提供商ICP公司，提供互联网接入的ISP公司，提供内容托管的IDC提供商，还有无线接入、网络游戏、网络视频、网络培训、网络销售。
            </p>
            <button type="button" className=" rounded bg-primaryRed text-white text-sm py-[6px] px-[14px] mt-6 ">
              阅读更多
            </button>
          </div>
        </div>
        <div className=" bg-white pb-6 shadow-lg duration-[400ms] lg:hover:translate-y-[-20px] lg:hover:scale-[1.05] hover:shadow-xl ">
          <div className=" h-[255px] overflow-hidden ">
            <img src={redSuspensionBridgeImg} className=" object-cover " />
          </div>
          <div className=" px-6 ">
            <div className=" mt-[20px] mb-[12px] text-primaryLightGray text-sm ">
              <span>
                <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> 2019年12月1日
              </span>
              <span className=" ml-9 ">
                <FontAwesomeIcon icon={faComments}></FontAwesomeIcon> 33条评论
              </span>
            </div>
            <h4 className=" mb-4 text-lg font-bold ">提供互联网接入的ISP公司</h4>
            <p className=" text-primaryGray text-sm ">
              网络公司原本指的是提供网络服务的互联网内容提供商ICP公司，提供互联网接入的ISP公司，提供内容托管的IDC提供商，还有无线接入、网络游戏、网络视频、网络培训、网络销售。
            </p>
            <button type="button" className=" rounded bg-primaryRed text-white text-sm py-[6px] px-[14px] mt-6 ">
              阅读更多
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
