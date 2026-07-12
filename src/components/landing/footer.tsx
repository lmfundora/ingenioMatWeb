import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8 border-t border-white/10 mt-auto mx-1 mb-1 sm:mx-2 sm:mb-2 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Column 1 Logo and details */}
          <div className="lg:col-span-1 space-y-5 text-left">
            <img
              src="/assets/WhatsApp Image 2026-06-18 at 18.35.29.svg"
              alt="IngenioMat Logo"
              className="h-10 w-auto object-contain bg-white px-2 py-1.5 rounded"
            />
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Líderes en construcción, energía solar con baterías, carpintería de aluminio y suministro de materiales certificados de alta resistencia.
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

          {/* Column 2 - Materiales */}
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

          {/* Column 3 - Servicios */}
          <div className="text-left space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#construccion"
                  className="hover:text-primary transition-colors"
                >
                  Construcción Civil
                </a>
              </li>
              <li>
                <a
                  href="#construccion"
                  className="hover:text-primary transition-colors"
                >
                  Carpintería de Aluminio
                </a>
              </li>
              <li>
                <a
                  href="#solar"
                  className="hover:text-primary transition-colors"
                >
                  Sistemas Solar y Baterías
                </a>
              </li>
              <li>
                <a
                  href="#solar"
                  className="hover:text-primary transition-colors"
                >
                  Auditorías Energéticas
                </a>
              </li>
              <li>
                <a
                  href="#construccion"
                  className="hover:text-primary transition-colors"
                >
                  Remodelaciones y Acabados
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Company */}
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
                  Contacto
                </a>
              </li>
            </ul>
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
  );
};
export default Footer;
