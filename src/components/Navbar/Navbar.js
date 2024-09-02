import React, { useEffect, useState } from "react";
import Overlay from "../Overlay/Overlay";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [observerHeader, setObserverHeader] = useState();
  const [observerLunch, setObserverLunch] = useState();
  const [observerCallUs, setObserverCallUs] = useState();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const width = window.innerWidth;
  const size = width <= 860 ? 72 : 485;

  const navigationHome = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: observerHeader,
      behavior: "smooth",
    });
  };

  const navigationLunch = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: observerLunch + size,
      behavior: "smooth",
    });
  };
  const navigationCallUs = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: observerCallUs + 72,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      const header = document.querySelector("#header");
      const headerOffsetTop = header.offsetTop;
      const lunch = document.querySelector("#lunch");
      const lunchOffsetTop = lunch.offsetTop;
      const callUs = document.querySelector("#callus");
      const callUsOffsetTop = callUs.offsetTop;
      setObserverHeader(headerOffsetTop);
      setObserverLunch(lunchOffsetTop);
      setObserverCallUs(callUsOffsetTop);
    }, 200);
  }, []);

  return (
    <>
      <div className="py-5 fixed top-0 right-0 left-0 bg-blackCus-100  z-50">
        <div className="container flex items-center justify-between">
          <div className="sm:hidden w-8 h-7 cursor-pointer" onClick={toggleNavbar}>
            {isNavbarOpen ? (
              <div className="relative transition-all after:absolute after:w-8 after:h-[3px] after:bg-gold-100 after:rounded-full after:transition-all after:-bottom-8 before:absolute before:w-8 before:h-[3px] before:bg-gold-100 before:rounded-full before:transition-all before:top-[14.5px] after:-translate-y-[14.5px] after:-rotate-45 before:rotate-45">
                {" "}
              </div>
            ) : (
              <div className="w-8 h-[3px] rounded-full bg-gold-100 relative transition-all after:absolute after:w-8 after:h-[3px] after:bg-gold-100 after:rounded-full after:transition-all after:-bottom-6 before:absolute before:w-8 before:h-[3px] before:bg-gold-100 before:rounded-full before:transition-all before:top-[12px]">
                {" "}
              </div>
            )}
            {isNavbarOpen ? (
              <ul className="gap-3 text-xl flex absolute flex-col right-0 left-0 items-center justify-center bg-blackCus-100 w-full h-52 transition-all top-full overflow-hidden z-50">
                <li onClick={navigationHome}>
                  <span className="p-2.5 text-white hover:text-gold-100 transition-colors font-DanaMedium inline-block select-none cursor-pointer">
                    منو قهوه
                  </span>
                </li>
                <li onClick={navigationLunch}>
                  <span className="p-2.5 text-white hover:text-gold-100 transition-colors font-DanaMedium inline-block select-none cursor-pointer">
                    منو ناهار
                  </span>
                </li>
                <li onClick={navigationCallUs}>
                  <span className="p-2.5 text-white hover:text-gold-100 transition-colors font-DanaMedium inline-block select-none cursor-pointer">
                    تماس با ما
                  </span>
                </li>
              </ul>
            ) : (
              <ul className="gap-3 text-xl flex absolute flex-col right-0 left-0 items-center justify-center bg-blackCus-100 w-full h-0 transition-all top-full overflow-hidden z-50">
                <li onClick={navigationHome}>
                  <span className="p-2.5 text-white hover:text-gold-100 transition-colors font-DanaMedium inline-block select-none cursor-pointer">
                    منو قهوه
                  </span>
                </li>
                <li onClick={navigationLunch}>
                  <span className="p-2.5 text-white hover:text-gold-100 transition-colors font-DanaMedium inline-block select-none cursor-pointer">
                    منو ناهار
                  </span>
                </li>
                <li onClick={navigationCallUs}>
                  <span className="p-2.5 text-white hover:text-gold-100 transition-colors font-DanaMedium inline-block select-none cursor-pointer">
                    تماس با ما
                  </span>
                </li>
              </ul>
            )}
          </div>
          <div className="hidden sm:flex">
            <ul className="gap-3 text-xl flex items-center justify-center z-50">
              <li onClick={navigationHome}>
                <span className="p-2.5 text-white hover:text-gold-100 transition-colors font-DanaMedium inline-block select-none cursor-pointer">
                  منو قهوه
                </span>
              </li>
              <li onClick={navigationLunch}>
                <span className="p-2.5 text-white hover:text-gold-100 transition-colors font-DanaMedium inline-block select-none cursor-pointer">
                  منو ناهار
                </span>
              </li>
              <li onClick={navigationCallUs}>
                <span className="p-2.5 text-white hover:text-gold-100 transition-colors font-DanaMedium inline-block select-none cursor-pointer">
                  تماس با ما
                </span>
              </li>
            </ul>
          </div>
          <img src="/images/logo.png" alt="" className="select-none cursor-pointer w-56 lg:w-72" />
        </div>
      </div>
      {isNavbarOpen && (
        <div className="hidden" onClick={toggleNavbar}>
          <Overlay />
        </div>
      )}
    </>
  );
}
