const About = () => {
  return (
    <section id="about" className="w-full h-screen">
      <h3
        className="text-secondary w-[100%] text-left border-b-[1px] border-b-secondary visible md:invisible"
        style={{ lineHeight: "0.1em" }}
      >
        <span className="bg-primary pr-5">This is me</span>
      </h3>
      <div className="table border-separate border-spacing-y-3 w-full text-md h-fit md:h-full mt-10 md:mt-0">
        <div className="table-row align-middle w-2/6 text-center md:table-cell md:h-full">
          <div className="inline-block relative before:absolute before:top-[-10%] before:left-[-10%] before:w-[100%] before:h-[100%] before:border-solid before:border-[#c2edce] before:border-[3px] before:content-['']">
            <img src="./profile.jpg" className="w-[250px] md:w-[400px]" />
          </div>
        </div>
        <div className="table-row pt-24 align-middle leading-8 space-y-3 md:table-cell md:pl-10 xl:pl-20 h-full">
          <h3
            className="text-secondary w-[50%] mb-8 invisible md:visible"
            style={{ lineHeight: "0.1em" }}
          >
            <span className="bg-primary">This is me</span>
          </h3>
          <p>
            My name is Alifia Syalsabila, and I am a front-end web developer. I
            started my coding journey about five years ago, and till now, I have
            experience building and maintaining (sometimes designing) a few web
            applications with various tools and frameworks.
          </p>
          <p>
            Fast forward to today, I had the opportunity to work at WIFUS
            Healthcare. My main focus these days is building and maintaining the
            end-to-end user interface of a clinic management system using Next
            JS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
