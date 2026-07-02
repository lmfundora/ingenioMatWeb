import { Award, Calculator, ShieldCheck, Factory } from "lucide-react";
import { Button } from "../ui/button";

const WhyUss = () => {
  return (
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
                alt="Producción y stock de materiales de construcción"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-8 text-left text-white">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <Factory className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Infraestructura y Capacidad
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Retiro Ágil en Planta
                </h3>
                <p className="text-sm text-gray-300">
                  Cargamos tus vehículos directamente en nuestras instalaciones, optimizando los tiempos para que tu obra nunca se detenga.
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
                  acero estructural están certificados bajo estrictas normas de
                  resistencia a la compresión y tracción.
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
                  ingenieros calcularán las cantidades exactas de tubos, sacos,
                  losas y zinc para evitar el desperdicio.
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
  );
};
export default WhyUss;
