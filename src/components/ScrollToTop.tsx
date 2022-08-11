import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function ScrollToTop() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 800);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isVisible]);

  return ReactDOM.createPortal(
    <>
      <button
        type="button"
        className=" fixed bottom-[60px] right-[30px] z-[100] w-8 h-8 rounded bg-primaryRed text-white flex justify-center items-center "
        style={{ display: isVisible? "block" : "none" }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </>,
    document.body
  );
}
