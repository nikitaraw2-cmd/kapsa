import { motion } from "motion/react";
import { Mail, Send, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  onNavigate: (section: string) => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "По цвету", id: "catalog" },
    { label: "По стилю", id: "catalog" },
    { label: "По теме", id: "catalog" },
    { label: "О нас", id: "about" },
    { label: "Контакты", id: "custom" },
  ];

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/50 px-6 py-4 flex items-center justify-between">
        <h4>КАПСА</h4>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-card rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:hidden fixed inset-0 z-40 bg-background pt-20 px-6 pb-6 overflow-y-auto"
        >
          <nav className="space-y-4 mb-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 opacity-70 hover:opacity-100 hover:text-accent transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => {
              onNavigate("custom");
              setIsMobileMenuOpen(false);
            }}
            className="w-full py-4 bg-accent text-foreground rounded-full hover:bg-opacity-85 transition-all shadow-lg"
          >
            Получить подборку
          </button>

          <div className="flex items-center gap-4 justify-center mb-8">
            <a href="https://t.me/kapsa" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-accent transition-colors">
              <Send className="w-5 h-5" />
            </a>
            <a href="mailto:hello@kapsa.ru" className="p-2 hover:text-accent transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/kapsa" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <p className="text-center text-sm opacity-50">© КАПСА, 2025</p>
        </motion.div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[30%] bg-background border-r border-border/50 flex-col justify-between p-12">
        <div>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="mb-4 tracking-wider">КАПСА</h3>
            <div className="space-y-1 text-sm opacity-70 mb-6">
              <p>Настоящие книги для интерьера.</p>
              <p>Подбор по цвету, стилю и теме.</p>
            </div>

            {/* Подходит для оформления */}
            <div className="text-sm mb-6">
              <p className="opacity-80 mb-2">Подходит для оформления:</p>
              <ul className="space-y-1 opacity-70 text-xs leading-relaxed">
                <li>• витрин и выставочных пространств</li>
                <li>• зон ожидания и рецепций</li>
                <li>• стеллажей, полок и ниш</li>
                <li>• фотосцен и видеосъёмок</li>
                <li>• кафе, отелей, офисов, студий</li>
                <li>• домашних интерьеров</li>
              </ul>
            </div>

            {/* Преимущества */}
            <div className="text-sm">
              <p className="opacity-80 mb-2">Преимущества:</p>
              <ul className="space-y-1 opacity-70 text-xs leading-relaxed">
                <li>• подбор за 1 день</li>
                <li>• комплекты от 990 ₽</li>
                <li>• доставка по всей РФ</li>
                <li>• гарантия замены</li>
              </ul>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 mb-12"
          >
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                onClick={() => onNavigate(item.id)}
                className="block w-full text-left opacity-70 hover:opacity-100 hover:text-accent transition-all duration-300"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => onNavigate("custom")}
            className="w-full py-4 bg-accent text-foreground rounded-full hover:bg-opacity-85 transition-all duration-300 shadow-lg"
          >
            Получить подборку
          </motion.button>
        </div>

        {/* Footer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://t.me/kapsa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-accent transition-colors"
              aria-label="Telegram"
            >
              <Send className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@kapsa.ru"
              className="p-2 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/kapsa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm opacity-50">© КАПСА, 2025</p>
        </motion.div>
      </aside>
    </>
  );
}