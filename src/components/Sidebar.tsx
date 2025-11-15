import { motion } from "motion/react";
import { Mail, Send, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  onNavigate: (section: string) => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Каталог", id: "catalog" },
    { label: "Галерея", id: "gallery" },
    { label: "О нас", id: "about" },
    { label: "Контакты", id: "custom" },
  ];

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/50 px-6 py-4 flex items-center justify-between">
        <h4 style={{ color: '#3A342E', letterSpacing: '0.1em' }}>КАПСА</h4>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-card rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

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
                style={{ color: '#544C43' }}
                className="block w-full text-left py-3 hover:opacity-100 transition-all font-medium"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#C8A25E';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#544C43';
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4 justify-center mb-8">
            <a 
              href="https://t.me/kapsa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 transition-colors"
              style={{ color: '#544C43' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C8A25E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#544C43';
              }}
            >
              <Send className="w-5 h-5" />
            </a>
            <a 
              href="mailto:hello@kapsa.ru" 
              className="p-2 transition-colors"
              style={{ color: '#544C43' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C8A25E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#544C43';
              }}
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com/kapsa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 transition-colors"
              style={{ color: '#544C43' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C8A25E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#544C43';
              }}
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <p className="text-center text-sm opacity-50">© КАПСА, 2025</p>
        </motion.div>
      )}

      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[30%] bg-background border-r border-border/50 flex-col justify-between p-10">
        <div>
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 
              style={{ 
                fontSize: '2rem', 
                fontWeight: 400, 
                letterSpacing: '0.15em',
                color: '#3A342E',
                marginBottom: '1.5rem',
                fontFamily: 'Cormorant Garamond, serif'
              }}
            >
              КАПСА
            </h2>
            
            <div style={{
              borderLeft: '3px solid #C8A25E',
              paddingLeft: '1rem',
              marginBottom: '2rem'
            }}>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.6',
                color: '#3A342E',
                fontWeight: 500,
                marginBottom: '0.25rem'
              }}>
                Настоящие книги для интерьера
              </p>
              <p style={{ 
                fontSize: '0.875rem', 
                color: '#6B635A',
                lineHeight: '1.5'
              }}>
                Подбор по цвету, стилю и теме
              </p>
            </div>

            {/* Feature Pills */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.75rem',
              marginBottom: '2rem'
            }}>
              {[
                'Подбор за 1 день',
                'От 990 ₽',
                'Доставка РФ',
                'Гарантия'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  style={{
                    backgroundColor: '#F5F0EA',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #D4C9BD',
                    textAlign: 'center'
                  }}
                >
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#3A342E'
                  }}>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Compact Info */}
            <div style={{
              backgroundColor: '#F5F0EA',
              padding: '1rem',
              borderRadius: '0.75rem',
              border: '1px solid #D4C9BD'
            }}>
              <p style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#3A342E',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Для оформления
              </p>
              <p style={{
                fontSize: '0.75rem',
                color: '#6B635A',
                lineHeight: '1.5'
              }}>
                Кафе • Отели • Офисы • Студии • Витрины • Квартиры
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                onClick={() => onNavigate(item.id)}
                style={{ 
                  color: '#3A342E',
                  fontSize: '1rem',
                  fontWeight: 500,
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F5F0EA';
                  e.currentTarget.style.color = '#C8A25E';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#3A342E';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>
        </div>

        {/* Footer */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "1.5rem",
      padding: "1rem",
      backgroundColor: "#F5F0EA",
      borderRadius: "0.75rem",
      border: "1px solid #D4C9BD",
    }}
  >
    <a
      href="https://t.me/kapsa"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "0.5rem",
        color: "#544C43",
        transition: "all 0.3s ease",
        borderRadius: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Telegram"
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#C8A25E";
        e.currentTarget.style.backgroundColor = "#FFFFFF";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#544C43";
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      <Send className="w-5 h-5" />
    </a>

    <a
      href="mailto:hello@kapsa.ru"
      style={{
        padding: "0.5rem",
        color: "#544C43",
        transition: "all 0.3s ease",
        borderRadius: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Email"
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#C8A25E";
        e.currentTarget.style.backgroundColor = "#FFFFFF";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#544C43";
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      <Mail className="w-5 h-5" />
    </a>

    <a
      href="https://instagram.com/kapsa"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "0.5rem",
        color: "#544C43",
        transition: "all 0.3s ease",
        borderRadius: "0.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Instagram"
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#C8A25E";
        e.currentTarget.style.backgroundColor = "#FFFFFF";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#544C43";
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      <Instagram className="w-5 h-5" />
    </a>
  </div>

  <p
    style={{
      fontSize: "0.75rem",
      color: "#6B635A",
      textAlign: "center",
    }}
  >
    © КАПСА, 2025
  </p>
</motion.div>

      </aside>
    </>
  );
}