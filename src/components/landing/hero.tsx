import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import GPattern from "../ui/GPattern";

const Typewriter = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 50;
    const pauseAfterTyping = 2000;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseAfterTyping);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return <span>{currentText}</span>;
};

const Hero = () => {
  return (
    <section id="inicio" className="relative pb-32 pt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        {/* GPattern watermark */}
        <GPattern
          cols={6}
          rows={4}
          variant="primary"
          opacity="opacity-[0.05]"
          fontSize="text-7xl"
          className="absolute top-0 right-0 w-[50%] h-[50%] z-0 [mask-image:linear-gradient(to_bottom_left,transparent_20%,black_80%)]"
        />
        <div className="flex flex-col gap-6 lg:gap-8 w-5/6 md:w-3/4 mx-auto relative z-10 pt-4 pb-8">
          {/* Header - Texto grande arriba */}
          <h1 className="display-title text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1] md:leading-[1.05]">
            Experiencia para{" "}
            <span className="text-primary bg-clip-text">
              <Typewriter words={["Construir", "Restaurar", "Mejorar"]} />
            </span>
            <br />
            lo que necesitas
          </h1>

          {/* Images Grid - Fotos en el medio */}
          <div className="w-full max-w-4xl relative flex justify-center items-center">
            <div className="w-full grid grid-cols-12 gap-2 md:gap-3 auto-rows-[220px] md:auto-rows-[150px] items-stretch animate-fade-in relative z-10">
              {/* Card 1 - Energía Solar y Baterías */}
              <div className="col-span-6 md:col-span-6 row-span-2 overflow-hidden rounded-2xl border border-border relative group transition-all duration-500 hover:shadow-2xl hover:border-primary/50 bg-muted">
                <img
                  src="/assets/solar_battery.png"
                  alt="Instalación de Paneles Solares y Baterías"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[8px] font-bold tracking-wider text-white uppercase bg-emerald-600/90 backdrop-blur-xs px-2 py-0.5 rounded-full w-fit mb-0.5 flex items-center gap-1">
                    Sistemas Solares
                  </span>
                  <p className="text-white text-[10px] font-extrabold leading-tight tracking-wide">
                    Autonomía Energética
                  </p>
                </div>
              </div>

              {/* Card 2 - Carpintería de Aluminio */}
              <div className="col-span-6 md:col-span-6 row-span-1 overflow-hidden rounded-2xl border border-border relative group transition-all duration-500 hover:shadow-2xl hover:border-primary/50 bg-muted">
                <img
                  src="/assets/carpinteria_aluminio.png"
                  alt="Carpintería de aluminio de alta gama"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[8px] font-bold tracking-wider text-white uppercase bg-sky-600/90 backdrop-blur-xs px-2 py-0.5 rounded-full w-fit mb-0.5 flex items-center gap-1">
                    Aluminio y Vidrio
                  </span>
                  <p className="text-white text-[10px] font-extrabold leading-tight tracking-wide">
                    Acabados a Medida
                  </p>
                </div>
              </div>

              {/* Card 3 - Construcción Llave en Mano */}
              <div className="col-span-6 md:col-span-6 row-span-1 overflow-hidden rounded-2xl border border-border relative group transition-all duration-500 hover:shadow-2xl hover:border-primary/50 bg-muted">
                <img
                  src="/assets/dream_house_3.png"
                  alt="Construcción civil y remodelación"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[8px] font-bold tracking-wider text-white uppercase bg-amber-600/95 backdrop-blur-xs px-2 py-0.5 rounded-full w-fit mb-0.5 flex items-center gap-1">
                    Edificación
                  </span>
                  <p className="text-white text-[10px] font-extrabold leading-tight tracking-wide">
                    Proyectos Llave en Mano
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Texto pequeño abajo */}
          <div className="w-full text-end flex flex-col items-end gap-4">
            <p className="text-sm sm:text-base max-w-2xl text-muted-foreground text-balance">
              Líderes en construcción civil. Llevamos tu proyecto de principio a
              fin con calidad y autonomía.
            </p>
            <Button
              size="lg"
              color="primary"
              className="text-primary-foreground"
            >
              Solicitar Presupuesto
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="flex justify-around gap-4 text-center mt-30">
          <div className="space-y-1">
            <div className="text-4xl md:text-5xl  text-foreground tracking-tight">
              500k+
            </div>
            <div className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Toneladas Producidas
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl md:text-5xl  text-foreground tracking-tight">
              1,200+
            </div>
            <div className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Obras Abastecidas
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl md:text-5xl  text-foreground tracking-tight">
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
