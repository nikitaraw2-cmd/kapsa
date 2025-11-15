import { motion, useScroll, useTransform } from "motion/react";
import { ShoppingBag, Phone } from "lucide-react";
import { useState } from "react";

export function NewNavbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(232, 223, 212, 0)", "rgba(232, 223, 212, 0.95)"]
  );
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Каталог", href: "#catalog" },
    { label: "Портфолио", href: "#portfolio" },
    { label: "Как работаем", href: "#process" },
    { label: "Отзывы", href: "#reviews" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'rgba(212, 201, 189, 0.3)'
      }}>
        
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} style={{ cursor: 'pointer' }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 400,
            letterSpacing: '0.15em',
            color: '#3A342E',
            fontFamily: 'Cormorant Garamond, serif',
            margin: 0
          }}>
            КАПСА
          </h2>
          <p style={{
            fontSize: '0.625rem',
            color: '#6B635A',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginTop: '0.25rem'
          }}>
            Книги для интерьера
          </p>
        </motion.div>

        {/* Desktop Navigation */}
        <div
          style={{ display: 'none', gap: '2rem', alignItems: 'center' }}
          className="lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                color: '#544C43',
                fontSize: '0.95rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C8A25E')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#544C43')}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <motion.a
            href="tel:+79001234567"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#FFFFFF',
              border: '2px solid #D4C9BD',
              borderRadius: '9999px',
              color: '#3A342E',
              fontWeight: 600,
              fontSize: '0.875rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            className="lg:flex"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#C8A25E';
              e.currentTarget.style.backgroundColor = '#F5F0EA';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#D4C9BD';
              e.currentTarget.style.backgroundColor = '#FFFFFF';
            }}
          >
            <Phone style={{ width: '1rem', height: '1rem' }} />
            <span>+7 900 123-45-67</span>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#3A342E',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.875rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2D2722')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3A342E')}
          >
            <ShoppingBag style={{ width: '1rem', height: '1rem' }} />
            <span className="hidden lg:inline">Заказать</span>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              padding: '0.5rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
            className="lg:hidden"
          >
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
              style={{
                width: '1.5rem',
                height: '2px',
                backgroundColor: '#3A342E',
                borderRadius: '2px'
              }}
            />
            <motion.div
              animate={{ opacity: isOpen ? 0 : 1 }}
              style={{
                width: '1.5rem',
                height: '2px',
                backgroundColor: '#3A342E',
                borderRadius: '2px'
              }}
            />
            <motion.div
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
              style={{
                width: '1.5rem',
                height: '2px',
                backgroundColor: '#3A342E',
                borderRadius: '2px'
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          style={{
            backgroundColor: '#F5F0EA',
            borderTop: '1px solid #D4C9BD'
          }}
          className="lg:hidden"
        >
          <div style={{ padding: '1.5rem' }}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  padding: '1rem',
                  color: '#3A342E',
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#C8A25E';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#3A342E';
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
