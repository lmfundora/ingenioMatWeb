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
import GPattern from "../ui/GPattern";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative pt-12 pb-20 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-8 md:space-y-12 text-left relative">
            {/* Brand G-pattern watermark */}
            <GPattern
              cols={6}
              rows={4}
              variant="primary"
              opacity="opacity-[0.05]"
              fontSize="text-7xl"
              className="absolute -top-8 -left-4 w-[110%] h-[110%] z-0 [mask-image:linear-gradient(to_bottom_right,transparent_20%,black_80%)]"
            />
            <div className="relative z-10 space-y-8 md:space-y-12">
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
          </div>

          {/* Right Images (Bento Grid Style Layout) */}
          <div className="lg:col-span-6 relative flex justify-center items-center [perspective:1500px]">
            {/* Decorative Glowing Orbs for a fun, daring, and modern feel */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none animate-pulse duration-[8000ms]"></div>
            <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-pulse duration-[10000ms]"></div>

            <div className="w-full max-w-2xl grid grid-cols-12 gap-3 md:gap-4 auto-rows-[100px] md:auto-rows-[115px] items-stretch animate-fade-in relative z-10 [transform-style:preserve-3d] [transform:rotateX(7deg)_rotateY(-14deg)_rotateZ(2deg)]">
              {/* Card 1 - Main Brand Showcase (Cemento y mortero) */}
              <div className="col-span-12 md:col-span-6 row-span-2 bg-[#FDFCFC]/90 backdrop-blur-xs border border-border rounded-3xl p-4 md:p-6 flex flex-col justify-between relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:border-primary/50 hover:[transform:translateZ(40px)] [transform-style:preserve-3d]">
                <div className="flex-1 flex items-center justify-center py-3 [transform:translateZ(15px)]">
                  <img
                    src="/assets/Gemini_Generated_Image_3d90v23d90v23d902.png"
                    alt="Cemento y Mortero de alta resistencia"
                    className="w-auto h-full max-h-[120px] md:max-h-[150px] object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col text-[10px] font-bold text-muted-foreground uppercase tracking-widest pt-2.5 mt-1 absolute bottom-3 left-3 [transform:translateZ(25px)]">
                  <div className="flex justify-between items-center w-full gap-2">
                    <span className="text-[9px] md:text-[10px] font-bold tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                      <Package className="w-3 h-3" /> Cemento y Mortero
                    </span>
                  </div>
                  <span className="ms-1 mt-1">Fraguado Controlado</span>
                </div>
              </div>

              {/* Card 2 - Constructor (el tipo) */}
              <div className="col-span-6 md:col-span-6 row-span-2 overflow-hidden rounded-3xl border border-border relative group transition-all duration-500 hover:shadow-2xl hover:border-primary/50 hover:[transform:translateZ(40px)] bg-muted [transform-style:preserve-3d]">
                <img
                  src="assets\1Gemini_Generated_Image_3ot37r3ot37r3ot3.png"
                  alt="Constructor de IngenioMat"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Card 3 - Casa del Futuro (Reemplaza Techos) */}
              <div className="col-span-6 md:col-span-4 row-span-1 overflow-hidden rounded-2xl border border-border relative group transition-all duration-500 hover:shadow-2xl hover:border-primary/50 hover:[transform:translateZ(40px)] bg-muted [transform-style:preserve-3d]">
                <img
                  src="/assets/dream_house_1.png"
                  alt="Tu casa soñada con materiales de IngenioMat"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-3 [transform:translateZ(10px)]">
                  <span className="text-[9px] font-bold tracking-wider text-white uppercase bg-emerald-600/90 backdrop-blur-xs px-2 py-0.5 rounded-full w-fit mb-1 flex items-center gap-1 [transform:translateZ(20px)]">
                    <Layers className="w-3 h-3" /> El Sueño
                  </span>
                  <p className="text-white text-[11px] font-extrabold leading-tight tracking-wide [transform:translateZ(20px)]">
                    Casas de ensueño
                  </p>
                </div>
              </div>

              {/* Card 4 - Diseño Vanguardista (Reemplaza Carpintería) */}
              <div className="col-span-6 md:col-span-4 row-span-1 overflow-hidden rounded-2xl border border-border relative group transition-all duration-500 hover:shadow-2xl hover:border-primary/50 hover:[transform:translateZ(40px)] bg-muted [transform-style:preserve-3d]">
                <img
                  src="/assets/dream_house_2.png"
                  alt="Diseño moderno y exclusivo con IngenioMat"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-3 [transform:translateZ(10px)]">
                  <span className="text-[9px] font-bold tracking-wider text-white uppercase bg-sky-600/90 backdrop-blur-xs px-2 py-0.5 rounded-full w-fit mb-1 flex items-center gap-1 [transform:translateZ(20px)]">
                    <ShieldCheck className="w-3 h-3" /> Vanguardia
                  </span>
                  <p className="text-white text-[11px] font-extrabold leading-tight tracking-wide [transform:translateZ(20px)]">
                    Diseño moderno
                  </p>
                </div>
              </div>

              {/* Card 5 - Resultado Premium (Reemplaza Losas) */}
              <div className="col-span-12 md:col-span-4 row-span-1 overflow-hidden rounded-2xl border border-border relative group transition-all duration-500 hover:shadow-2xl hover:border-primary/50 hover:[transform:translateZ(40px)] bg-muted [transform-style:preserve-3d]">
                <img
                  src="/assets/dream_house_3.png"
                  alt="Construcción finalizada premium"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-3 [transform:translateZ(10px)]">
                  <span className="text-[9px] font-bold tracking-wider text-white uppercase bg-amber-600/95 backdrop-blur-xs px-2 py-0.5 rounded-full w-fit mb-1 flex items-center gap-1 [transform:translateZ(20px)]">
                    <Award className="w-3 h-3" /> Premium
                  </span>
                  <p className="text-white text-[11px] font-extrabold leading-tight tracking-wide [transform:translateZ(20px)]">
                    Tu obra terminada
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
