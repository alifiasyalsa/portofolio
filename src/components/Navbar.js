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

  console.log(window.scrollY);
  console.log(window.scrollY);

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
              ["About", "#about"],
              ["Work", "#work"],
              ["Contact", "#contact"],
            ].map(([title, url]) => (
              <li>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
