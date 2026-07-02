import { Button } from "../ui/button";
import GPattern from "../ui/GPattern";

const Cta = () => {
  return (
    <section className="py-12 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-foreground text-background overflow-hidden border border-white/10 shadow-2xl p-8 md:p-12">
          {/* Background design elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-primary/10 pointer-events-none"></div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
          {/* Brand G-pattern watermark — top-left corner */}
          <GPattern
            cols={7}
            rows={4}
            variant="white"
            opacity="opacity-[0.04]"
            fontSize="text-8xl"
            className="absolute -top-4 -left-4 w-2/3 h-full z-0"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="display-title text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                ¿Listo para Empezar a Construir?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-xl">
                Envíame tus planos, lista de compras o detalles de obra. Nuestro
                equipo técnico realizará el cómputo métrico y te enviará una
                cotización detallada en menos de 2 horas.
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
  );
};
export default Cta;
