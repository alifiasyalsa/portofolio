const About = () => {
  return (
    <section id="about" className="w-full pt-16 min-h-screen">
      <h3
        className="text-secondary w-[50%] text-left border-b-[1px] border-b-secondary"
        style={{ lineHeight: "0.1em" }}
      >
        <span className="bg-primary pr-5">About Me</span>
      </h3>
      <div className="flex mt-8 w-full text-md">
        <div className="flex flex-wrap w-3/4 space-y-3 pr-32 leading-8">
          <p>
            My name is Alifia Syalsabila, I turn designs into interactive user
            interfaces. I started my coding journey about 5 years ago and till
            now I have experience building and maintaining (sometimes designing)
            few web applications with various tools and frameworks.
          </p>
          <p>
            Fast forward today, I had the opportunity to work at WIFUS
            Healthcare as a front-end web developer. My main focus these days is
            building and maintaining end-to-end user interface of a clinic
            management system using Next JS.
          </p>
          <p>
            Here are some of the technologies I've been working with recentyly:
          </p>
          <ul className="list-disc pl-8 text-sm text-secondary-light w-1/2 leading-7">
            {["React JS", "Javascript", "PHP", "Laravel"].map((item) => {
              return (
                <li>
                  <span className="text-info">{item}</span>
                </li>
              );
            })}
          </ul>
          <ul className="list-disc pl-8 text-sm  text-secondary-light w-1/2 leading-7">
            {["Next JS", "Code Igniter", "TailwindCSS", "Bootstrap"].map(
              (item) => {
                return (
                  <li>
                    <span className="text-info">{item}</span>
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <div className="flex">
          <img
            src="./profile.jpg"
            className="m-auto w-[250px] mt-3 drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
