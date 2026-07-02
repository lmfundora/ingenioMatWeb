const Advisors = () => {
  return (
    <section className="py-20 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Soporte Humano
          </span>
          <h2 className="display-title text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Asesores Técnicos Detrás de Cada Proyecto
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
  );
};
export default Advisors;
