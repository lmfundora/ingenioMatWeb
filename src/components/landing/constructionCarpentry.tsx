import { Button } from "#/components/ui/button";
import { Check, ChevronRight, Hammer, Layers } from "lucide-react";
import GPattern from "../ui/GPattern";

const ConstructionCarpentry = () => {
  return (
    <section id="construccion" className="py-20 bg-background relative overflow-hidden">
      {/* Brand G-pattern watermark */}
      <GPattern
        cols={8}
        rows={3}
        variant="primary"
        opacity="opacity-[0.03]"
        fontSize="text-8xl"
        className="absolute top-4 right-4 w-96 h-64 z-0 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Nuestros Servicios
          </span>
          <h2 className="display-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Construcción Civil y Carpintería de Aluminio
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded"></div>
          <p className="text-muted-foreground text-sm sm:text-base">
            Combinamos la solidez de la edificación estructural con la precisión estética de la carpintería de aluminio de alta gama para entregar obras perfectas de inicio a fin.
          </p>
        </div>

        {/* 2 Column Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Column 1: Construcción */}
          <div className="bg-[#f5f0e8] dark:bg-card rounded-3xl overflow-hidden flex flex-col transition-all duration-400 shadow-[6px_6px_14px_#d8d0c4,-6px_-6px_14px_#ffffff] dark:shadow-none hover:scale-[1.01] group">
            {/* Image frame */}
            <div className="h-64 relative overflow-hidden rounded-t-3xl shadow-[inset_4px_4px_10px_#c8cacc,inset_-4px_-4px_10px_#ffffff] dark:shadow-none">
              <img
                src="/assets/dream_house_2.png"
                alt="Construcción civil y obras"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="flex items-center gap-2 text-white">
                  <Hammer className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-lg font-bold tracking-wide">Construcción Civil & Reformas</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow text-left">
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Desarrollamos proyectos residenciales y comerciales llave en mano. Nos encargamos de todo el proceso: cimentación, levantamiento de estructuras de hormigón, muros, acabados y dirección de obra profesional.
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Estructuras de Hormigón Armado y Muros",
                  "Remodelación Completa de Viviendas y Oficinas",
                  "Albañilería Fina y Enchapes de Cerámicas",
                  "Dirección Técnica y Cómputos Métricos",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 text-white bg-primary shadow-md hover:bg-primary/95 rounded-xl">
                  Cotizar Proyecto <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
                <Button variant="outline" className="flex-1 border-border rounded-xl">
                  Hablar con Ingeniero
                </Button>
              </div>
            </div>
          </div>

          {/* Column 2: Carpintería de Aluminio */}
          <div className="bg-[#f5f0e8] dark:bg-card rounded-3xl overflow-hidden flex flex-col transition-all duration-400 shadow-[6px_6px_14px_#d8d0c4,-6px_-6px_14px_#ffffff] dark:shadow-none hover:scale-[1.01] group">
            {/* Image frame */}
            <div className="h-64 relative overflow-hidden rounded-t-3xl shadow-[inset_4px_4px_10px_#c8cacc,inset_-4px_-4px_10px_#ffffff] dark:shadow-none">
              <img
                src="/assets/carpinteria_aluminio.png"
                alt="Carpintería de aluminio premium"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="flex items-center gap-2 text-white">
                  <Layers className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-lg font-bold tracking-wide">Carpintería de Aluminio a Medida</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow text-left">
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Diseñamos y fabricamos sistemas de aluminio de alta precisión para fachadas, ventanas, puertas y cerramientos. Garantizamos hermeticidad y durabilidad utilizando perfiles certificados de alto calibre.
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Ventanas Corredizas, Batientes y Oscilobatientes",
                  "Mamparas de Vidrio Templado y Divisiones de Oficina",
                  "Puertas de Aluminio de Alta Resistencia y Seguridad",
                  "Cerramientos Termoacústicos y Portones",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 text-white bg-primary shadow-md hover:bg-primary/95 rounded-xl">
                  Ver Perfiles y Diseños <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
                <Button variant="outline" className="flex-1 border-border rounded-xl">
                  WhatsApp Carpintería
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionCarpentry;
