import { Button } from "#/components/ui/button";
import { Check, ChevronRight, Sun, Battery, Settings, Eye } from "lucide-react";
import GPattern from "../ui/GPattern";

const SolarEnergy = () => {
  return (
    <section id="solar" className="py-20 bg-[#f5f0e8] dark:bg-background relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute left-[-10%] top-[-10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Energía Renovable
          </span>
          <h2 className="display-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Energía Solar y Autonomía de Baterías
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded"></div>
          <p className="text-muted-foreground text-sm sm:text-base">
            Libérate de los apagones y reduce tu factura de luz. Diseñamos e instalamos sistemas fotovoltaicos con almacenamiento inteligente adaptados al consumo de tu hogar o empresa.
          </p>
        </div>

        {/* 2-Column layout: Info / IA Image & System Elements Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image and List */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-muted group shadow-[6px_6px_14px_#d8d0c4,-6px_-6px_14px_#ffffff] dark:shadow-none">
              <img
                src="/assets/solar_battery.png"
                alt="Instalación Solar con Respaldo de Baterías"
                className="w-full h-48 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold tracking-wider uppercase text-white bg-primary/95 backdrop-blur-xs px-2.5 py-1 rounded-full w-fit mb-2">
                  100% Autónomo
                </span>
                <h4 className="text-xl font-bold">Respaldo ante Fallas Eléctricas</h4>
                <p className="text-xs text-gray-300">Monitoreo digital en tiempo real e inversión inteligente.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">¿Por qué elegir nuestro sistema híbrido?</h3>
              <p className="text-sm text-muted-foreground">
                A diferencia de los paneles solares tradicionales que se apagan cuando cae la red eléctrica pública, nuestros sistemas híbridos con baterías acumulan energía durante el día y te respaldan automáticamente ante cualquier corte.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Paneles solares monocristalinos de alta eficiencia.",
                  "Baterías de Litio LiFePO4 de última generación.",
                  "Inversores inteligentes híbridos certificados.",
                  "Instalación profesional y soporte permanente.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Informative System Setup Guide */}
          <div className="lg:col-span-6">
            <div className="bg-[#f5f0e8] dark:bg-card p-6 sm:p-8 rounded-3xl shadow-[6px_6px_14px_#d8d0c4,-6px_-6px_14px_#ffffff] dark:shadow-none border border-border text-left relative overflow-hidden">
              <GPattern
                cols={4}
                rows={2}
                variant="primary"
                opacity="opacity-[0.03]"
                fontSize="text-6xl"
                className="absolute top-2 right-2 w-48 h-32 z-0 pointer-events-none"
              />
              
              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-wider text-primary">
                    Guía de Funcionamiento
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Estructura del Sistema Híbrido</h3>
                  <p className="text-xs text-muted-foreground">
                    Conoce cómo interactúan los componentes clave del sistema para garantizar energía continua y reducir tu facturación.
                  </p>
                </div>

                {/* Info Cards Grid */}
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="p-4 bg-background/40 dark:bg-background/25 border border-border/40 rounded-2xl flex gap-4">
                    <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 shrink-0 h-fit">
                      <Sun className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">1. Captación Solar en Techo</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        Los paneles monocristalinos absorben la radiación solar directa y difusa durante el día, convirtiéndola de inmediato en corriente continua de alta tensión.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-4 bg-background/40 dark:bg-background/25 border border-border/40 rounded-2xl flex gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 h-fit">
                      <Settings className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">2. Inversión Inteligente Híbrida</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        El inversor regula los flujos de corriente. Prioriza el consumo del hogar, almacena el excedente en baterías y solo recurre a la red pública como respaldo final.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-4 bg-background/40 dark:bg-background/25 border border-border/40 rounded-2xl flex gap-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0 h-fit">
                      <Battery className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">3. Banco de Baterías de Litio (LiFePO4)</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        Almacena la energía para la noche o durante cortes de luz. Sistema de Litio Ferro-fosfato ultra seguro, con más de 10 años de vida útil estimada y carga rápida.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-4 bg-background/40 dark:bg-background/25 border border-border/40 rounded-2xl flex gap-4">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-500 shrink-0 h-fit">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">4. Monitoreo y Aplicación Móvil</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        Sigue en tiempo real tu consumo diario, la generación de tus paneles solares y el nivel de carga de tus baterías desde tu smartphone.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button className="w-full text-white bg-primary hover:bg-primary/95 shadow-md shadow-primary/15 rounded-xl py-6 flex items-center justify-center gap-2 font-bold">
                    Solicitar Auditoría de Consumo Gratis
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SolarEnergy;
