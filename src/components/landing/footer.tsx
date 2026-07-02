import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 pt-16 pb-8 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Column 1 Logo and details */}
          <div className="lg:col-span-2 space-y-5 text-left">
            <img
              src="/assets/WhatsApp Image 2026-06-18 at 18.35.29.svg"
              alt="IngenioMat Logo"
              className="h-10 w-auto object-contain bg-white px-2 py-1.5 rounded"
            />
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Proveedor integral de materiales para la construcción de alta
              resistencia. Venta directa de fábrica y asesoramiento técnico sin costo.
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

          {/* Column 2 - Quick Links */}
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
                  Carpintería Aluminio
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

          {/* Column 3 - Company */}
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
                  href="#calculadora"
                  className="hover:text-primary transition-colors"
                >
                  Calculadora Estructural
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
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="text-left space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Listas de Precios
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Suscríbete para recibir nuestro boletín quincenal con la lista de
              precios actualizada de cemento, acero y zinc.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus-visible:ring-primary focus-visible:border-primary text-xs animate-none"
              />
              <Button className="w-full text-xs font-bold bg-primary text-white hover:bg-primary/95">
                Suscribirme Ahora
              </Button>
            </div>
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
