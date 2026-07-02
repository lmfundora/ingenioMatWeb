const CategoriesChips = () => {
  const categories = [
    "Cemento y Arena",
    "Techos de Zinc",
    "Carpintería de Aluminio",
    "Falso Techo",
    "Losas y Cerámicas",
    "Tuberías Hidráulicas",
    "Tuberías Eléctricas",
    "Polvo de Piedra",
    "Mortero y Cal",
  ];
  return (
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
  );
};
export default CategoriesChips;
