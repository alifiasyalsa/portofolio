const RightSidebar = () => {
  return (
    <aside className="flex justify-center w-1/12 h-screen">
      <div className="block text-sm fixed bottom-0 after:content-[''] after:w-[1px] after:h-[100px] after:m-auto after:bg-secondary after:block">
        <a
          href="mailto:alifiasyalsabila96@gmail.com"
          aria-label="Email"
          target="_blank"
          rel="noreferrer"
          style={{
            writingMode: "vertical-rl",
          }}
          className="tracking-widest text-secondary hover:text-info my-5"
        >
          alifiasyalsabila96@gmail.com
        </a>
      </div>
    </aside>
  );
};

export default RightSidebar;
