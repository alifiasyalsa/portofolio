const Work = () => {
  const projects = [
    {
      name: "Personal Portofolio Website",
      image: "project-porto.jpg",
      year: "2022",
      techStack: ["React JS", "Tailwind CSS"],
      repository: "https://github.com/alifiasyalsa/portofolio",
      link: "http://localhost:3000",
      desc: "A showcase of my project and also my Tailwind CSS learning project. In the future I will continue to make adjustments to this website, especially in terms of website responsiveness.",
    },
    {
      name: "WIFUS Healthcare",
      image: "project-wifus.jpg",
      year: "2021 - 2022",
      techStack: ["React JS", "Next JS", "Core UI", "JQuery", "Laravel"],
      repository: null,
      link: "https://wifus.id",
      desc: "A health information ecosystem provider made by Wifus Healtcare. It allows user to record patient electronic medial record, handle the pharmacy, the transaction, etc.",
    },
    {
      name: "Ilea Article Section and Management",
      image: "project-ilea.jpg",
      year: "2022",
      techStack: ["Laravel", "PHP", "Bootstrap", "JQuery", "MySQL"],
      repository: null,
      link: "https://ilea.or.id/artikels",
      desc: "A catalogue of articles published by Indonesian Literacy Educators Association where user can see the list of available articles and also read the article.",
    },
    {
      name: "Gymnasium Reservation Admin App",
      year: "2021",
      image: "project-gor-panathayuda.jpg",
      techStack: ["Bootstrap", "PHP", "Javascript", "JQuery", "MySQL"],
      repository: "https://github.com/alifiasyalsa/Panathayuda",
      link: null,
      desc: "A reservation and management application for the Panatayudha sports building. Feature includes master data, field scheduling and field transaction(reservation & payment)",
    },
    {
      name: "Online Math Competition App",
      year: "2020",
      image: "project-kmo.jpg",
      techStack: [
        "Code igniter",
        "Bootstrap",
        "PHP",
        "Javascript",
        "JQuery",
        "MySQL",
      ],
      repository: "https://github.com/alifiasyalsa/kmo-himpatika",
      link: null,
      desc: "An online mathematics competitions web app for HIMAPTIKA IKIP Siliwangi, where user can see HIMAPTIKA landing page, organize the competition and etc.",
    },
    // {
    //   name: "Digios Project Management System",
    //   image: "project-dios.jpg",
    //   techStack: [
    //     "Code igniter",
    //     "Bootstrap",
    //     "PHP",
    //     "Javascript",
    //     "JQuery",
    //     "MySQL",
    //   ],
    //   repository: "https://gitlab.com/atikapane/dios-pms",
    //   link: null,
    //   desc: "DIOS PMS is a web-based application intended to monitor employee work progress at Digital Oasis. Available features include employee data management, project data management, reporting and monitoring of employee work progress",
    // },
  ];

  return (
    <section id="work" className="w-full pt-10 h-min-screen">
      <h3
        className="text-secondary w-[50%] text-left border-b-[1px] border-b-secondary"
        style={{ lineHeight: "0.1em" }}
      >
        <span className="bg-primary pr-5">This is my work</span>
      </h3>
      <div className="mt-16">
        {projects.map((item, index) => {
          const isRepoDisabled = item.repository === null;
          const isLinkDisabled = item.link === null;

          if (index % 2 === 0) {
            return (
              <div
                className={`flex mb-32 w-full text-md h-[320px] text-right`}
                key={index}
              >
                <div className="flex-row md:flex-col order-1">
                  <img
                    src={item.image}
                    className="object-fill h-full shadow-2xl"
                  />
                </div>
                <div className="flex flex-row flex-wrap md:flex-col w-full md:w-1/2 order-2 h-full justify-center p-0 md:pl-5">
                  <h6>{item.year}</h6>
                  <h4 className="text-secondary">{item.name}</h4>
                  <p className="mt-5">{item.desc}</p>
                  <ul className="mt-5">
                    {item.techStack.map((tech) => (
                      <li
                        key={`${item.name}-${tech}`}
                        className="inline-block ml-2 text-sm font-semibold"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul>
                    <li className="inline-block ml-2">
                      <a
                        href={item.repository}
                        aria-label="GitHub"
                        target="_blank"
                        rel="noreferrer"
                        className={`${
                          isRepoDisabled
                            ? "pointer-events-none cursor-default"
                            : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={`${
                            isRepoDisabled ? "rgba(66,66,66,0.25)" : "#388087"
                          }`}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-[20px] hover:stroke-info my-5"
                        >
                          <title>GitHub</title>
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    </li>
                    <li className="inline-block ml-2">
                      <a
                        href={item.link}
                        aria-label="External Link"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={`${
                          isLinkDisabled
                            ? "pointer-events-none cursor-default"
                            : ""
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={`${
                            isLinkDisabled ? "rgba(66,66,66,0.25)" : "#388087"
                          }`}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-[20px] hover:stroke-info my-5"
                        >
                          <title>External Link</title>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          }

          return (
            <div className="flex mb-32 w-full text-md h-[320px]" key={index}>
              <div className="flex flex-row md:flex-col order-1 md:order-2 ">
                <img
                  src={item.image}
                  className="object-fill h-full shadow-2xl"
                />
              </div>
              <div className="flex flex-row flex-wrap md:flex-col w-full md:w-1/2 order-2 md:order-1 h-full justify-center p-0 md:pr-5">
                <h6>{item.year}</h6>
                <h5 className="text-secondary">{item.name}</h5>
                <p className="mt-5">{item.desc}</p>
                <ul className="mt-5">
                  {item.techStack.map((tech) => (
                    <li
                      key={`${item.name}-${tech}`}
                      className="inline-block mr-2 text-sm font-semibold"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <ul>
                  <li className="inline-block mr-2">
                    <a
                      href={item.repository}
                      aria-label="GitHub"
                      target="_blank"
                      rel="noreferrer"
                      className={`${
                        isRepoDisabled
                          ? "pointer-events-none cursor-default"
                          : ""
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={`${
                          isRepoDisabled ? "rgba(66,66,66,0.25)" : "#388087"
                        }`}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[20px] hover:stroke-info my-5"
                      >
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="inline-block mr-2">
                    <a
                      href={item.link}
                      aria-label="External Link"
                      rel="noopener noreferrer"
                      target="_blank"
                      className={`${
                        isLinkDisabled
                          ? "pointer-events-none cursor-default"
                          : ""
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={`${
                          isLinkDisabled ? "rgba(66,66,66,0.25)" : "#388087"
                        }`}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[20px] hover:stroke-info my-5"
                      >
                        <title>External Link</title>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
