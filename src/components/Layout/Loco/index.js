import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const Layout = ({ children }) => {
  useEffect(() => {
    const scrollEl = document.querySelector("#scroll-container");

    const locomotiveScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div id="scroll-container" data-scroll-container>
      {children}
    </div>
  );
};

export default Layout;
