const Home = () => {
  return (
    <section className="pt-24 table w-full h-screen">
      <div className="table-cell align-middle h-full">
        <div className="text-[1.2rem] font-semibold w-[100%]">
          Hi, my name is
        </div>
        <div className="leading-10 font-bold mt-8 mb-4">
          <span className="text-[5rem] text-secondary w-full">
            Alifia Syalsabila.
          </span>
          <br />
          <span className="text-[4rem] text-secondary-light">
            I translate UI design into code.
          </span>
        </div>
        <div className="text-[1rem] w-4/6 leading-7">
          I'm a web developer, specialize in building reusable and maintainable
          front-end components at{" "}
          <a
            href="https://wifus.id/"
            className="hover:text-secondary underline"
            target="_blank"
          >
            WIFUS Healtcare
          </a>
          .
        </div>
      </div>
    </section>
  );
};

export default Home;
