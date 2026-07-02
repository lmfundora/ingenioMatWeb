import { useState } from "react";
import { Button } from "../ui/button";
import { X, Menu } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo container */}
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            <img
              src="/assets/WhatsApp Image 2026-06-18 at 18.35.29.svg"
              alt="IngenioMat Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="nav-link is-active">
            Inicio
          </a>
          <a href="#ventajas" className="nav-link">
            Ventajas
          </a>
          <a href="#catalogo" className="nav-link">
            Materiales
          </a>
          <a href="#calculadora" className="nav-link">
            Calculadora
          </a>
          <a href="#nosotros" className="nav-link">
            Nosotros
          </a>
          <a href="#contacto" className="nav-link">
            Contacto
          </a>
        </nav>

        {/* CTA Right */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            size="lg"
            color="primary"
            className="text-primary-foreground "
          >
            Presupuesto Rápido
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pt-4 pb-6 space-y-3 animate-fade-in shadow-xl">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-semibold hover:bg-accent hover:text-primary transition-colors"
          >
            Inicio
          </a>
          <a
            href="#ventajas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-semibold hover:bg-accent hover:text-primary transition-colors"
          >
            Ventajas
          </a>
          <a
            href="#catalogo"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-semibold hover:bg-accent hover:text-primary transition-colors"
          >
            Materiales
          </a>
          <a
            href="#calculadora"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-semibold hover:bg-accent hover:text-primary transition-colors"
          >
            Calculadora
          </a>
          <a
            href="#nosotros"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-semibold hover:bg-accent hover:text-primary transition-colors"
          >
            Nosotros
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-semibold hover:bg-accent hover:text-primary transition-colors"
          >
            Contacto
          </a>
          <div className="pt-4 px-3">
            <Button color="primary" className="w-full text-primary-foreground">
              Presupuesto Rápido
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
