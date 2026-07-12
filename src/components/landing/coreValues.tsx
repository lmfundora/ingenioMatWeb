import GPattern from "../ui/GPattern";

const CoreValues = () => {
  const values = [
    {
      n: "1",
      title: "Abastecimiento Garantizado",
      body: "Mantenemos depósitos estratégicos con stock permanente en cemento, mortero y cal para asegurar que nunca te falten materiales esenciales de cimentación.",
    },
    {
      n: "2",
      title: "Carga Segura en Planta",
      body: "Supervisamos y asistimos en la carga ordenada de tus vehículos, asegurando que cubiertas de zinc y carpintería de aluminio se estiben de forma segura para su traslado.",
    },
    {
      n: "3",
      title: "Asesoramiento en Obra",
      body: "Nuestros asesores de campo asisten a tu obra para evaluar la dosificación de hormigones o seleccionar las tuberías hidráulicas correctas para el caudal.",
    },
    {
      n: "4",
      title: "Compromiso Sustentable",
      body: "Trabajamos con canteras que realizan restauración ecológica y distribuimos materiales de yeso y falso techo con certificaciones de huella de carbono neutra.",
    },
  ];
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Full-section G-pattern watermark — fades downward */}
      <GPattern
        cols={10}
        rows={3}
        variant="primary"
        opacity="opacity-[0.04]"
        fontSize="text-8xl"
        className="absolute top-0 left-0 w-full h-64 z-0 [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Nuestros Pilares
          </span>
          <h2 className="display-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Valores que Respaldan Nuestra Producción
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded"></div>
        </div>

        {/* Cards — neumorphic on white background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {values.map((card) => (
            <div
              key={card.n}
              className="p-8 rounded-3xl bg-background dark:bg-card space-y-4 relative overflow-hidden group
                         shadow-[6px_6px_14px_#d1d1d1,-6px_-6px_14px_#ffffff] dark:shadow-none
                         hover:scale-[1.02] transition-all duration-300 cursor-default"
            >
              {/* Number badge — inset neumorphic */}
              <div
                className="w-full gap-4 h-12 rounded-2xl text-primary flex items-center justify-center shrink-0 font-bold text-lg
                              bg-background dark:bg-primary/10
                              "
              >
                {card.n}
                <h6 className="text-lg font-semifont-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h6>
              </div>

              <div className="h-0.5 w-full bg-primary"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CoreValues;
