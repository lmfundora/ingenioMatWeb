const CategoriesChips = () => {
  const categories = [
    "Construcción Civil",
    "Energía Solar",
    "Baterías y Respaldo",
    "Carpintería de Aluminio",
    "Cemento y Arena",
    "Techos de Zinc",
    "Falso Techo",
    "Losas y Cerámicas",
    "Tuberías Hidráulicas",
    "Tuberías Eléctricas",
    "Polvo de Piedra",
    "Mortero y Cal",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-background py-5">
      {/* Decorative gradient masks to fade the edges for a very premium look */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `,
        }}
      />

      <div className="flex w-max animate-marquee">
        {/* List 1 */}
        <div className="flex gap-8 pr-8 shrink-0">
          {categories.map((cat, idx) => (
            <div
              key={`cat1-${idx}`}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-foreground border border-foreground text-background text-xs md:text-sm font-extrabold tracking-wider uppercase transition-all duration-300 hover:bg-primary hover:border-primary hover:text-primary-foreground hover:scale-105 cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              {cat}
            </div>
          ))}
        </div>
        {/* List 2 (Duplicate for loop) */}
        <div className="flex gap-8 pr-8 shrink-0">
          {categories.map((cat, idx) => (
            <div
              key={`cat2-${idx}`}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-foreground border border-foreground text-background text-xs md:text-sm font-extrabold tracking-wider uppercase transition-all duration-300 hover:bg-primary hover:border-primary hover:text-primary-foreground hover:scale-105 cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              {cat}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CategoriesChips;
