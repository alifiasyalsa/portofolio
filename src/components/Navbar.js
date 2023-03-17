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
      if (window.scrollY < 20) {
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
      setContainerClass({
        ...containerClass,
        background: "bg-primary drop-shadow-[0_2px_8px_#6b6b6b]",
      });
    } else {
      setContainerClass({
        ...containerClass,
        background: "bg-primary",
      });
    }
  }, [scrollDir]);

  return (
    <nav
      className={`px-2 sm:px-4 py-2 fixed w-full z-20 top-0 left-0 text-md font-semibold ${containerClass.background}`}
      hidden={scrollDir === "down"}
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#home" className="flex items-center">
          <img
            src="./logo.png"
            className="ml-3 h-9"
            alt="Click to go to homepage"
          />
        </a>
        {/* <button
          data-collapse-toggle="navbar"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button> */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto"
          id="navbar"
        >
          <ul className="flex flex-col p-4 mt-4 border md:flex-row md:space-x-16 md:mt-0 md:border-0">
            {[
              ["About", "#about"],
              ["Work", "#work"],
              ["Contact", "#contact"],
            ].map(([title, url]) => (
              <li key={title}>
                <a
                  href={url}
                  className={`block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0 ${containerClass.menu}`}
                  onClick={() => setScrollDir("down")}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <button type="button" className={`${containerClass.button} ml-10`}>
            <a href="CV-ALIFIA_SYALSABILA.pdf" target="_blank">
              Resume
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
