const About = () => {
  return (
    <section id="about" className="w-full h-screen">
      <div className="table w-full text-md h-full">
        <div className="table-row align-middle w-2/6 text-center lg:table-cell lg:h-full ">
          <div className="inline-block relative before:absolute before:top-[-10%] before:left-[-10%] before:w-[100%] before:h-[100%] before:border-solid before:border-[#c2edce] before:border-[3px] before:content-['']">
            <img src="./profile.jpg" className="w-[500px]" />
          </div>
        </div>
        <div className="table-row p-0 h-fit align-middle leading-8 space-y-3 lg:table-cell lg:pl-20 lg:h-full">
          <h3
            className="text-secondary w-[50%] mb-8"
            style={{ lineHeight: "0.1em" }}
          >
            <span className="bg-primary">This is me</span>
          </h3>
          <p>
            My name is Alifia Syalsabila, I am a front-end web developer. I
            started my coding journey about 5 years ago and till now I have
            experience building and maintaining (sometimes designing) few web
            applications with various tools and frameworks.
          </p>
          <p>
            Fast forward today, I had the opportunity to work at WIFUS
            Healthcare. My main focus these days is building and maintaining
            end-to-end user interface of a clinic management system using Next
            JS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
