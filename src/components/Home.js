const Home = () => {
  return (
    <section id="home" className="pt-0 sm:pt-24 table w-full h-screen">
      <div className="table-cell align-middle h-full">
        <div className="text-[1rem] md:text-[1.2rem] font-semibold w-[100%] my-4">
          Hi, my name is
        </div>
        <div className="font-bold mt-4 text-[2.5rem] sm:text-[4rem] md:text-[5rem] text-secondary w-full leading-8  sm:leading-[3rem] md:leading-[4rem]">
          Alifia Syalsabila
        </div>
        <div className="font-bold my-2 sm:my-4 text-[2rem] sm:text-[3rem] md:text-[4rem] text-secondary-light leading-8 sm:leading-[3rem] md:leading-[4rem]">
          I translate UI design into code.
        </div>
        <div className="text-[14px] sm:text-[1rem] w-full lg:w-4/6 leading-6 mt-3 sm:mt-5">
          I&apos;m a web developer specialize in building reusable and
          maintainable front-end components at{" "}
          <a
            href="https://wifus.id/"
            className="hover:text-secondary underline"
            target="_blank"
            rel="noreferrer"
          >
            PT. Sinergi Inti Dinamika
          </a>
          .
        </div>
      </div>
    </section>
  );
};

export default Home;
