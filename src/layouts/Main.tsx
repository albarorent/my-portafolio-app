import About from "@/layouts/About";
import Experience from "@/layouts/Experience";
import Projects from "@/layouts/Projects";

const Main = () => {
  return (
    <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
      <About />
      <Experience />
      <Projects />
    </main>
  );
};

export default Main;
