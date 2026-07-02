import {
  Sparkles,
  ArrowRight,
  Check,
  Package,
  Layers,
  ShieldCheck,
  Award,
} from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative pt-12 pb-20 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8 md:space-y-12 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Socio Logístico de tu Obra
              </span>
            </div>
            <h1 className="display-title text-4xl sm:text-5xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1] md:leading-[1.05]">
              La <span className="text-primary bg-clip-text">base sólida</span>{" "}
              de cada gran{" "}
              <span className="text-primary bg-clip-text">estructura</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
              Producimos y vendemos materiales de primera calidad para todo tipo
              de obras. Suministramos con precisión desde remodelaciones
              domésticas hasta megaproyectos de infraestructura.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" color="primary" className="h-12 px-8">
                Ver Catálogo <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 border-border hover:bg-accent hover:text-accent-foreground"
              >
                Asesoría en WhatsApp
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-4 text-xs font-semibold text-muted-foreground">
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-primary" /> Calidad Certificada
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-primary" /> En su Localidad
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-primary" /> Catálogo Inmejorable
              </span>
            </div>
          </div>

          {/* Right Images (Bento Grid Style Layout) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="w-full max-w-2xl grid grid-cols-12 gap-3 md:gap-4 auto-rows-[100px] md:auto-rows-[115px] items-stretch animate-fade-in">
              {/* Card 1 - Main Brand Showcase */}
              <div className="col-span-12 md:col-span-6 row-span-2 bg-[#FDFCFC] border border-border rounded-3xl p-4 md:p-6 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex-1 flex items-center justify-center py-3">
                  <img
                    src="/assets/Gemini_Generated_Image_3d90v23d90v23d902.png"
                    alt="Cemento y Mortero de alta resistencia"
                    className="w-auto h-full max-h-[120px] md:max-h-[150px] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col text-[10px] font-bold text-muted-foreground uppercase tracking-widest pt-2.5 mt-1 absolute bottom-3 left-3">
                  <div className="flex justify-between items-center w-full gap-2">
                    <span className="text-[9px] md:text-[10px] font-bold tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                      <Package className="w-3 h-3" /> Cemento y Mortero
                    </span>
                  </div>
                  <span className="ms-1">Fraguado Controlado</span>
                </div>
              </div>

              {/* Card 2 - Constructor (Tall) */}
              <div className="col-span-6 md:col-span-6 row-span-2 overflow-hidden rounded-3xl border border-border relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-muted">
                <img
                  src="assets\1Gemini_Generated_Image_3ot37r3ot37r3ot3.png"
                  alt="Constructor de IngenioMat"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Card 3 - Techos (Zinc) */}
              <div className="col-span-6 md:col-span-4 row-span-1 overflow-hidden rounded-2xl border border-border relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-muted">
                <img
                  src="/assets/techos_zinc.png"
                  alt="Techos de zinc y chapas galvanizadas"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-3">
                  <span className="text-[9px] font-bold tracking-wider text-white uppercase bg-emerald-600 px-1.5 py-0.5 rounded w-fit mb-1 flex items-center gap-1">
                    <Layers className="w-3 h-3" /> Cubiertas
                  </span>
                  <p className="text-white text-[11px] font-bold leading-tight">
                    Techos de zinc y chapas
                  </p>
                </div>
              </div>

              {/* Card 4 - Carpintería */}
              <div className="col-span-6 md:col-span-4 row-span-1 overflow-hidden rounded-2xl border border-border relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-muted">
                <img
                  src="/assets/carpinteria_aluminio.png"
                  alt="Perfiles y carpintería de aluminio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-3">
                  <span className="text-[9px] font-bold tracking-wider text-white uppercase bg-sky-600 px-1.5 py-0.5 rounded w-fit mb-1 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Carpintería
                  </span>
                  <p className="text-white text-[11px] font-bold leading-tight">
                    Perfiles y marcos de aluminio
                  </p>
                </div>
              </div>

              {/* Card 5 - Losas */}
              <div className="col-span-12 md:col-span-4 row-span-1 overflow-hidden rounded-2xl border border-border relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-muted">
                <img
                  src="/assets/losas_ceramicas.png"
                  alt="Losas cerámicas y revestimientos premium"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-3">
                  <span className="text-[9px] font-bold tracking-wider text-white uppercase bg-amber-600 px-1.5 py-0.5 rounded w-fit mb-1 flex items-center gap-1">
                    <Award className="w-3 h-3" /> Cerámicas
                  </span>
                  <p className="text-white text-[11px] font-bold leading-tight">
                    Losas, cerámicas y mármol
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Under-Hero Banner Text */}
        <div className="mt-20 border-y border-border py-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left bg-accent/40 rounded-2xl px-6 md:px-10">
          <p className="text-sm md:text-base max-w-2xl text-foreground">
            <span className="text-primary font-bold">★ PRODUCCIÓN Y VENTA:</span>{" "}
            Fabricamos y proveemos materiales listos para retirar en planta.
            Abastecimiento continuo de gravilla, arena, cemento y carpintería de aluminio.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
            <span className="text-xs font-bold tracking-wider uppercase text-foreground">
              Operando Hoy - Ventas Activas
            </span>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="flex justify-around gap-4 mt-16 text-center">
          <div className="space-y-1">
            <div className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              500k+
            </div>
            <div className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Toneladas Producidas
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              1,200+
            </div>
            <div className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Obras Abastecidas
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              98%
            </div>
            <div className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Clientes Satisfechos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
