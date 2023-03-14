import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";
import Sidebar from "./components/Sidebar";
import Work from "./components/Work";

function App() {
  return (
    <main className="text-info bg-primary w-full h-full min-h-screen font-sans">
      <Navbar />
      <section className="flex flex-nowrap">
        <Sidebar />
        <content className="w-full px-32">
          <Home />
          <About />
          <Work />
          <Contact />
        </content>
        <RightSidebar />
      </section>
    </main>
  );
}

export default App;
