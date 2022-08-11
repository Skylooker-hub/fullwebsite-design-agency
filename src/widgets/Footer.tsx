export default function Footer() {
  return (
    <footer className=" bg-[#181818] pt-[72px] pb-[24px] flex justify-center ">
      <div className="grid md:grid-cols-[2fr_repeat(4,1fr)] text-white w-full max-w-[1180px] px-[80px] ">
        <div className=" text-sm ">
          <h3 className=" mb-5 font-medium text-base ">联系我们</h3>
          <p className=" pb-4 ">地址：中国XX省XX市XX路XX商务中心10号楼</p>
          <p className=" pb-4 ">电话：+86-010-88888888</p>
          <p className=" pb-4 ">传真：+86-010-88888888</p>
          <p className=" pb-4 ">电子邮箱：admin@abc.com</p>
        </div>
        <div className=" text-sm md:justify-self-end ">
          <h3 className=" mb-5 font-medium text-base ">服务概览</h3>
          <p className=" pb-2 ">
            <a href="#">网站建设</a>
          </p>
          <p className=" pb-2 ">
            <a href="#">域名购买</a>
          </p>
          <p className=" pb-2 ">
            <a href="#">网页设计</a>
          </p>
          <p className=" pb-2 ">
            <a href="#">移动应用</a>
          </p>
        </div>
        <div className=" text-sm md:justify-self-end ">
          <h3 className=" mb-5 font-medium text-base ">成功案例</h3>
          <p className=" pb-2 ">
            <a href="#">桌面网站</a>
          </p>
          <p className=" pb-2">
            <a href="#">移动网站</a>
          </p>
          <p className=" pb-2 ">
            <a href="#">科研项目</a>
          </p>
          <p className=" pb-2 ">
            <a href="#">软件应用</a>
          </p>
        </div>
        <div className=" text-sm md:justify-self-end ">
          <h3 className=" mb-5 font-medium text-base ">公司动态</h3>
          <p className=" pb-2 ">
            <a href="#">信息公开</a>
          </p>
          <p className=" pb-2 ">
            <a href="#">最近新闻</a>
          </p>
          <p className=" pb-2 ">
            <a href="#">最新博客</a>
          </p>
        </div>
        <div className=" text-sm md:justify-self-end ">
          <h3 className=" mb-5 font-medium text-base ">帮助与支持</h3>
          <p className=" pb-2 ">
            <a href="#">帮助中心</a>
          </p>
          <p className=" pb-2 ">
            <a href="#">联系客服</a>
          </p>
          <p className=" pb-2 ">
            <a href="#">文档资源</a>
          </p>
        </div>
        <div className=" col-start-1 col-end-[-1] mt-6 mb-4 justify-self-center ">
          京ICP备 12345678901-1 号
        </div>
        <div className=" col-start-1 col-end-[-1] justify-self-center ">
          © 2022 欣欣科技 - 响应式网络公司官网 版权所有
        </div>
      </div>
    </footer>
  );
}
