import ButtonTecnology from "@/components/ButtonTecnology";
import ProyectList from "@/components/ProyectList";

const Projects = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected Projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Proyectos
        </h2>
      </div>
      <div>
        <ul className="group/list">
          <ProyectList
            title="Aplicativo Movil de Reservas para una discoteca"
            description="Aplicativo movil de reservas para una discoteca, desarrollado
                  con React Native y Expo, permitiendo a los usuarios reservar
                  mesas, entradas y pasarela de pagos usando culqi, con un diseño intuitivo y fácil de usar."
            url_img="/gia-app.jpeg"
          >
            <ButtonTecnology name="React Native" />
            <ButtonTecnology name="Expo" />
            <ButtonTecnology name="TypeScript" />
            <ButtonTecnology name="Culqi" />
          </ProyectList>
          <ProyectList
            title="Sistema de Gestión de Transporte"
            description="Sistema de gestión de transporte para una empresa de logística, desarrollado con React y Typescript, que permite a los usuarios gestionar rutas, vehículos y conductores de manera eficiente."
            url_img="/transportes-hernandez.jpeg"
            url="https://transportes-hernandez-mrsoft.vercel.app/"
          >
            <ButtonTecnology name="React" />
            <ButtonTecnology name="TypeScript" />
            <ButtonTecnology name="Tailwind CSS" />
          </ProyectList>
          <ProyectList
            title="Sistema de Mantenimiento de Vehículos"
            description="Sistema de mantenimiento de vehículos para una empresa de transporte, desarrollado con React y Typescript, que permite a los usuarios gestionar el mantenimiento preventivo y correctivo de los vehículos."
            url_img="/tecnimotors.jpeg"
            url="https://tecnimotors.vercel.app/"
          >
            <ButtonTecnology name="React" />
            <ButtonTecnology name="TypeScript" />
            <ButtonTecnology name="Tailwind CSS" />
          </ProyectList>
            <ProyectList
                title="Dgush - Ecommerce de Ropa"
                description="Dgush es un ecommerce de ropa, desarrollado con Next.js y TypeScript, que permite a los usuarios navegar por productos, añadirlos al carrito y realizar pagos de manera segura usando culqi, con un diseño moderno y responsive."
                url_img="/dgush.jpeg"
                url="https://www.dgushperu.com/"
            >
                <ButtonTecnology name="Next.js" />
                <ButtonTecnology name="TypeScript" />
                <ButtonTecnology name="Tailwind CSS" />
            </ProyectList>
            <ProyectList
                title="Mrsoft Pagina Web"
                description="Página web de Mrsoft, desarrollada con Next.js y TypeScript, que muestra los servicios ofrecidos por la empresa, con un diseño moderno y responsive."
               
                url_img="/mrsoft.jpeg"
                url="https://www.mrsoftperu.com/"
            >
                <ButtonTecnology name="Next.js" />
                <ButtonTecnology name="TypeScript" />
                <ButtonTecnology name="Tailwind CSS" />
            </ProyectList>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
