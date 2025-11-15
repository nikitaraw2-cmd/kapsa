import { motion } from "motion/react";
import { Phone, Mail, MapPin, Instagram, Send, ArrowRight } from "lucide-react";

export function NewFooter() {
  return (
    <footer style={{ backgroundColor: '#3A342E', color: '#E8DFD4' }}>
      
      {/* CTA Section */}
      <div style={{ backgroundColor: '#2D2722', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 400,
              marginBottom: '1rem',
              fontFamily: 'Cormorant Garamond, serif',
              color: '#FFFFFF'
            }}
          >
            Готовы преобразить ваше пространство?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '1.125rem',
              color: '#D4C9BD',
              marginBottom: '2rem',
              lineHeight: 1.6
            }}
          >
            Закажите бесплатную консультацию и получите персональную подборку книг
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '1.25rem 2.5rem',
                backgroundColor: '#C8A25E',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '1.125rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s ease'
              }}
            >
              Получить консультацию
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
            </motion.button>

            <motion.a
              href="tel:+79001234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '1.25rem 2.5rem',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                border: '2px solid #FFFFFF',
                borderRadius: '9999px',
                fontSize: '1.125rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              <Phone style={{ width: '1.25rem', height: '1.25rem' }} />
              Позвонить сейчас
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>

          {/* Company Info */}
          <div>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 400,
              letterSpacing: '0.15em',
              marginBottom: '1rem',
              fontFamily: 'Cormorant Garamond, serif',
              color: '#FFFFFF'
            }}>
              КАПСА
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#D4C9BD',
              lineHeight: 1.6,
              marginBottom: '1.5rem'
            }}>
              Настоящие книги для интерьера. Создаём уникальные библиотечные композиции для кафе, отелей, офисов и домов.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[
                { icon: Send, href: "https://t.me/kapsa" },
                { icon: Mail, href: "mailto:hello@kapsa.ru" },
                { icon: Instagram, href: "https://instagram.com/kapsa" }
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    backgroundColor: 'rgba(232, 223, 212, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D4C9BD',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#C8A25E';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(232, 223, 212, 0.1)';
                    e.currentTarget.style.color = '#D4C9BD';
                  }}
                >
                  <Icon style={{ width: '1.25rem', height: '1.25rem' }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: 600,
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#FFFFFF'
            }}>
              Навигация
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {[
                { label: "Каталог", href: "#catalog" },
                { label: "Портфолио", href: "#portfolio" },
                { label: "Как работаем", href: "#process" },
                { label: "Отзывы", href: "#reviews" }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      color: '#D4C9BD',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C8A25E')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#D4C9BD')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: 600,
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#FFFFFF'
            }}>
              Контакты
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Phone style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  color: '#C8A25E',
                  flexShrink: 0,
                  marginTop: '0.125rem'
                }} />
                <a
                  href="tel:+79001234567"
                  style={{
                    color: '#D4C9BD',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C8A25E')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#D4C9BD')}
                >
                  +7 900 123-45-67
                </a>
              </li>

              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Mail style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  color: '#C8A25E',
                  flexShrink: 0,
                  marginTop: '0.125rem'
                }} />
                <a
                  href="mailto:hello@kapsa.ru"
                  style={{
                    color: '#D4C9BD',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C8A25E')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#D4C9BD')}
                >
                  hello@kapsa.ru
                </a>
              </li>

              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  color: '#C8A25E',
                  flexShrink: 0,
                  marginTop: '0.125rem'
                }} />
                <span style={{
                  color: '#D4C9BD',
                  fontSize: '0.95rem',
                  lineHeight: 1.5
                }}>
                  Москва, ул. Примерная, д. 1
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(232, 223, 212, 0.2)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.875rem',
          color: '#9B9389'
        }}>
          <div>© 2025 КАПСА. Все права защищены.</div>

          <div style={{ display: 'flex', gap: '2rem' }}>
            <a
              href="#"
              style={{ color: '#9B9389', textDecoration: 'none', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C8A25E')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9B9389')}
            >
              Политика конфиденциальности
            </a>

            <a
              href="#"
              style={{ color: '#9B9389', textDecoration: 'none', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C8A25E')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#9B9389')}
            >
              Договор оферты
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
