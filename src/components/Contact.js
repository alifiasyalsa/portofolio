const Contact = () => {
  return (
    <section id="contact" className="table w-full h-screen">
      <div className="table-cell align-middle text-center h-full">
        <h3 className="text-secondary p-2">What&apos;s Next ?</h3>
        <h2>GET IN TOUCH</h2>
        <p className="p-5 px-44">
          Thank you for scrolling this far. I&apos;m currently open to new
          opportunities, please feel free to reach out to me if you have any
          further questions or would like to discuss potential opportunities.
        </p>
        <button
          type="button"
          className={"text-primary bg-secondary hover:bg-info focus:ring-4 focus:outline-none focus:ring-blue-800 rounded-lg px-5 py-2.5 text-center mt-8"}
        >
          Say Hello
        </button>
      </div>
    </section>
  );
};

export default Contact;
