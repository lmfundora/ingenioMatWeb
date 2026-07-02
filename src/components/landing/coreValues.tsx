const CoreValues = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Nuestros Pilares
          </span>
          <h2 className="display-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Valores que Respaldan Nuestra Producción
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
              Mantenemos depósitos estratégicos con stock permanente en cemento,
              mortero y cal para asegurar que nunca te falten materiales
              esenciales de cimentación.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-border bg-accent/40 shadow-sm space-y-4 relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 font-bold text-lg">
              2
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Carga Segura en Planta
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Supervisamos y asistimos en la carga ordenada de tus vehículos,
              asegurando que cubiertas de zinc y carpintería de aluminio se estiben
              de forma segura para su traslado.
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
              dosificación de hormigones o seleccionar las tuberías hidráulicas
              correctas para el caudal.
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
              distribuimos materiales de yeso y falso techo con certificaciones
              de huella de carbono neutra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoreValues;
