import { Button } from "#/components/ui/button";
import { Check, ChevronRight } from "lucide-react";
const Cataloge = () => {
  // Catalogue data
  const catalogItems = [
    {
      id: "materiales",
      title: "Materiales de Construcción",
      desc: "Bases sólidas, áridos y acero certificado para todo tipo de cimientos y estructuras.",
      img: "/assets/saco1.png",
      items: [
        "Cemento Gris de Alta Resistencia",
        "Arena Lavada y Gravilla Seleccionada",
        "Mortero Seco y Cal Hidratada",
        "Acero Estructural y Varillas",
      ],
    },
    {
      id: "energia",
      title: "Energía Solar y Almacenamiento",
      desc: "Autonomía energética total con paneles solares monocristalinos y bancos de baterías de litio.",
      img: "/assets/solar_battery.png",
      items: [
        "Paneles Solares Monocristalinos de Alta Gama",
        "Baterías de Litio LiFePO4 para Respaldo",
        "Inversores Híbridos Inteligentes con App",
        "Estudio de Consumo y Diseño a Medida",
      ],
    },
    {
      id: "carpinteria",
      title: "Carpintería de Aluminio",
      desc: "Cerramientos de alta precisión, ventanas y puertas diseñadas para el máximo confort acústico y térmico.",
      img: "/assets/carpinteria_aluminio.png",
      items: [
        "Ventanas Batientes y Corredizas a Medida",
        "Mamparas de Vidrio Templado Premium",
        "Puertas de Aluminio de Alta Seguridad",
        "Fachadas de Vidrio Comercial y Residencial",
      ],
    },
  ];

  return (
    <section
      id="catalogo"
      className="py-20 bg-[#f5f0e8] dark:bg-background rounded-b-4xl mx-2 md:mx-4"
    >
      <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Nuestro Catálogo
          </span>
          <h2 className="display-title text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground">
            Líneas de Productos y Soluciones Certificadas
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#f5f0e8] bg-white text-card-foreground rounded-3xl overflow-hidden flex flex-col transition-all duration-400 hover:scale-102 group cursor-pointer"
            >
              {/* Product Category Image — inset neumorphic frame */}
              <div className="h-56 relative overflow-hidden shrink-0 rounded-t-3xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                  <span className="text-xs uppercase tracking-wider text-white bg-primary/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    Ver Catálogo
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {item.desc}
                </p>

                {/* List of sub-items */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {item.items.map((sub, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full text-white rounded-xl bg-primary dark:bg-accent justify-between px-5">
                  Solicitar Cotización <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Cataloge;
