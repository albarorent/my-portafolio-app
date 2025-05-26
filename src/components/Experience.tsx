import ButtonTecnology from "./ButtonTecnology";
import ExperienceList from "./ExperienceList";

const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experiencia
        </h2>
      </div>
      <div>
        <ol className="group/list">
          <ExperienceList
            date="2024 - Present"
            link="https://www.mrsoftperu.com/"
            title="Frontend Engineer   ."
            subTitle="MrSoft"
            description="Desarrollar y mantener los componentes críticos utilizados para construir la interfaz de diferentes sistemas web. Colaborar estrechamente con equipos multidisciplinares, incluyendo desarrolladores, diseñadores y gerentes de producto, para implementar y promover las mejores prácticas de accesibilidad web."
          >
            <ButtonTecnology name="JavaScript" />
            <ButtonTecnology name="React Native" />
            <ButtonTecnology name="React" />
            <ButtonTecnology name="TypeScript" />
            <ButtonTecnology name="Next.js" />
            <ButtonTecnology name="Tailwind CSS" />
          </ExperienceList>
          <ExperienceList
            date="Abril 2023 - Dic 2023"
            link="https://www.mrsoftperu.com/"
            title="Frontend Engineer   ."
            subTitle="MrSoft"
            description="Desarrollar y mantener los componentes críticos utilizados para construir la interfaz de diferentes sistemas web. Colaborar estrechamente con equipos multidisciplinares, incluyendo desarrolladores, diseñadores y gerentes de producto, para implementar y promover las mejores prácticas de accesibilidad web."
          >
            <ButtonTecnology name="JavaScript" />
            <ButtonTecnology name="React Native" />
            <ButtonTecnology name="React" />
            <ButtonTecnology name="TypeScript" />
            <ButtonTecnology name="Next.js" />
            <ButtonTecnology name="Tailwind CSS" />
          </ExperienceList>
        </ol>
      </div>
    </section>
  );
};

export default Experience;
