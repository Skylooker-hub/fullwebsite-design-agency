import { useEffect, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, Spring } from "react-spring";
import { Link } from "react-scroll";
import { useUpdateEffect } from "ahooks";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const onNavItemClick = () => {
    setIsNavOpen(false);
  };

  const [styles, api] = useSpring(() => ({
    from: {
      opacity: 1,
      transform: "translateY(0px)",
    },
  }));

  const [styles2, api2] = useSpring(() => ({
    from: {
      height: 0,
    },
  }));

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isSticky]);

  useEffect(() => {
    api.start({
      from: {
        opacity: 0,
        transform: "translateY(-100px)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0px)",
      },
    });
  }, [isSticky]);

  useUpdateEffect(() => {
    if (isNavOpen) {
      api2.start({
        to: {
          height: window.screen.height,
        },
        from: {
          height: 0,
        },
      });
    } else {
      api2.start({
        from: {
          height: window.screen.height,
        },
        to: {
          height: 0,
        },
      });
    }
  }, [isNavOpen]);

  return (
    <>
      <animated.header
        className={`
        grid grid-flow-col h-[80px] px-[40px] items-center z-[200] w-full
        ${isSticky ? "text-primaryDark" : "text-primaryLighter"}  
        ${isSticky ? "bg-white" : ""} 
        ${isSticky ? "fixed" : "relative"}
        ${isSticky || isNavOpen ? "shadow-lg" : ""}
      `}
        style={styles}
      >
        <h1
          className={`text-2xl font-semibold ${
            isSticky || isNavOpen ? "text-primaryDarker" : "text-primaryLighter"
          }`}
        >
          欣欣科技
        </h1>
        <nav className="lg:flex justify-end items-center hidden">
          <Link className="mx-[24px] text-sm cursor-pointer" to="home" smooth>
            首页
          </Link>
          <Link className="mx-[24px] text-sm cursor-pointer" to="aboutUs" smooth offset={-160}>
            关于我们
          </Link>
          <Link className="mx-[24px] text-sm cursor-pointer" to="successCases" smooth offset={-80}>
            成功案例
          </Link>
          <Link
            className="mx-[24px] text-sm cursor-pointer"
            to="serviceProcess"
            smooth
            offset={-80}
          >
            服务流程
          </Link>
          <Link className="mx-[24px] text-sm cursor-pointer" to="team" smooth offset={-80}>
            团队介绍
          </Link>
          <Link className="mx-[24px] text-sm cursor-pointer" to="information" smooth offset={-80}>
            公司动态
          </Link>
          <FontAwesomeIcon icon={faSearch} className="text-sm" />
        </nav>
        {/* burger */}
        <div
          className=" w-[20px] h-[6px] relative justify-self-end lg:hidden "
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
        >
          <Spring
            to={{
              transform: isNavOpen ? "rotate(45deg)" : "rotate(0deg)",
              top: isNavOpen ? "0px" : "-6px",
            }}
          >
            {styles => (
              <animated.div
                className={` 
                  absolute w-[20px] h-[2px] bg-primaryLighter 
                  ${isSticky || isNavOpen ? "bg-primaryDark" : "bg-primaryLighter"}  
                `}
                style={styles}
              ></animated.div>
            )}
          </Spring>
          <div
            className={` 
              absolute w-[20px] h-[2px] bg-primaryLighter 
              ${isNavOpen ? "hidden" : ""}
              ${isSticky || isNavOpen ? "bg-primaryDark" : "bg-primaryLighter"}  
            `}
          ></div>
          <Spring
            to={{
              transform: isNavOpen ? "rotate(-45deg)" : "rotate(0deg)",
              top: isNavOpen ? "0px" : "6px",
            }}
          >
            {styles => (
              <animated.div
                className={` 
                  absolute w-[20px] h-[2px] bg-primaryLighter 
                  ${isSticky || isNavOpen ? "bg-primaryDark" : "bg-primaryLighter"}  
                `}
                style={styles}
              ></animated.div>
            )}
          </Spring>
        </div>
      </animated.header>
      <animated.nav
        className={` 
          fixed left-0 top-0 bg-white w-[100vw] z-[150] overflow-hidden
        `}
        style={styles2}
      >
        <div className=" grid justify-items-end auto-rows-max pt-[80px] px-[40px] ">
          <Link className="my-4 text-lg cursor-pointer" to="home" smooth onClick={onNavItemClick}>
            首页
          </Link>
          <Link
            className="my-4 text-lg cursor-pointer"
            to="aboutUs"
            smooth
            offset={-160}
            onClick={onNavItemClick}
          >
            关于我们
          </Link>
          <Link
            className="my-4 text-lg cursor-pointer"
            to="successCases"
            smooth
            offset={-80}
            onClick={onNavItemClick}
          >
            成功案例
          </Link>
          <Link
            className="my-4 text-lg cursor-pointer"
            to="serviceProcess"
            smooth
            offset={-80}
            onClick={onNavItemClick}
          >
            服务流程
          </Link>
          <Link
            className="my-4 text-lg cursor-pointer"
            to="team"
            smooth
            offset={-80}
            onClick={onNavItemClick}
          >
            团队介绍
          </Link>
          <Link
            className="my-4 text-lg cursor-pointer"
            to="information"
            smooth
            offset={-80}
            onClick={onNavItemClick}
          >
            公司动态
          </Link>
          <FontAwesomeIcon icon={faSearch} className="text-sm" />
        </div>
      </animated.nav>
    </>
  );
}
