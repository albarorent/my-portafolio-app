
const About = () => {
  return (
    <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="About me"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Sobre mí
          </h2>
        </div>
        <div>
          <p className="mb-4">
            Soy desarrollador Frontend con experiencia en la construcción de
            sistemas web y móviles utilizando tecnologías modernas como <span className="text-slate-200">React,
            React Native, Next.js, TypeScript y TailwindCSS.</span> 
          </p>
          <p className="mb-4">He trabajado en el
            desarrollo de soluciones empresariales, desde sistemas de transporte
            y mantenimiento de vehículos hasta aplicaciones móviles de reservas
            y plataformas de ecommerce. Además, cuento con conocimientos en
            control de versiones usando <span className="text-slate-200">GitHub y GitLab.</span>  </p>
           
          <p className="mb-4">
Durante mi etapa como
            desarrollador FullStack, también participé en el mantenimiento de un
            ERP utilizando <span className="text-slate-200">Vanilla JavaScript, Bootstrap, JQuery y PHP,</span> lo que
            me permitió obtener una visión más completa del ciclo de vida del
            software. Me apasiona crear interfaces intuitivas, eficientes y
            modernas, enfocándome siempre en la experiencia del usuario y la
            calidad del código.
            </p>
        </div>
      </section>
  )
}

export default About