import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Truck,
  ShieldCheck,
  Calculator,
  Check,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Award,
  Clock,
  Sparkles,
  Package,
  Layers,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State for interactive materials calculator
  const [calcArea, setCalcArea] = useState<number>(12);
  const [calcThickness, setCalcThickness] = useState<number>(5);
  const [calcType, setCalcType] = useState<string>("contrapiso");

  // Simple calculation formula
  // Contrapiso: ~300 kg cement per m3, Sand: ~1 m3 per m3 of mortar
  // Revoque/Mortero general: ~400 kg cement per m3
  const volumeM3 = calcArea * (calcThickness / 100);

  let cementBags = 0;
  let sandM3 = 0;
  let mortarBags = 0;

  if (calcType === "contrapiso") {
    // 1 m3 needs approx 6 bags of cement (50kg) and 1 m3 sand
    cementBags = Math.ceil(volumeM3 * 6);
    sandM3 = Number((volumeM3 * 1.1).toFixed(2));
  } else if (calcType === "revoque") {
    // 1 m3 needs approx 8 bags of cement and 0.9 m3 sand
    cementBags = Math.ceil(volumeM3 * 8);
    sandM3 = Number((volumeM3 * 0.95).toFixed(2));
  } else {
    // Mortero premezclado / Listo (needs ~20kg per m2 per cm of thickness)
    mortarBags = Math.ceil((calcArea * calcThickness * 20) / 40); // 40kg bags
  }

  // Categories list for the scrolling chip bar
  const categories = [
    "Cemento y Arena",
    "Hierro y Acero",
    "Techos de Zinc",
    "Carpintería de Aluminio",
    "Falso Techo",
    "Losas y Cerámicas",
    "Tuberías Hidráulicas",
    "Tuberías Eléctricas",
    "Polvo de Piedra",
    "Mortero y Cal",
  ];

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
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex flex-col font-sans">
      {/* ----------------- HEADER & NAVBAR ----------------- */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo container */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center">
              <img
                src="/assets/WhatsApp Image 2026-06-18 at 18.35.29.svg"
                alt="IngenioMat Logo"
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="nav-link is-active">
              Inicio
            </a>
            <a href="#ventajas" className="nav-link">
              Ventajas
            </a>
            <a href="#catalogo" className="nav-link">
              Materiales
            </a>
            <a href="#calculadora" className="nav-link">
              Calculadora
            </a>
            <a href="#nosotros" className="nav-link">
              Nosotros
            </a>
            <a href="#contacto" className="nav-link">
              Contacto
            </a>
          </nav>

          {/* CTA Right */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              size="lg"
              color="primary"
              className="text-primary-foreground "
            >
              Presupuesto Rápido
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background px-4 pt-4 pb-6 space-y-3 animate-fade-in shadow-xl">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold hover:bg-accent hover:text-primary transition-colors"
            >
              Inicio
            </a>
            <a
              href="#ventajas"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold hover:bg-accent hover:text-primary transition-colors"
            >
              Ventajas
            </a>
            <a
              href="#catalogo"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold hover:bg-accent hover:text-primary transition-colors"
            >
              Materiales
            </a>
            <a
              href="#calculadora"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold hover:bg-accent hover:text-primary transition-colors"
            >
              Calculadora
            </a>
            <a
              href="#nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold hover:bg-accent hover:text-primary transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold hover:bg-accent hover:text-primary transition-colors"
            >
              Contacto
            </a>
            <div className="pt-4 px-3">
              <Button
                color="primary"
                className="w-full text-primary-foreground"
              >
                Presupuesto Rápido
              </Button>
            </div>
          </div>
        )}
      </header>
      {/* ----------------- HERO SECTION ----------------- */}
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
                Materiales que{" "}
                <span className="text-primary bg-clip-text">Cimentan</span> tus
                Grandes Ideas
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
                En <strong>IngenioMat</strong> proveemos cemento, áridos, techos
                de zinc, tuberías e instalaciones de primera calidad.
                Abastecemos desde refacciones residenciales hasta megaproyectos
                de infraestructura.
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
                  <Check className="w-4 h-4 text-primary" /> Envío a Obra en 24h
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-border"></span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-primary" /> Flota Propia
                </span>
              </div>
            </div>

            {/* Right Images (Wireframe Style Layout) */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-xl grid grid-cols-12 gap-4 items-center">
                {/* Column 1 - Smaller tall image */}
                <div className="col-span-4 self-center animate-fade-in">
                  <div className="overflow-hidden rounded-2xl border border-border aspect-[3/4] bg-muted relative group">
                    <img
                      src="/assets/saco1.png"
                      alt="Cemento y Mortero de alta resistencia"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                      <span className="text-[11px] font-bold tracking-wider text-white uppercase bg-primary px-1.5 py-0.5 rounded">
                        Mortero
                      </span>
                    </div>
                  </div>
                </div>

                {/* Column 2 - Main Larger image */}
                <div className="col-span-8 relative">
                  <div className="relative overflow-hidden rounded-3xl border border-border aspect-[3/4] bg-muted group">
                    <img
                      src="/assets/Gemini_Generated_Image_mpjn0wmpjn0wmpjn.png"
                      alt="Materiales de construccion premium"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-6">
                      <div>
                        <span className="text-xs font-bold tracking-wider text-background uppercase bg-secondary px-2 py-0.5 rounded mb-1 inline-block">
                          Distribuidor Directo
                        </span>
                        <p className="text-white font-bold text-lg leading-tight">
                          Stock ilimitado de perfiles, cubiertas y morteros
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Under-Hero Banner Text */}
          <div className="mt-20 border-y border-border py-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left bg-accent/40 rounded-2xl px-6 md:px-10">
            <p className="text-sm md:text-base max-w-2xl text-foreground">
              <span className="text-primary font-bold">★ LOGÍSTICA TOTAL:</span>{" "}
              Coordinamos entregas express directamente en tu obra. Descarga
              mecanizada de gravilla, arena, cemento y carpintería de aluminio.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
              <span className="text-xs font-bold tracking-wider uppercase text-foreground">
                Operando Hoy - Despachos Activos
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
                Toneladas Despachadas
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
      {/* ----------------- CATEGORIES TICKER / CHIPS ----------------- */}
      <div className="bg-foreground py-5 overflow-hidden border-y border-border">
        <div className="flex whitespace-nowrap gap-8 justify-center flex-wrap px-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs md:text-sm font-bold tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              {cat}
            </div>
          ))}
        </div>
      </div>
      {/* ----------------- WHY US / VALUE PROP SECTION ----------------- */}
      <section id="ventajas" className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="display-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Abastecimiento Sin Interrupciones, Calidad Sin Compromisos
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded"></div>
            <p className="text-muted-foreground text-sm sm:text-base">
              Entendemos que el retraso en un material detiene toda la obra. Por
              eso estructuramos nuestro servicio para garantizar fluidez,
              precisión técnica y stock permanente.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl aspect-[4/5] bg-muted group">
                <img
                  src="/assets/images23.png"
                  alt="Stock y logistica de materiales de construccion"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-8 text-left text-white">
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <Truck className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Flota de Despacho Propia
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Entregas Programadas
                  </h3>
                  <p className="text-sm text-gray-300">
                    Descargamos directamente en el punto de acopio indicado por
                    tu jefe de obra, cuidando la integridad del producto.
                  </p>
                </div>
              </div>
            </div>

            {/* Right bullet points */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="flex gap-4 items-start p-6 rounded-2xl bg-background border border-border transition-all duration-300 hover:border-primary/30">
                <div className="p-3.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    Certificación Estructural Absoluta
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Todos nuestros cementos, hormigones, morteros y varillas de
                    acero estructural están certificados bajo estrictas normas
                    de resistencia a la compresión y tracción.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 rounded-2xl bg-background border border-border transition-all duration-300 hover:border-primary/30">
                <div className="p-3.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    Servicio de Cómputo de Planos Gratis
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Envíanos tu plano de estructuras o instalaciones y nuestros
                    ingenieros calcularán las cantidades exactas de tubos,
                    sacos, losas y zinc para evitar el desperdicio.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-6 rounded-2xl bg-background border border-border transition-all duration-300 hover:border-primary/30">
                <div className="p-3.5 rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    Atención Mayorista y Minorista Directa
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Tenemos escalas de precios optimizadas para compras por
                    volumen destinadas a constructoras, y también atendemos con
                    calidez a constructores individuales y albañiles.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/95 text-primary-foreground font-semibold px-8"
                >
                  Descargar Fichas Técnicas
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------- INTERACTIVE CALCULATOR SECTION ----------------- */}
      <section id="calculadora" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Calculator explanation */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/35 text-foreground">
                <Calculator className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Cómputo en Segundos
                </span>
              </div>
              <h2 className="display-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                Calcula tus Materiales de Mezcla
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                ¿Planeas fundir un contrapiso o realizar un revoque? Ingresa el
                área de la superficie y el grosor para obtener un estimado de
                los materiales que necesitas de inmediato.
              </p>

              <div className="space-y-3 pt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>
                    Cálculos basados en proporciones de mortero estándar.
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Evita comprar de más y ahorra costos logísticos.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>
                    Añade un 10% automático de desperdicio por seguridad.
                  </span>
                </div>
              </div>
            </div>

            {/* Actual Calculator Widget Card */}
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary to-secondary blur-lg opacity-25"></div>
                <div className="relative bg-card text-card-foreground p-8 rounded-3xl border border-border shadow-xl text-left">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
                    <Layers className="w-5 h-5 text-primary" /> Estimador de
                    Mezcla IngenioMat
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Select application type */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="calc-type"
                        className="font-semibold text-xs uppercase tracking-wider text-muted-foreground"
                      >
                        Tipo de Aplicación
                      </Label>
                      <Select value={calcType} onValueChange={setCalcType}>
                        <SelectTrigger
                          id="calc-type"
                          className="w-full bg-accent/40 border-border"
                        >
                          <SelectValue placeholder="Seleccionar aplicación" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="contrapiso">
                            Contrapiso Estructural (1:3:3)
                          </SelectItem>
                          <SelectItem value="revoque">
                            Revoque / Enlucido de Pared
                          </SelectItem>
                          <SelectItem value="morterolisto">
                            Mortero Listo (Sacos premezclados)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Area Input */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="calc-area"
                        className="font-semibold text-xs uppercase tracking-wider text-muted-foreground"
                      >
                        Área a Cubrir (m²)
                      </Label>
                      <div className="relative">
                        <Input
                          id="calc-area"
                          type="number"
                          value={calcArea}
                          onChange={(e) =>
                            setCalcArea(Math.max(1, Number(e.target.value)))
                          }
                          className="bg-accent/40 border-border pr-10"
                        />
                        <span className="absolute right-3 top-2.5 text-xs text-muted-foreground font-bold">
                          m²
                        </span>
                      </div>
                    </div>

                    {/* Thickness Input */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="calc-thickness"
                        className="font-semibold text-xs uppercase tracking-wider text-muted-foreground"
                      >
                        Grosor de la Capa (cm)
                      </Label>
                      <div className="relative">
                        <Input
                          id="calc-thickness"
                          type="number"
                          value={calcThickness}
                          onChange={(e) =>
                            setCalcThickness(
                              Math.max(1, Number(e.target.value)),
                            )
                          }
                          className="bg-accent/40 border-border pr-10"
                        />
                        <span className="absolute right-3 top-2.5 text-xs text-muted-foreground font-bold">
                          cm
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Calculator results */}
                  <div className="p-6 rounded-2xl bg-accent border border-border space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border pb-2">
                      Materiales Estimados Requeridos (Incluye 10% desperdicio)
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {calcType !== "morterolisto" ? (
                        <>
                          <div className="bg-card border border-border p-4 rounded-xl flex items-center gap-3">
                            <Package className="w-8 h-8 text-primary shrink-0" />
                            <div>
                              <div className="text-2xl font-bold text-foreground">
                                {cementBags}
                              </div>
                              <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                                Sacos de Cemento (50kg)
                              </div>
                            </div>
                          </div>
                          <div className="bg-card border border-border p-4 rounded-xl flex items-center gap-3">
                            <Layers className="w-8 h-8 text-primary shrink-0" />
                            <div>
                              <div className="text-2xl font-bold text-foreground">
                                {sandM3}
                              </div>
                              <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                                Arena Gruesa (m³)
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="bg-card border border-border p-4 rounded-xl flex items-center gap-3 col-span-2">
                          <Package className="w-8 h-8 text-primary shrink-0" />
                          <div>
                            <div className="text-2xl font-bold text-foreground">
                              {mortarBags}
                            </div>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                              Sacos de Mortero Listo (40kg)
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="text-[11px] text-muted-foreground text-left leading-relaxed">
                      * Este cálculo es orientativo. El consumo real puede
                      variar según la técnica de aplicación, rugosidad del
                      soporte e hidratación de la mezcla. Para estructuras de
                      hormigón armado complejas, consulte a su calculista.
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end gap-3">
                    <Button
                      variant="outline"
                      className="border-border hover:bg-accent hover:text-accent-foreground font-semibold"
                    >
                      Limpiar
                    </Button>
                    <Button className="bg-primary hover:bg-primary/95 text-primary-foreground font-semibold">
                      Cotizar Estos Materiales
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------- CATALOGUE GRID ----------------- */}
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
              certificados. Todo con entrega coordinada en un solo flete para
              ahorrar costos operativos.
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
                    Solicitar Cotización{" "}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ----------------- CORE VALUES SECTION ----------------- */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Nuestros Pilares
            </span>
            <h2 className="display-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Valores que Respaldan Cada Despacho
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="p-8 rounded-2xl border border-border bg-accent/40 shadow-sm space-y-4 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Abastecimiento Garantizado
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mantenemos depósitos estratégicos con stock permanente en
                cemento, mortero y cal para asegurar que nunca te falten
                materiales esenciales de cimentación.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-accent/40 shadow-sm space-y-4 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Logística Integrada
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Coordinamos con camiones volcadores y furgones para transportar
                de forma segura cubiertas de zinc y carpintería de aluminio
                frágil al mismo tiempo.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-accent/40 shadow-sm space-y-4 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Asesoramiento en Obra
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nuestros asesores de campo asisten a tu obra para evaluar la
                dosificación de hormigones o seleccionar las tuberías
                hidráulicas correctas para el caudal.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-accent/40 shadow-sm space-y-4 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 font-bold text-lg">
                4
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Compromiso Sustentable
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trabajamos con canteras que realizan restauración ecológica y
                distribuimos materiales de yeso y falso techo con
                certificaciones de huella de carbono neutra.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------- CTA ESTIMATE BANNER ----------------- */}
      <section className="py-12 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-foreground text-background overflow-hidden border border-white/10 shadow-2xl p-8 md:p-12">
            {/* Background design elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/10 pointer-events-none"></div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <h2 className="display-title text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  ¿Listo para Empezar a Construir?
                </h2>
                <p className="text-gray-300 text-sm sm:text-base max-w-xl">
                  Envíame tus planos, lista de compras o detalles de obra.
                  Nuestro equipo técnico realizará el cómputo métrico y te
                  enviará una cotización detallada en menos de 2 horas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button
                    size="lg"
                    className="h-12 px-8 font-semibold bg-primary hover:bg-primary/95 text-white shadow-lg shadow-primary/25"
                  >
                    Solicitar Presupuesto Gratis
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-8 font-semibold border-white/20 text-white hover:bg-white/10 hover:text-white"
                  >
                    Llamar a Ventas
                  </Button>
                </div>
              </div>

              {/* Right Column Image overlap */}
              <div className="lg:col-span-5 hidden lg:block relative self-end">
                <div className="overflow-hidden rounded-2xl border border-white/15 shadow-xl aspect-[1.3] bg-muted transform translate-y-8 translate-x-4">
                  <img
                    src="/assets/images1.png"
                    alt="Servicio y atencion en Ingeniomat"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------- ADVISORS / TEAM SECTION ----------------- */}
      <section className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Soporte Humano
            </span>
            <h2 className="display-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Asesores Técnicos Detrás de Cada Despacho
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded"></div>
            <p className="text-muted-foreground text-sm sm:text-base">
              No solo vendemos materiales, te acompañamos en el proceso
              constructivo con asesores especializados por áreas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Advisor 1 */}
            <div className="bg-card text-card-foreground rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col group">
              <div className="h-64 bg-muted overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-slate-900/10 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                  alt="Gabriel Rojas"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                />
                <span className="absolute bottom-4 left-4 z-20 text-[10px] font-bold tracking-widest text-background bg-foreground px-2 py-0.5 rounded uppercase">
                  Agregados y Acero
                </span>
              </div>
              <div className="p-5 text-left">
                <h4 className="text-lg font-bold text-foreground">
                  Ing. Gabriel Rojas
                </h4>
                <p className="text-xs text-muted-foreground font-semibold">
                  Cómputo Estructural
                </p>
              </div>
            </div>

            {/* Advisor 2 */}
            <div className="bg-card text-card-foreground rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col group">
              <div className="h-64 bg-muted overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-slate-900/10 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                  alt="Sofia Perez"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                />
                <span className="absolute bottom-4 left-4 z-20 text-[10px] font-bold tracking-widest text-background bg-foreground px-2 py-0.5 rounded uppercase">
                  Aluminio y Cubiertas
                </span>
              </div>
              <div className="p-5 text-left">
                <h4 className="text-lg font-bold text-foreground">
                  Arq. Sofía Pérez
                </h4>
                <p className="text-xs text-muted-foreground font-semibold">
                  Cálculo de Terminaciones
                </p>
              </div>
            </div>

            {/* Advisor 3 */}
            <div className="bg-card text-card-foreground rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col group">
              <div className="h-64 bg-muted overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-slate-900/10 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
                  alt="Andres Silva"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                />
                <span className="absolute bottom-4 left-4 z-20 text-[10px] font-bold tracking-widest text-background bg-foreground px-2 py-0.5 rounded uppercase">
                  Hormigones
                </span>
              </div>
              <div className="p-5 text-left">
                <h4 className="text-lg font-bold text-foreground">
                  Ing. Andrés Silva
                </h4>
                <p className="text-xs text-muted-foreground font-semibold">
                  Técnico en Dosificación
                </p>
              </div>
            </div>

            {/* Advisor 4 */}
            <div className="bg-card text-card-foreground rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col group">
              <div className="h-64 bg-muted overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-slate-900/10 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
                  alt="Daniela Reyes"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                />
                <span className="absolute bottom-4 left-4 z-20 text-[10px] font-bold tracking-widest text-background bg-foreground px-2 py-0.5 rounded uppercase">
                  Tuberías y Yeso
                </span>
              </div>
              <div className="p-5 text-left">
                <h4 className="text-lg font-bold text-foreground">
                  Ing. Daniela Reyes
                </h4>
                <p className="text-xs text-muted-foreground font-semibold">
                  Asesora de Redes e Instalaciones
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------- FOOTER ----------------- */}
      <footer className="bg-foreground text-background/80 pt-16 pb-8 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
            {/* Column 1 Logo and details */}
            <div className="lg:col-span-2 space-y-5 text-left">
              <img
                src="/assets/WhatsApp Image 2026-06-18 at 18.35.29.svg"
                alt="IngenioMat Logo"
                className="h-10 w-auto object-contain bg-white px-2 py-1.5 rounded"
              />
              <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                Proveedor integral de materiales para la construcción de alta
                resistencia. Flota propia y asesoramiento técnico sin costo.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>+1 (800) 555-1234</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span>ventas@ingeniomat.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>Parque Industrial Oeste, Galpón 4</span>
                </div>
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="text-left space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                Materiales
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#catalogo"
                    className="hover:text-primary transition-colors"
                  >
                    Cemento, Mortero y Cal
                  </a>
                </li>
                <li>
                  <a
                    href="#catalogo"
                    className="hover:text-primary transition-colors"
                  >
                    Áridos y Polvo Piedra
                  </a>
                </li>
                <li>
                  <a
                    href="#catalogo"
                    className="hover:text-primary transition-colors"
                  >
                    Techos de Zinc
                  </a>
                </li>
                <li>
                  <a
                    href="#catalogo"
                    className="hover:text-primary transition-colors"
                  >
                    Carpintería Aluminio
                  </a>
                </li>
                <li>
                  <a
                    href="#catalogo"
                    className="hover:text-primary transition-colors"
                  >
                    Falso Techo y Losas
                  </a>
                </li>
                <li>
                  <a
                    href="#catalogo"
                    className="hover:text-primary transition-colors"
                  >
                    Tuberías e Instalaciones
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Company */}
            <div className="text-left space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                Empresa
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#inicio"
                    className="hover:text-primary transition-colors"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#ventajas"
                    className="hover:text-primary transition-colors"
                  >
                    Ventajas de Compra
                  </a>
                </li>
                <li>
                  <a
                    href="#calculadora"
                    className="hover:text-primary transition-colors"
                  >
                    Calculadora Estructural
                  </a>
                </li>
                <li>
                  <a
                    href="#nosotros"
                    className="hover:text-primary transition-colors"
                  >
                    Quiénes Somos
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="hover:text-primary transition-colors"
                  >
                    Preguntas Frecuentes
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Newsletter */}
            <div className="text-left space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                Listas de Precios
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Suscríbete para recibir nuestro boletín quincenal con la lista
                de precios actualizada de cemento, acero y zinc.
              </p>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus-visible:ring-primary focus-visible:border-primary text-xs animate-none"
                />
                <Button className="w-full text-xs font-bold bg-primary text-white hover:bg-primary/95">
                  Suscribirme Ahora
                </Button>
              </div>
            </div>
          </div>

          {/* Under footer */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>
              © {new Date().getFullYear()} IngenioMat. Todos los derechos
              reservados. Diseñado para constructores exigentes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                Políticas de Venta
              </a>
              <span>|</span>
              <a href="#" className="hover:text-primary transition-colors">
                Garantía de Materiales
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
