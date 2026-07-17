import { useState } from "react";
import { X, Menu } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo container */}
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            <img
              src="/assets/WhatsApp Image 2026-06-18 at 18.35.29.svg"
              alt="IngenioMat Logo"
              className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#inicio" className="text-primary">
            Inicio
          </a>
          <a href="#catalogo" className="text-primary">
            Materiales
          </a>
          <a href="#construccion" className="text-primary">
            Construcción
          </a>
          <a href="#contacto" className="text-primary">
            Contacto
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Button
            color="primary"
            className="hover:bg-accent hover:text-accent-foreground"
          >
            Presupuesto
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
        <div className="md:hidden border-t border-border bg-background px-4 pt-4 pb-6 space-y-3 animate-fade-in">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-semibold hover:bg-accent hover:text-primary transition-colors"
          >
            Inicio
          </a>
          <a
            href="#catalogo"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-semibold hover:bg-accent hover:text-primary transition-colors"
          >
            Materiales
          </a>
          <a
            href="#construccion"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-semibold hover:bg-accent hover:text-primary transition-colors"
          >
            Construcción
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-semibold hover:bg-accent hover:text-primary transition-colors"
          >
            Contacto
          </a>
          <div className="pt-4 px-3">
            <Button
              variant="outline"
              className="w-full border-border hover:bg-accent hover:text-accent-foreground"
            >
              Presupuesto
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
