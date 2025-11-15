import { Mail, Phone, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border/30 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div>
            <h4 className="mb-1">КАПСА</h4>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@kapsa.ru"
              className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all"
            >
              <Mail className="w-4 h-4" />
              hello@kapsa.ru
            </a>
            <a
              href="tel:+79991234567"
              className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all"
            >
              <Phone className="w-4 h-4" />
              +7 (999) 123-45-67
            </a>
            <a
              href="https://instagram.com/kapsa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 hover:text-accent transition-all"
            >
              <Instagram className="w-4 h-4" />
              @kapsa
            </a>
          </div>
        </div>

        <div className="text-center text-sm opacity-50 mt-6">
          <p>© КАПСА, 2025</p>
        </div>
      </div>
    </footer>
  );
}
