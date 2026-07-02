import { Button } from "#/components/ui/button";
import { Check, ChevronRight } from "lucide-react";
const Cataloge = () => {
  // Catalogue data
  const catalogItems = [
    {
      id: "cemento",
      title: "Cemento, Mortero y Cal",
      desc: "Bases sólidas para tu estructura con fraguado controlado.",
      img: "/assets/saco1.png",
      items: [
        "Cemento Gris de Alta Resistencia",
        "Mortero Seco Fino y Grueso",
        "Cal Hidratada de Obra",
        "Hormigón Elaborado",
      ],
    },
    {
      id: "agregados",
      title: "Agregados y Rellenos",
      desc: "Granulometría óptima para mezclas de alta compresión.",
      img: "/assets/images1.png",
      items: [
        "Arena Fina Lavada",
        "Arena Gruesa Seleccionada",
        "Gravilla Triturada ¾",
        "Polvo de Piedra / Relleno",
      ],
    },
    {
      id: "zinc",
      title: "Techos de Zinc y Cubiertas",
      desc: "Resistencia climática garantizada con chapa galvanizada.",
      img: "/assets/techos_zinc.png",
      items: [
        "Chapa Zinc Ondulada 3.66m",
        "Paneles Termoacústicos",
        "Cumbreras y Canaletas",
        "Tornillos Auto-perforantes",
      ],
    },
    {
      id: "aluminio",
      title: "Carpintería de Aluminio",
      desc: "Perfiles estéticos y herméticos para ventanas y puertas.",
      img: "/assets/carpinteria_aluminio.png",
      items: [
        "Perfiles de Aluminio Gris/Negro",
        "Marcos Termolacados",
        "Accesorios y Herrajes",
        "Ventanas Corredizas Completas",
      ],
    },
    {
      id: "tuberias",
      title: "Tuberías e Instalaciones",
      desc: "Conducción segura para redes de agua, gas y electricidad.",
      img: "/assets/manguera.png",
      items: [
        "Tuberías Hidráulicas PVC y Termofusión",
        "Tubos Eléctricos Corrugados",
        "Accesorios, Codos y Te",
        "Mangueras de Alta Presión",
      ],
    },
    {
      id: "falsotecho",
      title: "Losas y Falsos Techos",
      desc: "Terminaciones interiores y exteriores elegantes y ligeras.",
      img: "/assets/falsotecho1.png",
      items: [
        "Placas de Falso Techo de Yeso",
        "Perfiles de Suspensión Metálica",
        "Losas Aligeradas",
        "Revestimientos de Fibrocemento",
      ],
    },
  ];
  return (
    <section id="catalogo" className="py-20 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Nuestro Catálogo
          </span>
          <h2 className="display-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Soluciones Completas de Obra Negra a Terminaciones
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded"></div>
          <p className="text-muted-foreground text-sm sm:text-base">
            Proveemos materiales ensayados y aprobados por laboratorios
            certificados. Todo disponible para un retiro eficiente en planta para
            minimizar tus costos y tiempos de carga.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogItems.map((item) => (
            <div
              key={item.id}
              className="bg-card text-card-foreground rounded-2xl border border-border shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/45 group"
            >
              {/* Product Category Image */}
              <div className="h-56 bg-muted relative overflow-hidden shrink-0 border-b border-border">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-primary/90 backdrop-blur-sm px-2.5 py-1 rounded">
                    Ver Catálogo
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
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

                <Button className="w-full font-semibold bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  Solicitar Cotización <ChevronRight className="w-4 h-4 ml-1" />
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
