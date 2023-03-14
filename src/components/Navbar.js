import { useCallback, useEffect, useState } from "react";

const Navbar = () => {
  const [scrollDir, setScrollDir] = useState("top");
  const [containerClass, setContainerClass] = useState({
    background: "bg-primary",
    menu: "text-secondary md:hover:text-info",
    button:
      "text-primary bg-secondary hover:bg-info focus:ring-4 focus:outline-none focus:ring-blue-800 rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0",
  });
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y < 20) {
        setScrollDir("top");
      } else if (y > window.scrollY) {
        setScrollDir("up");
      } else if (y < window.scrollY) {
        setScrollDir("down");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    if (scrollDir === "up") {
      //   setContainerClass({
      //     background: "bg-secondary drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)]",
      //     menu: "text-primary md:hover:text-info",
      //     button:
      //     "text-primary bg-info hover:bg-info focus:ring-4 focus:outline-none focus:ring-blue-800 rounded-lg  px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-secondary dark:focus:ring-blue-800",
      //   });
      setContainerClass({
        background: "bg-primary drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)]",
        menu: "text-secondary md:hover:text-info",
        button:
          "text-primary bg-secondary hover:bg-info focus:ring-4 focus:outline-none focus:ring-blue-800 rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0",
      });
    } else {
      setContainerClass({
        background: "bg-primary",
        menu: "text-secondary md:hover:text-info",
        button:
          "text-primary bg-secondary hover:bg-info focus:ring-4 focus:outline-none focus:ring-blue-800 rounded-lg px-5 py-2.5 text-center mr-3 md:mr-0",
      });
    }
  }, [scrollDir]);

  return (
    <nav
      className={`px-2 sm:px-4 py-2 fixed w-full z-20 top-0 left-0 text-md font-semibold ${containerClass.background}`}
      hidden={scrollDir === "down"}
    >
      <div class="container flex flex-wrap mx-auto items-center justify-end">
        <div class="flex md:order-2 pl-10">
          <button type="button" className={containerClass.button}>
            Resume
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 mt-4 border md:flex-row md:space-x-20 md:mt-0 md:border-0">
            {[
              ["About", "/dashboard"],
              ["Work", "/projects"],
              ["Contact", "/contact"],
            ].map(([title, url]) => (
              <li>
                <a
                  href={url}
                  className={`block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0 ${containerClass.menu}`}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
